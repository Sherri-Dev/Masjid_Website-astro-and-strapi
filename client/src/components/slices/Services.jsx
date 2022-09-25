import React from "react";
import Flex from "../../layouts/Flex";
import Grid from "../../layouts/Grid";
import Section from "../../layouts/Section";
import Card1 from "../Card/Card1";
import Heading from "../shared/Heading";
const Services = () => {
  return (
    <Section padding={"block"} ariaLabelledBy="services-heading">
      <Heading
        title="Our Services"
        subTitle="What We Offer"
        alignment={"centered"}
        id="services-heading"
      />
      <Grid variant={"four-col"}>
        <Card1 title="Community Service" />
        <Card1 title="Special Child Care" />
        <Card1 title="Quran Classes" />
        <Card1 title="Building Upgrades" />
      </Grid>
    </Section>
  );
};

export default Services;
