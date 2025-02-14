"use client";

import { type ConfettiRef } from "@/components/magicui/confetti";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Enjoy() {
  const confettiRef = useRef<ConfettiRef>(null);
  return (
    <div>
      <main className="font-medium flex flex-col gap-4 justify-center items-center h-screen bg-pink-600">
        <h1 className="pointer-events-none whitespace-pre-wrap text-white text-center text-5xl">
          Enjoy your chocolate!
        </h1>
        <div className="flex flex-col gap-4 mt-10">
          <h2 className="text-white text-center">
            This is you eating your chocolates btw
          </h2>
          <Image
            src="https://i.pinimg.com/736x/69/1d/34/691d3442197bce58155a5e432c5444ca.jpg"
            width={1000}
            height={1000}
            alt="Kamu"
            className="max-w-sm h-auto rounded-xl"
          />
          <Link
            href="/stars"
            className="flex z-20 items-center justify-center bg-white p-4 text-pink-600 rounded-full text-5xl"
          >
            <MoveRight />
          </Link>
        </div>
      </main>
    </div>
  );
}
