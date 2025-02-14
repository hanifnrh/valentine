"use client";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView } from "framer-motion";
import { JSX, useEffect, useId, useRef, useState } from "react";
import { FaHeart } from "react-icons/fa";

const tiles = [
    {
        icon: <FaHeart   />,
        bg: (
            <div className="pointer-events-none absolute left-1/2 top-1/2 "></div>
        ),
    },
    {
        icon: <FaHeart   />,
        bg: (
            <div className="pointer-events-none absolute left-1/2 top-1/2 "></div>
        ),
    },
    {
        icon: <FaHeart   />,
        bg: (
            <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2"></div>
        ),
    },
    {
        icon: <FaHeart   />,
        bg: (
            <div className="pointer-events-none absolute left-1/2 top-1/2 "></div>
        ),
    },
    {
        icon: <FaHeart   />,
        bg: (
            <div className="pointer-events-none absolute left-1/2 top-1/2 "></div>
        ),
    },
    {
        icon: <FaHeart   />,
        bg: (
            <div className="pointer-events-none absolute left-1/2 top-1/2"></div>
        ),
    },
];

function shuffleArray(array: any[]) {
    let currentIndex = array.length;
    let randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
    return array;
}

function Card(card: { icon: JSX.Element; bg: JSX.Element }) {
    const id = useId();
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                transition: { delay: Math.random() * 2, ease: "easeOut", duration: 1 },
            });
        }
    }, [controls, inView]);

    return (
        <motion.div
            key={id}
            ref={ref}
            initial={{ opacity: 0 }}
            animate={controls}
            className={cn(
                "relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4",
                // light styles
                "bg-white",
                // dark styles
                "transform-gpu text-5xl flex items-center justify-center",
            )}
        >
            {card.icon}
            {card.bg}
        </motion.div>
    );
}

export function Integrations() {
    const [randomTiles1, setRandomTiles1] = useState<typeof tiles>([]);
    const [randomTiles2, setRandomTiles2] = useState<typeof tiles>([]);
    const [randomTiles3, setRandomTiles3] = useState<typeof tiles>([]);
    const [randomTiles4, setRandomTiles4] = useState<typeof tiles>([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Ensures this runs client-side
            setRandomTiles1(shuffleArray([...tiles]));
            setRandomTiles2(shuffleArray([...tiles]));
            setRandomTiles3(shuffleArray([...tiles]));
            setRandomTiles4(shuffleArray([...tiles]));
        }
    }, []);

    return (
        <section id="cta">
            <div className="container mx-auto px-4 py-12 md:px-8">
                <div className="flex w-full flex-col items-center justify-center">
                    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                        <Marquee
                            reverse
                            className="-delay-[200ms] text-pink-600 [--duration:10s]"
                            repeat={5}
                        >
                            {randomTiles1.map((review, idx) => (
                                <Card key={idx} {...review} />
                            ))}
                        </Marquee>
                        <Marquee reverse className="[--duration:25s] text-pink-600 " repeat={5}>
                            {randomTiles2.map((review, idx) => (
                                <Card key={idx} {...review} />
                            ))}
                        </Marquee>
                        <Marquee
                            reverse
                            className="-delay-[200ms] text-pink-600 [--duration:20s]"
                            repeat={5}
                        >
                            {randomTiles1.map((review, idx) => (
                                <Card key={idx} {...review} />
                            ))}
                        </Marquee>
                        <Marquee reverse className="[--duration:30s] text-pink-600" repeat={5}>
                            {randomTiles2.map((review, idx) => (
                                <Card key={idx} {...review} />
                            ))}
                        </Marquee>
                        <Marquee
                            reverse
                            className="-delay-[200ms] text-pink-600 [--duration:20s]"
                            repeat={5}
                        >
                            {randomTiles3.map((review, idx) => (
                                <Card key={idx} {...review} />
                            ))}
                        </Marquee>
                        <Marquee reverse className="[--duration:30s] text-pink-600" repeat={5}>
                            {randomTiles4.map((review, idx) => (
                                <Card key={idx} {...review} />
                            ))}
                        </Marquee>
                        <div className="absolute ">
                            <div className="absolute inset-0  -z-10 rounded-full opacity-40 blur-xl" />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 h-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}
