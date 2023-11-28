"use client";

import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { Slider } from "@mui/material";
import { useState } from "react";

import AvatarCircle from "./Avatar-circle";

const Player = () => {
  const [sound, setSound] = useState(true);
  const [position, setPosition] = useState(0);

  return (
    <div className="flex items-center bg-white text-gray-300 min-h-16 w-full gap-x-4 mt-4">
      <AvatarCircle />
      <div className="flex justify-center items-center gap-x-4">
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <MdKeyboardDoubleArrowLeft size={24} />
          <p className="text-sm italic">10s</p>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <MdKeyboardDoubleArrowRight size={24} />
          <p className="text-sm italic">10s</p>
        </div>
      </div>
      <div className="grow pl-2 flex justify-center items-center">
        <Slider
          aria-label="time-indicator"
          size="small"
          value={position}
          min={0}
          step={1}
          max={200}
          onChange={(_, value) => setPosition(value as number)}
          sx={{
            color: "rgba(0,0,0,0.87)",
            height: 4,
            "& .MuiSlider-thumb": {
              width: 8,
              height: 8,
              transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
              "&:before": {
                boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
              },
              "&:hover, &.Mui-focusVisible": {
                boxShadow: `0px 0px 0px 8px ${"rgb(0 0 0 / 16%)"}`,
              },
              "&.Mui-active": {
                width: 20,
                height: 20,
              },
            },
            "& .MuiSlider-rail": {
              opacity: 0.28,
            },
          }}
        />
      </div>
      <p className="p-2">00:00 / 00:00</p>
      <div
        className="text-black cursor-pointer"
        onClick={() => setSound(!sound)}
      >
        {sound ? <HiSpeakerWave size={24} /> : <HiSpeakerXMark size={24} />}
      </div>
    </div>
  );
};

export default Player;
