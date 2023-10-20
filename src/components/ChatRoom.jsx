import { Typography, Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import React from "react";

export default function ChatRoom() {
  return (
    <>
      <div className=" badge badge-neutral">
        <Typography>Today</Typography>
      </div>
      <div className="m-5">
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-primary m-1">Bhai jaaan</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-success m-1">
            Kya Hua be ?
          </div>
          <div className="chat-bubble chat-bubble-success">kisne maara</div>
        </div>
        <div className="fixed flex bottom-9 w-full">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered "
          />
          <Button color="pink" className="mx-4">
            Send
          </Button>
        </div>
      </div>
    </>
  );
}
