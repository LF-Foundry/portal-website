import Image from "next/image";
import { portalServices } from "@/data/services";

type ServiceLogoGroupProps = {
  hidden?: boolean;
};

function ServiceLogoGroup({ hidden = false }: ServiceLogoGroupProps) {
  return (
    <ul className="service-marquee__group" aria-hidden={hidden || undefined}>
      {portalServices.map((service) => (
        <li className="service-marquee__item" key={service.name} title={service.name}>
          <Image
            src={service.logo}
            alt={hidden ? "" : `${service.name} logo`}
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
          {[0, 1, 2, 3].map((groupIndex) => (
            <ServiceLogoGroup
              hidden={groupIndex > 0}
              key={groupIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
