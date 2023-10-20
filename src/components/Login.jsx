import { Button } from "@material-tailwind/react";
import React from "react";

export default function Login() {
  return (
    <div>
      <div className="mt-60">
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered input-accent w-full max-w-xs m-3 "
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered input-secondary w-full max-w-xs"
        />
        <div className="flex justify-center items-center m-3 ">
          <Button color="lime" className="m-3">
            Login with Email
          </Button>
          <Button color="white">Create New Account</Button>
        </div>
      </div>
    </div>
  );
}
