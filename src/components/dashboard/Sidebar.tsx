"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdSpaceDashboard } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.push("/login");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("An error occurred during logout:", error);
    }
  };

  return (
    <div className="flex min-h-screen w-1/5 flex-col gap-y-6 bg-white px-6 py-10">
      {/* Logo */}
      <div className="flex w-full items-center justify-center gap-x-4">
        <Image
          src="/images/logo-kabinet-secondary.png"
          width={50}
          height={53}
          alt="Logo Kabinet"
        />
        <h1 className="w-28 font-primary text-xl font-extrabold text-base-dark">
          Sansarga Abhijaya
        </h1>
      </div>

      {/* Menu */}
      <div className="h-full w-full">
        <Link
          href="/login/dashboard"
          className="flex w-full items-center gap-x-4 rounded-md px-5 py-3 hover:bg-base-gray"
        >
          <MdSpaceDashboard className="scale-[1.75] fill-blue-main" />
          <p className="font-secondary text-lg font-semibold text-blue-main">
            Dashboard
          </p>
        </Link>
      </div>

      {/* Logout */}
      <button
        className="flex w-full items-center gap-x-4 rounded-md bg-blue-main px-5 py-3 hover:bg-blue-dark-1"
        onClick={handleLogout}
      >
        <BiLogOut className="scale-[1.5] fill-white" />
        <p className="font-secondary text-base font-normal text-white">
          Logout
        </p>
      </button>
    </div>
  );
};

export default Sidebar;
