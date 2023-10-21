import { Button, Typography, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import Groups from "./Groups";

import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCvzH6lmgJllp57xA2VBe0Ipw7NKQIQGq0",
  authDomain: "ludanchats-fc442.firebaseapp.com",
  projectId: "ludanchats-fc442",
  storageBucket: "ludanchats-fc442.appspot.com",
  messagingSenderId: "842444773688",
  appId: "1:842444773688:web:89c829a1d7ec072c7e89cd",
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const SignInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
};

export default function Login() {
  const [user] = useAuthState(auth);

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
            <Link to={{ pathname: "/groups" }}>
              <Button color="lime" className="m-3" Link="/chatroom">
                Login with Email
              </Button>
            </Link>

            <Link to={{ pathname: "/groups" }}>
              <Button color="white">Create New Account</Button>
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
