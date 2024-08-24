/* eslint-disable @next/next/no-img-element */

import React from "react";

const Fotbar = () => {
  return (
    <div className="relative h-fit w-full">
      <img src="/images/fotbar.png" alt="Foto Bareng" className="w-full" />
      <div className="absolute bottom-0 h-60 w-full bg-gradient-to-t from-base-dark via-base-dark via-30% to-transparent"></div>
      <div className="absolute top-0 h-60 w-full bg-gradient-to-b from-white via-white via-30% to-transparent"></div>
    </div>
  );
};

export default Fotbar;
