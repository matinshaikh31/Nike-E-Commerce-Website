import React from "react";
import {PlayIcon} from "@heroicons/react/24/solid"


export const Clips = ({ imgsrc, clip }) => {
  return (
    <div className="relative h-28 w-32 rounded-xl overflow-hidden group cursor-pointerlg:w-28 md:w-24 sm:w-14  lg:h-28 md:h-24 sm:h-14 ">
      <img
        src={imgsrc}
        alt="img/cip"
        className="inset-0 flex h-full w-full object-cover absolute right-0 left-0 top-0 rounded-xl opacity-100 z-10 transition-all duration-100 "
      />
      <div className="bg-white blur-effect-theme absolute top-11 left-11 lg:top-8 sm:top-5 sm:left-5 right-0 opacity-100 z-[100] w-8 h-8 md:w-5 md:h-5 flex items-center justify-center rounded-full">
      <PlayIcon className="icon-style md:w-3 md:h-3 text-slate-900 "/>
      </div>
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        className="absolute top-0 right-0 left-0 flex h-full w-full  object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-50 rounded-xl  "
      >
        <source type="video/mp4" src={clip} />
      </video>
    </div>
  );
};
