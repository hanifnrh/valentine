"use client"

import { createRef, useRef } from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";

type ImageItem = string;

interface ImageMouseTrailProps {
  items: ImageItem[];
  children?: React.ReactNode;
  className?: string;
  imgClass?: string;
  distance?: number;
  maxNumberOfImages?: number;
  fadeAnimation?: boolean;
}

export default function ImageCursorTrail({
  items,
  children,
  className,
  maxNumberOfImages = 5,
  imgClass = "w-40 h-48",
  distance = 20,
  fadeAnimation = false,
}: ImageMouseTrailProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const refs = useRef(items.map(() => createRef<HTMLImageElement>()))
  const currentZIndexRef = useRef(1)

  let globalIndex = 0
  let last = { x: 0, y: 0 }

  const activate = (image: HTMLImageElement, x: number, y: number) => {
    const container = containerRef.current;
    if (!container) return; // Prevents the error

    const containerRect = container.getBoundingClientRect();
    const relativeX = x - containerRect.left
    const relativeY = y - containerRect.top
    image.style.left = `${relativeX}px`
    image.style.top = `${relativeY}px`
    console.log(refs.current[refs.current?.length - 1])

    if (currentZIndexRef.current > 40) {
      currentZIndexRef.current = 1
    }
    image.style.zIndex = String(currentZIndexRef.current)
    currentZIndexRef.current++

    image.dataset.status = "active"
    if (fadeAnimation) {
      setTimeout(() => {
        image.dataset.status = "inactive"
      }, 1500)
    }
    last = { x, y }
  }

  const distanceFromLast = (x: number, y: number) => {
    return Math.hypot(x - last.x, y - last.y)
  }
  const deactivate = (image: HTMLImageElement) => {
    image.dataset.status = "inactive"
  }

  const handleOnMove = (event: MouseEvent | TouchEvent) => {
    let x: number, y: number;

    if ("touches" in event) {
      // TouchEvent
      x = event.touches[0].clientX;
      y = event.touches[0].clientY;
    } else {
      // MouseEvent
      x = event.clientX;
      y = event.clientY;
    }

    if (distanceFromLast(x, y) > window.innerWidth / distance) {
      const lead = refs.current[globalIndex % refs.current.length]?.current;
      const tail =
        refs.current[(globalIndex - maxNumberOfImages) % refs.current.length]
          ?.current;
      if (lead) activate(lead, x, y);
      if (tail) deactivate(tail);
      globalIndex++;
    }
  };


  return (
    <section
      onMouseMove={(e) => handleOnMove(e as unknown as MouseEvent)}
      onTouchMove={(e) => handleOnMove(e as unknown as TouchEvent)}
      ref={containerRef}
      className={cn(
        "relative grid h-[600px] w-full place-content-center overflow-hidden rounded-lg ",
        className
      )}
    >
      {items.map((item, index) => (
        <Image
          key={index}
          className={cn(
            "opacity:0 data-[status='active']:ease-out-expo absolute -translate-x-[50%] -translate-y-[50%]  scale-0 rounded-3xl object-cover transition-transform duration-300  data-[status='active']:scale-100   data-[status='active']:opacity-100 data-[status='active']:duration-500 ",
            imgClass
          )}
          data-index={index}
          data-status="inactive"
          src={item}
          alt={`image-${index}`}
          ref={refs.current[index]}
        />
      ))}

      {children}
    </section>
  )
}
