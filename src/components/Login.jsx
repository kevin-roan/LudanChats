import { Button, Typography, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Groups from "./Groups";

import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const SignInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
};

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [user] = useAuthState(auth);

  const handleEmailChange = (e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setFormData({
      ...formData,
      password: e.target.value,
    });
  };

  const handleSubmit = (isLogin) => {
    try {
      if (isLogin) {
        firebase
          .auth()
          .signInWithEmailAndPassword(formData.email, formData.password);
        setFormData({ email: "", password: "" });
        console.log("user logged in");
      } else {
        firebase
          .auth()
          .createUserWithEmailAndPassword(formData.email, formData.password);
        setFormData({ email: "", password: "" });
        console.log("new user");
      }
    } catch (error) {
      window.prompt("Error", error);
    }
  };

  const SignOut = () => {
    return (
      auth.currentUser && (
        <Button onClick={() => auth.signOut()}>Sign Out</Button>
      )
    );
  };

  return (
    <div>
      {user ? (
        <>
          <Groups />
          <SignOut />
        </>
      ) : (
        <div className="mt-60">
          <Typography variant="h4">Login With Email</Typography>
          <form>
            <input
              value={formData.email}
              type="email"
              placeholder="Email"
              className="input input-bordered input-accent w-full max-w-xs m-3 "
              onChange={handleEmailChange}
            />
            <input
              value={formData.password}
              type="password"
              placeholder="Password"
              className="input input-bordered input-secondary w-full max-w-xs"
              onChange={handlePasswordChange}
            />
          </form>
          <div className="flex justify-center items-center m-3 ">
            <Link to={{ pathname: "/groups" }}>
              <Button
                color="lime"
                className="m-3"
                Link="/chatroom"
                onClick={() => handleSubmit(true)}
              >
                Login with Email
              </Button>
            </Link>

            <Link to={{ pathname: "/groups" }}>
              <Button color="white" onClick={() => handleSubmit(false)}>
                Create New Account
              </Button>
            </Link>
          </div>
          <Typography variant="h6">OR</Typography>
          <div className="mt-4">
            <IconButton color="white" size="lg" onClick={SignInWithGoogle}>
              <i class="fa-brands fa-google"></i>
            </IconButton>
            <Typography variant="h6">Sign in with Google</Typography>
          </div>
        </div>
      )}
    </div>
  );
}
