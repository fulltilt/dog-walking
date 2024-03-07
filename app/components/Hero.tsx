import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    // after:w-full after:h-[240px] after:bg-gradient-to-t after:from-white after:via-white/80 after:to-white/20 after:absolute after:bottom-0 after:z-20
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url("hero.jpeg")`, minWidth: "100vw" }}
    >
      {/* <Image
        className="h-auto absolute right-0 top-0 -z-10"
        src="/hero.jpeg"
        width={1000}
        height={600}
        alt="hero bg"
        priority={true}
      /> */}
      <Navbar />
      <div className="container h-[calc(100vh-120px)] grid items-center">
        <div className="space-y-4 bg-[#ffffff98] w-fit p-4 rounded-2xl">
          <h2 className="text-6xl md:text-4xl font-bold">
            Welcome all dogs of any age or breed!
          </h2>
          <p className="text-gray-700 text-[14px] sm:text-[16px]">
            Your pet will have lots of fun and will make new friends!
          </p>
          <Button className="bg-thirdary text-white px-6 py-4 rounded-3xl text-[14px] sm:text-[16px]">
            <Link href="#services">View Services</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
