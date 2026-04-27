"use client";
import React, { useState } from "react";
import { Button, Input, Label } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const Login = () => {
  const [loading,setLoading] = useState(false)
  const handelLogin = async (e) => {
    e.preventDefault();
    setLoading(true)
    const formData = new FormData(e.target);
    const userLoginData = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
      email: userLoginData?.email,
      password: userLoginData?.password,
      callbackURL: "/",
    });
    if (data) {
      toast.success("login success");
    }
    if (error) {
      toast.error(error?.message);
    }
    setLoading(false)
  };
  return (
    <div className="flex flex-col min-h-screen justify-center items-center ">
      <div className="bg-white p-10 rounded-2xl shadow-2xl flex flex-col space-y-10">
        <h2 className="text-2xl  text-center font-bold text-[#403F3F]">
          Login your account
        </h2>
        <form onSubmit={handelLogin}>
          <div className="flex w-100 flex-col gap-4">
            <div className="flex flex-col gap-1">
              <Label htmlFor="input-type-email">Email address</Label>
              <Input
                name="email"
                placeholder="abdul@example.com"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="input-type-password">Password</Label>
              <Input
                name="password"
                placeholder="Enter your password"
                type="password"
              />
            </div>
            <div>
              <Button
                type="submit"
                className={`w-full rounded-sm bg-[#403F3F] ${loading ? "cursor-not-allowed bg-gray-300" :""}`}
              >
                {loading ? "Login..." :"Login"}
              </Button>
            </div>
          </div>
        </form>
        <div className="flex space-x-2 items-center justify-center text-sm">
          <span className="text-[#706F6F]">Dont’t Have An Account</span>{" "}
          <Link className="text-[#F75B5F] " href={`/register`}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
