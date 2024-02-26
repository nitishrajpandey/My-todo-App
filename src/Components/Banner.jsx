import React from "react";
import { bannerimg } from "../assets";

function Banner() {
  return (
    <div className="">
      <div className="rounded-2xl  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
        <div
          className="rounded-2xl  h-[300px] w-[100%] bg-center bg-cover bg-no-repeat opacity-50"
          style={{ backgroundImage: `url(${bannerimg})` }}
        ></div>
      </div>
    </div>
  );
}

export default Banner;
