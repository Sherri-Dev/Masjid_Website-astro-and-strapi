import React from "react";
import Section from "../../layouts/Section";
import Button from "../shared/Button";

const Hero = () => {
  return (
    <Section className="relative py-10 before:absolute before:inset-0  before:-z-10 before:bg-prColor/50 before:content-[''] md:py-16 lg:py-20 xl:py-32">
      <video
        src="/hero-bg-video.m4v"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay
      ></video>
      <img
        src="/bism-img-white.png"
        alt="Bismillah HirrahMa Ni Raheem"
        className="mx-auto mb-8 w-44 sm:w-fit"
      />
      <h1 className="mb-10 text-center text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
        Discover Islamic Beliefs <br /> With Ummah Here
      </h1>
      <Button
        extraClasses={"mx-auto block w-fit sm:text-lg "}
        variant="outlined"
      >
        Learn More
      </Button>
    </Section>
  );
};

export default Hero;
