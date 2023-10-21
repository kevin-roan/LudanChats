import { Typography, Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { useState } from "react";
import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/compat/app";
const firestore = firebase.firestore();

export default function ChatRoom() {
  const [formData, setFormData] = useState("");

  // messages fetch start
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });
  console.log(messages);
  // messages fetch end

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
          {messages &&
            messages.map((msg) => (
              <div className="chat-bubble chat-bubble-success m-1">
                {msg.text}
              </div>
            ))}
          <div className="chat-bubble chat-bubble-success">{formData}</div>
        </div>
        <div className="fixed flex bottom-9 w-full">
          <input
            type="text"
            placeholder="Say something..."
            className="input input-bordered "
            onChange={(e) => setFormData(e.target.value)}
          />
          <Button color="pink" className="mx-4" disabled={!formData}>
            Send
          </Button>
        </div>
      </div>
    </>
  );
}
