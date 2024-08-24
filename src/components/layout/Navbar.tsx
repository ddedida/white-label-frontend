import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <section className="sticky top-0 z-50 flex h-fit w-full justify-center bg-white">
      <div className="flex h-20 w-[1280px] items-center justify-between">
        <h1 className="font-secondary text-2xl font-black text-base-dark">
          HMTC
        </h1>
        <div className="flex gap-x-4">
          <Link
            href="#"
            className="flex h-fit w-fit items-center justify-center px-4 py-2 font-secondary text-base font-semibold text-base-dark hover:bg-base-gray"
          >
            Home
          </Link>
          <Link
            href="#"
            className="flex h-fit w-fit items-center justify-center px-4 py-2 font-secondary text-base font-medium text-base-nav hover:bg-base-gray"
          >
            Tentang HMTC
          </Link>
          <Link
            href="#"
            className="flex h-fit w-fit items-center justify-center px-4 py-2 font-secondary text-base font-medium text-base-nav hover:bg-base-gray"
          >
            Kepengurusan
          </Link>
          <Link
            href="#"
            className="flex h-fit w-fit items-center justify-center px-4 py-2 font-secondary text-base font-medium text-base-nav hover:bg-base-gray"
          >
            Akademik
          </Link>

          {/* Login Page */}
          <Link
            href="/login"
            className="flex h-fit w-fit items-center justify-center bg-blue-main px-4 py-2 font-secondary text-base font-medium text-white hover:bg-blue-dark-2"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
