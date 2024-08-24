import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex w-full justify-center bg-base-dark py-12">
      <div className="flex w-[1280px] flex-col gap-y-6 text-white">
        {/* Main */}
        <div className="flex h-[248px] w-full items-start">
          <div className="flex w-full gap-x-4">
            <Image
              src="/images/logo-kabinet-secondary.png"
              width={65}
              height={68}
              alt="Logo Kabinet"
            />
            <div className="font-primary text-2xl font-extrabold">
              <h1>Himpunan Mahasiswa</h1>
              <h1>Teknik Computer-Informatika.</h1>
            </div>
          </div>
          <div className="flex w-48 flex-col gap-y-3 font-secondary">
            <h2 className="text-base font-semibold text-white text-opacity-65">
              HMTC
            </h2>
            <div className="flex w-full flex-col items-start gap-y-2 text-sm font-medium text-white text-opacity-40">
              <button className="hover:text-white">Tentang Kami</button>
              <button className="hover:text-white">Kepengurusan</button>
              <button className="hover:text-white">MBKM</button>
            </div>
          </div>
          <div className="flex w-48 flex-col gap-y-3 font-secondary">
            <h2 className="text-base font-semibold text-white text-opacity-70">
              Akademik
            </h2>
            <div className="flex w-full flex-col items-start gap-y-2 text-sm font-medium text-white text-opacity-40">
              <button className="hover:text-white">Bank Soal</button>
              <button className="hover:text-white">Silabus</button>
              <button className="hover:text-white">MSIB</button>
              <button className="hover:text-white">Kalender Akademik</button>
            </div>
          </div>
        </div>

        {/* Line Divider */}
        <div className="w-full border-b border-white border-opacity-20"></div>

        {/* Copyright */}
        <div className="flex items-center justify-between">
          <p>© HMTC ITS 2023</p>
          <div className="flex gap-x-4">
            <Link
              href="https://x.com/hmtc_its"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white hover:scale-105"
              target="_blank"
            >
              <Image
                src="/icons/twitter.svg"
                width={24}
                height={24}
                alt="Twitter"
              />
            </Link>
            <Link
              href="https://www.instagram.com/hmtc_its/"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white hover:scale-105"
              target="_blank"
            >
              <Image
                src="/icons/instagram.svg"
                width={24}
                height={24}
                alt="Instagram"
              />
            </Link>
            <Link
              href="https://www.youtube.com/c/bluepresshmtc"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white hover:scale-105"
              target="_blank"
            >
              <Image
                src="/icons/youtube.svg"
                width={24}
                height={24}
                alt="Youtube"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/himpunan-mahasiswa-teknik-computer-informatika/"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white hover:scale-105"
              target="_blank"
            >
              <Image
                src="/icons/linkedin.svg"
                width={24}
                height={24}
                alt="Linkedin"
              />
            </Link>
            <Link
              href="https://www.instagram.com/hmtc_its/"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white hover:scale-105"
              target="_blank"
            >
              <Image
                src="/icons/tiktok.svg"
                width={24}
                height={24}
                alt="Tiktok"
              />
            </Link>
            <Link
              href="https://line.me/R/ti/p/@ycp2851v?from=page&liff.referrer=https%3A%2F%2Flinktr.ee%2F&accountId=ycp2851v"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white hover:scale-105"
              target="_blank"
            >
              <Image src="/icons/line.svg" width={24} height={24} alt="Line" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
