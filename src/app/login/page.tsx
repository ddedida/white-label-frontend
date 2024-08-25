"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.error === false) {
          // Save the token in localStorage or cookies
          localStorage.setItem("token", data.loginResult.token);

          // Redirect to dashboard
          router.push("/login/dashboard");
        } else {
          alert("Login failed: " + data.message);
        }
      } else if (response.status === 401) {
        const data = await response.json();
        alert("Login failed: " + data.message);
      } else {
        alert("Login failed: Server error");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed: Network error");
    }
  };

  return (
    <main className="h-full w-full">
      <div className="flex w-full">
        <div className="w-1/3">
          <Image
            src="/images/login.png"
            width={670}
            height={1024}
            alt="Login Side Design"
          />
        </div>

        {/* Form Login */}
        <div className="flex w-2/3 items-center justify-center">
          <form
            className="relative flex w-[560px] flex-col gap-y-12 text-base-dark"
            onSubmit={handleSubmit}
          >
            <div className="absolute -top-24 right-0 flex items-center gap-x-3">
              <h1 className="font-secondary text-4xl font-black">HMTC</h1>
              <Image
                src="/images/logo-kabinet-secondary.png"
                width={62}
                height={65}
                alt="Logo Kabinet"
              />
            </div>
            <div className="flex w-full flex-col gap-y-3">
              <h1 className="w-full font-primary text-[64px] font-bold">
                MASUK
              </h1>
              <p className="w-full font-secondary text-base font-normal">
                Silahkan masuk informasi login untuk mengakses akun
              </p>
            </div>
            <div className="flex flex-col gap-y-6">
              {/* Username */}
              <div className="flex flex-col gap-y-1">
                <label className="font-secondary text-xl font-semibold">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Masukkan Username"
                  className="mt-2 h-12 w-full rounded-lg border-2 border-gray-300 px-4 focus:border-blue-500 focus:outline-none"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-y-1">
                <label className="font-secondary text-xl font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Masukkan Password"
                  className="mt-2 h-12 w-full rounded-lg border-2 border-gray-300 px-4 focus:border-blue-500 focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-md bg-blue-main py-2 font-secondary text-lg font-normal text-white"
            >
              Masuk
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Page;
