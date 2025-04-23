"use client";
import { FC } from "react";

const NotificationBarCard: FC = () => {
    return <div className="flex-shrink-0 p-[14px] rounded-[8.4px] border-none w-[189.7px] bg-white flex flex-col items-start justify-between">
    <div className="flex w-full items-start justify-between">
      <img
        src={"/assets/notif-bar-icon.svg"}
        alt="notif-bar"
        className="w-7 h-7"
      />
      <input
        type="checkbox"
        defaultChecked
        className="custom-checkbox"
      />
    </div>
    <div className="space-y-4">
      <p className="text-[11.2px] font-medium leading-[120%] text-[#19191a]">
        Notify me when any wallets move more than
      </p>
      <div className="w-fit cursor-pointer flex items-center gap-[3px] bg-[#E5E5E6]/50 rounded-[2.8px] p-1">
        <p className="text-[#313233] font-medium text-[9.1px] leading-[120%]">$1,000.00</p>
        <img src={"/assets/chevron-down-icon.svg"} alt="down" className="w-[5px] h-[3px]" />
      </div>
    </div>
  </div>
}

export default NotificationBarCard;
