import React from "react";
import AudioPlayer from "react-h5-audio-player";
import Section from "../../layouts/Section";
import Info from "../shared/Info";
import "react-h5-audio-player/lib/styles.css";
const CustomAudioPlayer = () => {
  return (
    <Section
      containerClasses={"flex gap-6 flex-col"}
      padding="none"
      className="-mt-10"
      title={"Tilawat e Quran Pak"}
    >
      <AudioPlayer
        src="/surah-fateh.mp3"
        header={
          <Info
            title={"Surah Fateh"}
            desc="(Tilawat & Translation)"
            descColor="text-gray-500"
          />
        }
      />
    </Section>
  );
};

export default CustomAudioPlayer;
