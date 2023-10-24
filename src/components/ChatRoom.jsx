import { Typography, Button } from "@material-tailwind/react";
import { useState, useRef, useEffect } from "react";
import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/compat/app";
import { Link } from "react-router-dom";

const firestore = firebase.firestore();
const auth = firebase.auth();

export default function ChatRoom() {
  const dummy = useRef();
  const [formData, setFormData] = useState("");
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(1000);
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
  useEffect(() => {
    if (messages) {
      const latestMessage = messages[messages.length - 1];
      const currentUserUid = auth.currentUser.uid;
      if (latestMessage && latestMessage.uid !== currentUserUid) {
        if ("Notification" in window) {
          Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
              const notification = new Notification("Bhai Jaan", {
                body: "You have a new message.",
              });
            }
          });
        }
      }
    }
  }, [messages]);
  return (
    <>
      {auth.currentUser ? (
        <>
          <div className=" badge badge-neutral">
            <Typography>Today</Typography>
          </div>

          <div className="m-5">
            <div className="mb-24">
              {messages &&
                messages.map((msg) => {
                  const uid = msg.uid;
                  const messageClass =
                    uid === auth.currentUser.uid ? "chat-end" : "chat-start";
                  const msgColor =
                    uid === auth.currentUser.uid
                      ? "chat-bubble-success"
                      : "chat-bubble-primary";
                  return (
                    <div className={`chat ${messageClass}`}>
                      <div className={`chat-bubble ${msgColor} m-1`}>
                        {msg.text}
                        <div className="avatar">
                          <div className="w-8 h-8 rounded-full">
                            <img
                              src={
                                msg.photoURL ||
                                "https://api.adorable.io/avatars/23/abott@adorable.png"
                              }
                            />
                          </div>
                        </div>
                        <span ref={dummy}></span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="fixed flex bottom-9 w-full">
            <form onSubmit={sendMessage}>
              <input
                type="text"
                placeholder="Say something..."
                value={formData}
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
              <Button
                onClick={() =>
                  window.scrollTo({
                    top: 10000000,
                    behavior: "auto",
                  })
                }
                color="blue-gray"
                className="rounded-full"
              >
                <i class="fa fa-angle-double-down" aria-hidden="true"></i>
              </Button>
            </form>
          </div>
        </>
      ) : (
        <div>
          <p>Login Failed</p>
          <Link to={{ pathname: "/groups" }}>
            <Button color="red">Try Again</Button>
          </Link>
        </div>
      )}
    </>
  );
}
