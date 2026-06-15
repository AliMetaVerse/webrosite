import { Hero } from "@/components/sections/hero";
import { Trust } from "@/components/sections/trust";
import { Why } from "@/components/sections/why";
import { Solutions } from "@/components/sections/solutions";
import { Mission } from "@/components/sections/mission";
import { Customers } from "@/components/sections/customers";
import { Locations } from "@/components/sections/locations";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Why />
      <Solutions />
      <Mission />
      <Customers />
      <Locations />
      <CTA />
    </>
  );
}
