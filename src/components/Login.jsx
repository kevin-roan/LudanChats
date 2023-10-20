import { Button, Typography, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import React from "react";
import ChatRoom from "./ChatRoom";

export default function Login() {
  return (
    <div>
      <div className="mt-60">
        <Typography variant="h4">Login With Email</Typography>
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
          <Link to={{ pathname: "/chatroom" }}>
            <Button color="lime" className="m-3" Link="/chatroom">
              Login with Email
            </Button>
          </Link>
          <Button color="white">Create New Account</Button>
        </div>
        <Typography variant="h6">OR</Typography>
        <div className="mt-4">
          <IconButton color="white" size="lg">
            <i class="fa-brands fa-google"></i>
          </IconButton>
          <Typography variant="h6">Sign in with Google</Typography>
        </div>
      </div>
    </div>
  );
}
