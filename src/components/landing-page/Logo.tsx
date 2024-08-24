import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex h-[400px] w-full items-center justify-center bg-white">
      <div className="flex items-center justify-center gap-x-14">
        <Image
          src="/images/logo-kabinet-main.png"
          width={188}
          height={197}
          alt="Logo Kabinet"
        />
        <h1 className="h-fit w-[460px] font-primary text-[104px] font-bold leading-none text-base-dark">
          Sansarga Abhijaya
        </h1>
      </div>
    </div>
  );
};

export default Logo;
