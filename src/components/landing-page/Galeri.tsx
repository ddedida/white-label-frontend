import React from "react";
import Image from "next/image";

const Galeri = () => {
  return (
    <section className="flex w-full justify-center bg-base-dark py-24">
      <div className="flex w-[1280px] flex-col gap-14 text-white">
        <div className="flex w-full justify-between">
          <h1 className="font-primary text-[64px] font-extrabold">
            Galeri Kami.
          </h1>
          <button className="font-secondary text-lg font-semibold hover:underline">
            Baca Selengkapnya
          </button>
        </div>

        {/* Galeri */}
        <div className="flex h-fit w-full flex-col gap-y-5">
          <div className="flex h-[547px] w-full justify-between">
            <Image
              src="/images/reeva-1.png"
              width={420}
              height={547}
              alt="Reeva 1"
            />
            <Image
              src="/images/npc-1.png"
              width={840}
              height={547}
              alt="NPC 1"
            />
          </div>
          <div className="flex h-[547px] w-full justify-between">
            <Image
              src="/images/nst-1.png"
              width={1280}
              height={547}
              alt="NST 1"
            />
          </div>
          <div className="flex h-[547px] w-full justify-between">
            <Image
              src="/images/nlc-1.png"
              width={840}
              height={547}
              alt="NLC 1"
            />
            <Image
              src="/images/reeva-2.png"
              width={420}
              height={547}
              alt="Reeva 2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galeri;
