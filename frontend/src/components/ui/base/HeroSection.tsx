import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"

import Link from "next/link";
const HeroSection = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div>
        <Image
          src={"/banner_img.svg"}
          height={600}
          width={600}
          alt="banner_img"
        />
      </div>
      <div className="text-center mt-4">
        <h1 className="text-6xl md:text-7xl lg:text-9xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">

          Clash
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">DIscover the better choice, together</p>
<Link href={"/login"}>
<Button className="mt-3 bg-black text-white border-2 hover:border-0 hover:text-black hover:bg-white" >Start Free</Button>
</Link>
       
      </div>
    </div>
  );
};

export default HeroSection;
