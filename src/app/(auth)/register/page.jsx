import React from "react";
import {Button, Input, Label} from "@heroui/react";
import Link from "next/link";

const Register = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center ">
             <div className="bg-white p-10 rounded-2xl shadow-2xl flex flex-col space-y-10">
                 <h2 className="text-2xl  text-center font-bold text-[#403F3F]">Register your account</h2>
              <form action="">
                <div className="flex w-100 flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="input-type-email">Your Name</Label>
                    <Input
                      name="name"
                      placeholder="Enter your name"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="input-type-email">Photo URL</Label>
                    <Input
                      name="profileImage"
                      placeholder="Enter your profile image url"
                      type="text"
                    />
                  </div>
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
                  <div className="mt-3" >
                    <Button type="submit" className={`w-full rounded-sm bg-[#403F3F]`}>Register</Button>
                  </div>
                </div>
              </form>
              <div className="flex space-x-2 items-center justify-center text-sm">
                <span className="text-[#706F6F]">I Have An Account</span> <Link className="text-[#F75B5F] " href={`/login`}>Login</Link>
              </div>
             </div>
            </div>
    );
}

export default Register;
