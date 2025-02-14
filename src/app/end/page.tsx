"use client";

import Image from "next/image";

export default function End() {
  return (
    <div>
      <main className="font-medium flex flex-col gap-4 justify-center items-center h-screen bg-pink-600">
        <h1 className="pointer-events-none whitespace-pre-wrap text-white text-center text-5xl">
          Happy Valentine&apos;s Day Erika My LOML!
        </h1>
        <div className="flex flex-col gap-4 mt-10">
          <h2 className="text-white text-center">
            I wish us the best thing and I want you to be my forever valentine! This is the end of the tour of this web, I hope you like it!
          </h2>
          <div className="flex gap-4">
            <Image
              src="https://i.pinimg.com/736x/d7/41/04/d74104dc43b52e9010f956031dbaceac.jpg"
              width={1000}
              height={1000}
              alt="Kamu"
              className="max-w-sm h-auto rounded-xl"
            />
            <Image
              src="https://i.pinimg.com/736x/ad/d7/42/add742c4546c42fa67db8c50a1e876b4.jpg"
              width={1000}
              height={1000}
              alt="Kamu"
              className="max-w-sm h-auto rounded-xl"
            />
            <Image
              src="https://i.pinimg.com/736x/1c/5e/88/1c5e88ae5848ce1f7a4bce03c2eb763b.jpg"
              width={1000}
              height={1000}
              alt="Kamu"
              className="max-w-sm h-auto rounded-xl"
            />

          </div>
        </div>
      </main>
    </div>
  );
}
