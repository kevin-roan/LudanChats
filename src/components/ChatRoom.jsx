import { Typography, Button } from "@material-tailwind/react";
import { useState, useRef } from "react";
import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/compat/app";

const firestore = firebase.firestore();
const auth = firebase.auth();

export default function ChatRoom() {
  const dummy = useRef();
  const [formData, setFormData] = useState("");
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formData,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setFormData("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className=" badge badge-neutral">
        <Typography>Today</Typography>
      </div>
      <div className="m-5">
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-primary m-1">Bhai jaaan</div>
        </div>
        <div className="mb-24">
          <div className="chat chat-end">
            {messages &&
              messages.map((msg) => (
                <div className="chat-bubble chat-bubble-success m-1">
                  {msg.text}
                </div>
              ))}
            <span ref={dummy}></span>
          </div>
        </div>
        <span ref={dummy}></span>
        <div className="fixed flex bottom-9 w-full">
          <form onSubmit={sendMessage}>
            <input
              type="text"
              placeholder="Say something..."
              className="input input-bordered "
              onChange={(e) => setFormData(e.target.value)}
            />
            <Button
              color="pink"
              className="mx-4"
              disabled={!formData}
              onClick={sendMessage}
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
