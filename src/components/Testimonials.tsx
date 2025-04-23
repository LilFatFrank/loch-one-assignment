"use client";
import { FC, useRef, useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Jack F",
    title: "Ex Blackrock PM",
    quote:
      "Love how Loch integrates portfolio analytics and whale watching into one unified app.",
  },
  {
    name: "Yash P",
    title: "Research, 3poch Crypto Hedge Fund",
    quote:
      "I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!",
  },
  {
    name: "Shiv S",
    title: "Co-Founder Magik Labs",
    quote:
      "Managing my own portfolio is helpful and well designed. What's really interesting is watching the whales though. No one else has made whale tracking so simple.",
  },
];

const Testimonials: FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartPosition(e.clientX);
    document.body.style.cursor = "grabbing";
  };

  const handleDragMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const currentPosition = e.clientX;
    const diff = currentPosition - startPosition;
    const newTranslate = prevTranslate + diff;

    // Add boundaries to prevent dragging too far
    const maxTranslate = 0;
    const minTranslate = -((testimonials.length - 1) * 353); // Using the actual card width

    if (newTranslate > maxTranslate) {
      setCurrentTranslate(maxTranslate);
    } else if (newTranslate < minTranslate) {
      setCurrentTranslate(minTranslate);
    } else {
      setCurrentTranslate(newTranslate);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setPrevTranslate(currentTranslate);
    document.body.style.cursor = "default";
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(${currentTranslate}px)`;
    }
  }, [currentTranslate]);

  // Add touch support for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartPosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const currentPosition = e.touches[0].clientX;
    const diff = currentPosition - startPosition;
    const newTranslate = prevTranslate + diff;

    const maxTranslate = 0;
    const minTranslate = -((testimonials.length - 1) * 353);

    if (newTranslate > maxTranslate) {
      setCurrentTranslate(maxTranslate);
    } else if (newTranslate < minTranslate) {
      setCurrentTranslate(minTranslate);
    } else {
      setCurrentTranslate(newTranslate);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setPrevTranslate(currentTranslate);
  };

  return (
    <div className="w-full overflow-hidden" onMouseLeave={handleDragEnd}>
      <div
        ref={carouselRef}
        className="flex gap-3 sm:gap-5 transition-transform duration-300 ease-out select-none"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
            className={
              testimonial.name.toLowerCase().includes("shiv") ? "w-[300px] sm:w-[353px] md:w-[531px]" : ""
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
