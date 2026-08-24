import Image from "next/image";
import { portalServices } from "@/data/services";

type ServiceLogoGroupProps = {
  duplicate?: boolean;
};

function ServiceLogoGroup({ duplicate = false }: ServiceLogoGroupProps) {
  return (
    <ul className="service-marquee__group" aria-hidden={duplicate || undefined}>
      {portalServices.map((service) => (
        <li className="service-marquee__item" key={service.name} title={service.name}>
          <Image
            src={service.logo}
            alt={duplicate ? "" : `${service.name} logo`}
            width={30}
            height={30}
            unoptimized
          />
        </li>
      ))}
    </ul>
  );
}

export default function ServiceMarquee() {
  return (
    <section className="service-strip" aria-label="AI services available in Portal">
      <div className="service-marquee">
        <div className="service-marquee__track">
          <ServiceLogoGroup />
          <ServiceLogoGroup duplicate />
        </div>
      </div>
    </section>
  );
}
