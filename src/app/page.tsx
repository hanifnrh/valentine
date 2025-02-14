import { ScratchToReveal } from "@/components/ui/scratch-to-reveal";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="font-medium absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] flex justify-center items-center">
        <ScratchToReveal
          width={500}
          height={500}
          minScratchPercentage={70}
          className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
          gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
        >
          <Image
            src="/minion.png"
            width={1000}
            height={1000}
            className="w-full h-auto object-cover"
            alt=""
          />
          <div>
            <Link
              href="/yeay"
              className="bg-white px-3 py-2 rounded-md text-pink-600 absolute bottom-3 left-3"
            >
              Yes
            </Link>
            <Link
              href="/yeay"
              className="bg-white px-3 py-2 rounded-md text-pink-600 absolute bottom-3 right-3"
            >
              Yes
            </Link>

          </div>
        </ScratchToReveal>
      </main>
    </div>
  );
}
