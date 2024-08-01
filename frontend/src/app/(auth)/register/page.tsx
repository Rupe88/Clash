import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const register = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="w-[550px] py-5 bg-white shadow-md px-10 rounded-xl">
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
            Clash
          </h1>
          <h1 className="text-3xl font-bold ">Register</h1>
          <p>Welcome to Clash </p>
          <form>
            <div className="mt-4">
            <label htmlFor="name">Name</label>
              <Input
                className=""
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name."
              />
              <label htmlFor="email">Email</label>
              <Input
                className=""
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email."
              />
              <label htmlFor="password">Passowrd</label>
              <Input
                placeholder="Enter Your Password"
                id="password"
                type="password"
                name="password"
              />
                  <label htmlFor="cpassword">Confirm Passowrd</label>
              <Input
                placeholder="Enter Your Confirm Password"
                id="cpassword"
                type="password"
                name="confirm_password"
              />
          
            </div>
            <div className="mt-4">
                <Button className="w-full bg-black text-white hover:text-black">Submit</Button>
            </div>

          </form>
          <p className="text-center mt-2">Already have an account ? <strong>
            <Link href={"/login"}>login</Link>
            </strong></p>
        </div>
      </div>
    </div>
  );
};

export default register;
