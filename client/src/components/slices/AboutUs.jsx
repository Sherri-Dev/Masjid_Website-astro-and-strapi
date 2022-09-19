import React from "react";
import Section from "../../layouts/Section";
import Heading from "../shared/Heading";
import Button from "../shared/Button";

const AboutUs = () => {
  return (
    <Section
      containerClasses="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-14 "
      ariaLabelledBy="about-heading"
    >
      <div className="relative h-fit rounded md:w-1/2 lg:top-6 lg:border-8 lg:border-prColor">
        <img
          src="/about-us.jpg"
          alt="About us"
          className="relative w-full rounded lg:-top-7 lg:left-8"
          width="510"
          height="390"
        />
      </div>
      <div className="md:w-1/2">
        <Heading
          title="About Islamic Center"
          subTitle="Our History"
          id="about-heading"
        >
          We established our center in 1954, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris .Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Heading>
        <Button extraClasses={"mt-4 lg:mt-6"} size="md">
          Read More
        </Button>
      </div>
    </Section>
  );
};

export default AboutUs;
