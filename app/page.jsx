"use client";
import Link from "next/link";
import { useState } from "react";
function Home() {
  let [positionPasswordINP, setPositionPasswordINP] = useState(false);
  let [passwordINP, setPasswordINP] = useState("");
  return (
    <>
      <div className=" flex items-center justify-center min-h-screen">
        <Link href="login">Sign IN</Link>
      </div>
    </>
  );
}

export default Home;
