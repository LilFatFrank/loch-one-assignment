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
      className={`flex-shrink-0 bg-white rounded-[20px] border-none p-4 sm:p-5 space-y-4 sm:space-y-5 min-h-[136px] w-[300px] sm:w-[353px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.04),0px_4px_10px_0px_rgba(0,0,0,0.04)] ${
        className || ''
      }`}
    >
      <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-[3px]">
        <span className="text-[#19191a] text-[14px] sm:text-[16px] font-semibold leading-[120%]">
          {name}
        </span>
        <span className="text-[#96979A] text-[12px] sm:text-[13px] font-medium leading-[120%]">
          {title}
        </span>
      </p>
      <p className="text-[#19191a] text-[14px] sm:text-[16px] font-semibold leading-[120%]">
        {quote}
      </p>
    </div>
  );
};

export default TestimonialCard;
