import React from "react";
import Flex from "../../layouts/Flex";
import Section from "../../layouts/Section";
import NamazTime from "../global/NamazTime";
import Heading from "../shared/Heading";

const NamazTimings = () => {
  return (
    <Section ariaLabelledBy={"namaz-timings-heading"} variant="full-width">
      <Heading
        title="Namaz Timings"
        subTitle="Associated Mosque"
        id="namaz-timings-heading"
        variant={"centered"}
      />
      <Flex>
        <NamazTime
          title={"Fajr"}
          beginTime="4:56 AM"
          iqamahTime="4:56 AM"
          variant={"shaded"}
        />
        <NamazTime title={"Zuhr"} beginTime="01:00 PM" iqamahTime="1:30 PM" />
        <NamazTime
          title={"Asr"}
          beginTime="05:09 PM"
          iqamahTime="06:00 PM"
          variant={"shaded"}
        />
        <NamazTime
          title={"Magrib"}
          beginTime="07:19 PM"
          iqamahTime="07:19 PM"
        />
        <NamazTime
          title={"Isha"}
          beginTime="08:27 PM"
          iqamahTime="08:45 PM"
          variant={"shaded"}
        />
        <NamazTime
          title={"Jumah"}
          beginTime="12:30 PM"
          iqamahTime="01:30 PM"
          variant={"colored"}
        />
      </Flex>
    </Section>
  );
};

export default NamazTimings;
