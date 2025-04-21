"use client";

import Link from "next/link";

function Error({ error }) {
  return (
    <div className="flex flex-col justify-center gap-20 items-center h-screen w-screen  ">
      <h1 className=" text-6xl font-black">{error.message}</h1>
      <Link href="/.." replace={true} className="">
        <div className=" border rounded-[10px] bg-[#50D890] text-[#EFFFFB] font-bold w-[150%] h-[40px] flex justify-center items-center">
          back to home
        </div>
      </Link>
    </div>
  );
}

export default Error;
