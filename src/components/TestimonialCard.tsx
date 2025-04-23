"use client";
import { FC } from "react";

interface TestimonialCardProps {
  name: string;
  title: string;
  quote: string;
  className?: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  name,
  title,
  quote,
  className,
}) => {
  return (
    <div
      className={`flex-shrink-0 bg-white rounded-[20px] border-none p-5 space-y-5 h-[136px] w-[353px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.04),0px_4px_10px_0px_rgba(0,0,0,0.04)] ${className || ''}`}
    >
      <p className="flex items-center gap-[3px]">
        <span className="text-[#19191a] text-[16px] font-semibold leading-[120%]">
          {name}
        </span>
        <span className="text-[#96979A] text-[13px] font-medium leading-[120%]">
          {title}
        </span>
      </p>
      <p className="text-[#19191a] text-[16px] font-semibold leading-[120%]">
        {quote}
      </p>
    </div>
  );
};

export default TestimonialCard;
