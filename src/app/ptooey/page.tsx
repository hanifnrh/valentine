"use client";

import Chocolate from "@/components/ui/chocolate";
import NotChocolate2 from "@/components/ui/not-chocolate-2";
import NotChocolate1 from "@/components/ui/not-chocolate1";
import NotChocolate3 from "@/components/ui/not-chocolate3";

export default function Page2() {
  return (
    <div>
      <main className="font-medium flex flex-col gap-4 justify-center items-center h-screen bg-pink-600">
        <h1 className="pointer-events-none whitespace-pre-wrap text-white text-center text-5xl">
          Now.. here is your chocolate! You have to find it yourself!
        </h1>
        <div className="flex flex-col gap-4 mt-10">
          <NotChocolate1></NotChocolate1>
          <NotChocolate2></NotChocolate2>
          <NotChocolate3></NotChocolate3>
          <Chocolate></Chocolate>
        </div>
      </main>
    </div>
  );
}
