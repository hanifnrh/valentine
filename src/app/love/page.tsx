"use client"

import { Integrations } from "@/components/ui/integrations";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Love() {
  return (
    <div>
      <main className="font-bold poppins flex flex-col gap-4 justify-center items-center h-screen bg-pink-600">
        <Integrations />
        <div className="absolute top-1/2 bg-white p-4 rounded-xl flex flex-col gap-4">
          <h1 className="pointer-events-none whitespace-pre-wrap text-pink-600 text-center text-5xl">
            I love you so much
          </h1>
          <Link
            href="/end"
            className="flex z-20 items-center justify-center bg-pink-600 p-4 text-white rounded-full text-5xl"
          >
            <MoveRight />
          </Link>

        </div>
      </main>
    </div>
  );
}
