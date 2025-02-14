"use client";

import { Confetti, type ConfettiRef } from "@/components/magicui/confetti";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Page2() {
  const confettiRef = useRef<ConfettiRef>(null);
  return (
    <div>
      <main className="font-medium flex flex-col gap-4 justify-center items-center h-screen absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] ">
        <div>

          <h1 className="pointer-events-none whitespace-pre-wrap text-pink-600 text-center text-5xl">
            Yeay! Now you're my VALENTINE!
          </h1>

          <Confetti
            ref={confettiRef}
            className="absolute left-0 top-0 z-0 size-full"
            onMouseEnter={() => {
              confettiRef.current?.fire({});
            }}
          />
        </div>

        <Link
          href="/ptooey"
          className="flex z-20 items-center justify-center bg-pink-600 px-6 py-4 text-white rounded-full text-5xl"
        >
          I have a chocolate for you!
          <MoveRight />
        </Link>
      </main>
    </div>
  );
}
