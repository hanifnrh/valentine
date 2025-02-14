"use client"
import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useState } from "react";

interface CardData {
    id: number;
    url: string;
}

interface CardProps extends CardData {
    setCards: React.Dispatch<React.SetStateAction<CardData[]>>;
    cards: CardData[];
}

const SwipeCards: React.FC = () => {
    const [cards, setCards] = useState<CardData[]>(cardData);

    return (
        <div
            className="grid h-[500px] w-full place-items-center"
        >
            {cards.map((card) => (
                <Card key={card.id} cards={cards} setCards={setCards} {...card} />
            ))}
        </div>
    );
};

const Card: React.FC<CardProps> = ({ id, url, setCards, cards }) => {
    const x = useMotionValue(0);
    const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
    const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

    const isFront = id === cards[cards.length - 1].id;

    const rotate = useTransform(() => {
        const offset = isFront ? 0 : id % 2 ? 6 : -6;
        return `${rotateRaw.get() + offset}deg`;
    });

    const handleDragEnd = () => {
        if (Math.abs(x.get()) > 100) {
            setCards((prev) => prev.filter((v) => v.id !== id));
        }
    };

    return (
        <motion.img
            src={url}
            alt="Placeholder alt"
            className="h-96 w-72 origin-bottom rounded-lg bg-white object-cover hover:cursor-grab active:cursor-grabbing"
            style={{
                gridRow: 1,
                gridColumn: 1,
                x,
                opacity,
                rotate,
                transition: "0.125s transform",
                boxShadow: isFront
                    ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
                    : undefined,
            }}
            animate={{ scale: isFront ? 1 : 0.98 }}
            drag={isFront ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
        />
    );
};

export default SwipeCards;

const cardData: CardData[] = [
    { id: 1, url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop" },
    { id: 2, url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop" },
    { id: 3, url: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop" },
    { id: 4, url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2224&auto=format&fit=crop" },
    { id: 5, url: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2340&auto=format&fit=crop" },
    { id: 6, url: "https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=2273&auto=format&fit=crop" },
    { id: 7, url: "https://images.unsplash.com/photo-1578608712688-36b5be8823dc?q=80&w=2187&auto=format&fit=crop" },
    { id: 8, url: "https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?q=80&w=2340&auto=format&fit=crop" },
];
