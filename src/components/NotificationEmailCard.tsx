"use client";
import { FC } from "react";

const NotificationEmailCard: FC = () => {
  return (
    <div className="flex-shrink-0 relative p-[14px] rounded-[8.4px] border-none w-[189.7px] bg-white shadow-[0px_0.7px_0.7px_0px_rgba(0,0,0,0.04),0px_2.8px_7px_0px_rgba(0,0,0,0.04)]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#165DFF]/81 opacity-20 rounded-[8.4px]"></div>
      <div className="relative flex w-full items-start justify-between mb-4">
        <div className="space-y-[14px]">
          <img
            src={"/assets/bell-dark-icon.svg"}
            alt="bell-dark"
            className="w-7 h-7"
          />
          <p className="text-[#19191a] text-xs sm:text-[14px] font-medium">
            We'll be sending notifications to you here
          </p>
        </div>
        <button className="text-[#19191a] font-semibold leading-[120%] text-[8px] sm:text-[9.1px]">
          Save
        </button>
      </div>
      <input
        className="w-full border border-[#D4D4D4] rounded-[5.6px] py-[12px] px-[10px] placeholder:text-[#E5E5E6] text-[#19191a] text-[8px] sm:text-[9.1px] font-medium leading-[120%] outline-none"
        placeholder="hello@loch.one"
        defaultValue={"hello@loch.one"}
      />
    </div>
  );
};

export default NotificationEmailCard;
