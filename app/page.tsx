"use client";
import { signIn } from "next-auth/react";
import { useSession } from 'next-auth/react';

export default function Home() {
  // return a button that sends the user to a generic sign-in page
  const session = useSession();
  if (session.status !== "authenticated")
  return (
    <button onClick={()=>signIn()}>Sign In</button>
  );
    // for those wondering why we don't just assign signIn to onClick directly: because TypeScript will complain about incompatible types if we did
    else
      return <div>Welcome, {session.data.user?.email} </div>
}
