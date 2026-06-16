// Generates src/app/favicon.ico from the Webropol "W" brand mark.
// Renders the SVG to square PNGs (transparent, padded) and packs them
// into a multi-resolution PNG-based .ico container.
import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const srcSvg = join(root, "public/img/logo/W-logo-dark.svg");
const outIco = join(root, "src/app/favicon.ico");

const sizes = [16, 32, 48, 64, 128, 256];
const svg = readFileSync(srcSvg);

async function renderSquare(size) {
  // Render the 40x34 mark scaled to fit a square with ~12% padding,
  // centred on a transparent canvas.
  const pad = Math.round(size * 0.12);
  const inner = size - pad * 2;
  const mark = await sharp(svg, { density: 384 })
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: mark, gravity: "center" }])
    .png()
    .toBuffer();
}

function buildIco(images) {
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(count, 4);

  const entries = Buffer.alloc(16 * count);
  let offset = 6 + 16 * count;
  const dataParts = [];

  images.forEach((img, i) => {
    const e = i * 16;
    entries.writeUInt8(img.size >= 256 ? 0 : img.size, e + 0); // width
    entries.writeUInt8(img.size >= 256 ? 0 : img.size, e + 1); // height
    entries.writeUInt8(0, e + 2); // palette
    entries.writeUInt8(0, e + 3); // reserved
    entries.writeUInt16LE(1, e + 4); // colour planes
    entries.writeUInt16LE(32, e + 6); // bits per pixel
    entries.writeUInt32LE(img.data.length, e + 8); // size in bytes
    entries.writeUInt32LE(offset, e + 12); // offset
    offset += img.data.length;
    dataParts.push(img.data);
  });

  return Buffer.concat([header, entries, ...dataParts]);
}

const images = [];
for (const size of sizes) {
  images.push({ size, data: await renderSquare(size) });
}
writeFileSync(outIco, buildIco(images));
console.log(`Wrote ${outIco} (${images.length} sizes: ${sizes.join(", ")})`);
