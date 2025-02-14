"use client";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { MoveRight } from "lucide-react";
import Link from "next/link";


import ImageCursorTrail from "@/components/ui/image-cursortrail";

const images = [
  "/erika1.jpg",
  "/erika2.jpg",
  "/erika3.jpg",
  "/erika4.jpg",
  "/erika5.jpg",

]
export default function Page2() {
  return (
    <div>
      <main className="flex justify-center items-center h-screen bg-neutral-900">
        <div className="h-[40rem] rounded-md bg-neutral-900 flex flex-col gap-4 items-center justify-center relative w-full">
          <ImageCursorTrail
            items={images}
            maxNumberOfImages={5}
            distance={25}
            imgClass="sm:w-40 w-28 sm:h-48 h-36  "
            className=" max-w-4xl rounded-3xl "
          >
            <h2 className="relative flex-col z-50 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
              <SparklesText text="It's you! You're these stars!" />
            </h2>
            <Link
              href="/love"
              className="flex z-50 gap-2 items-center justify-center bg-white p-4 text-pink-600 rounded-full text-2xl"
            >
              <MoveRight /> <MoveRight /> <MoveRight />
            </Link>
          </ImageCursorTrail>
          <ShootingStars />
          <StarsBackground />
        </div>
      </main>
    </div>
  );
}
