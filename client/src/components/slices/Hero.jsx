import React from "react";
import Section from "../../layouts/Section";
import Button from "../shared/Button";

const Hero = () => {
  return (
    <>
      <Section
        className="relative pt-10 pb-20 before:absolute before:inset-0  before:-z-10 before:bg-prColor/50 before:content-[''] md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 xl:pt-32 xl:pb-40"
        ariaLabelledBy={"hero-heading"}
      >
        <video
          src="/hero-bg-video.m4v"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          autoPlay
          muted
          loop
        ></video>
        <img
          src="/bism-img-white.png"
          alt="Bismillah HirrahMa Ni Raheem"
          className="mx-auto mb-8 w-44 sm:w-fit"
        />
        <h1
          className="mb-10 text-center text-xl font-bold uppercase text-white sm:text-3xl md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight"
          id="hero-heading"
        >
          Discover Islamic Beliefs <br /> With Ummah Here
        </h1>
        <Button
          extraClasses={"mx-auto block w-fit "}
          size="lg"
          variant="outlined"
        >
          Learn More
        </Button>
      </Section>
    </>
  );
};

export default Hero;
