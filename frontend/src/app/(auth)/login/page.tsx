import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const login = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="w-[550px] py-5 bg-white shadow-md px-10 rounded-xl">
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
            Clash
          </h1>
          <h1 className="text-3xl font-bold ">Login</h1>
          <p>Welcome Back </p>
          <form>
            <div className="mt-4">
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
              <div className="text-right font-bold">
              <Link href="forget-password">Forget Password ?</Link>

              </div>
            </div>
            <div className="mt-4">
                <Button className="w-full bg-black text-white hover:text-black">Submit</Button>
            </div>

          </form>
          <p className="text-center mt-2">Dont have an account ? <strong>
            <Link href={"/register"}>Register</Link>
            </strong></p>
        </div>
      </div>
    </div>
  );
};

export default login;
