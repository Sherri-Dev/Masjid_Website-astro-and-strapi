import React from "react";
import Heading from "../shared/Heading";
import Section from "../../layouts/Section";
import Flex from "../../layouts/Flex";
import Pillar from "../global/Pillar";
const Pillars = () => {
  return (
    <Section
      padding={"block"}
      className="relative isolate bg-[url(/about-us.jpg)] bg-cover bg-fixed bg-center bg-no-repeat before:absolute before:inset-0 before:-z-10 before:bg-black/80 before:content-['']"
    >
      <Heading
        variant="centered"
        title="Pillars of Islam"
        subTitle="About Essential"
        theme={"inverted"}
        alignment="centered"
      />
      <Flex className="mt-4 flex-wrap justify-center gap-6 md:justify-between">
        <Pillar
          title="Shahadah"
          desc="(Faith)"
          img={{ src: "/clicker.png", alt: "Shahadat Finger" }}
        />
        <Pillar
          title="Salah"
          desc="(Prayer)"
          img={{ src: "/pray.png", alt: "Prayer" }}
        />
        <Pillar
          title="Sawm"
          desc="(Fasting)"
          img={{ src: "/islamic-ramadan.png", alt: "slamic-ramadan" }}
        />
        <Pillar
          title="Zakat"
          desc="(Alms giving)"
          img={{ src: "/salary.png", alt: "Donation" }}
        />
        <Pillar
          title="Hajj"
          desc="(Pilgrimage)"
          img={{ src: "/kaaba-building.png", alt: "Bait-ul-ALLAH" }}
        />
      </Flex>
    </Section>
  );
};

export default Pillars;
