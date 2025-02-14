"use client";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Link from "next/link";

export default function Page2() {
  return (
    <div>
      <main className="flex justify-center items-center h-screen bg-neutral-900">
        <div className="h-[40rem] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
          <h2 className="relative flex-col z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
            <p>Wait what are these stars?</p>

            <Link
            href="/stars2"
            className="text-white bg-zinc-600 p-3 rounded-full"
            >
            ???
            </Link>
          </h2>
          <ShootingStars />
          <StarsBackground />
        </div>
      </main>
    </div>
  );
}
