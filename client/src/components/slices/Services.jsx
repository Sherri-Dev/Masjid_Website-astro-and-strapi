import React from "react";
import Flex from "../../layouts/Flex";
import Section from "../../layouts/Section";
import Card1 from "../Card/Card1";
import Heading from "../shared/Heading";
const Services = () => {
  return (
    <Section padding={"block"} ariaLabelledBy="services-heading">
      <Heading
        title="Our Services"
        subTitle="What We Offer"
        variant={"centered"}
        id="services-heading"
      />
      <Flex className={"flex-wrap gap-5 sm:mt-4"}>
        <Card1 title="Community Service" />
        <Card1 title="Special Child Care" />
        <Card1 title="Quran Classes" />
        <Card1 title="Building Upgrades" />
      </Flex>
    </Section>
  );
};

export default Services;
