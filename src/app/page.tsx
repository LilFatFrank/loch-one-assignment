"use client";

import NotificationBarCard from "@/components/NotificationBarCard";
import NotificationClockCard from "@/components/NotificationClockCard";
import NotificationEmailCard from "@/components/NotificationEmailCard";
import SignUpArea from "@/components/SignUpArea";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex items-stretch h-full w-full">
      <div className="basis-[56%] h-full pt-[84px] pl-[60px] pb-[60px] overflow-x-hidden">
        <div className="flex items-start gap-[11px] mb-[72px]">
          <div className="space-y-4 w-[322px] flex-shrink-0">
            <img src={"/assets/bell-icon.svg"} alt="bell" className="w-8 h-8" />
            <p
              className="font-medium text-[31px] leading-[120%] text-border-shadow"
              data-text="Get notified when a highly correlated whale makes a move"
            >
              Get notified when a highly correlated whale makes a move
            </p>
            <p className="font-medium text-[16px] leading-[120%] opacity-70">
              Find out when a certain whale moves more than any preset amount
              on-chain or when a dormant whale you care about becomes active.
            </p>
          </div>
          <div className="infinite-scroll-container">
            <div className="infinite-scroll-content items-stretch">
              <NotificationEmailCard />
              <NotificationBarCard />
              <NotificationClockCard />
              <NotificationEmailCard />
              <NotificationBarCard />
              <NotificationClockCard />
            </div>
          </div>
        </div>
        <div className="pr-[60px] mb-[40px]">
          <div className="flex items-start justify-between gap-[38px]">
            <img
              src={"/assets/product-ss-image.png"}
              alt="product-ss"
              className="w-[335px] shadow-[0px_14px_64px_-4px_rgba(24,39,75,0.12),0px_8px_22px_-6px_rgba(24,39,75,0.12)]"
            />
            <div className="flex flex-col gap-4 items-end w-[305px] text-end">
              <img
                src={"/assets/loch-eye-icon.svg"}
                alt="eye"
                className="w-8 h-8"
              />
              <p className="text-[31px] leading-[120%] font-medium">
                Watch what the whales are doing
              </p>
              <p className="font-medium text-[16px] leading-[120%] opacity-70">
                All whales are not equal. Know exactly what the whales impacting
                YOUR portfolio are doing.
              </p>
            </div>
          </div>
          <div className="mt-[22px]">
            <div className="flex justify-end pb-[20px] border-b-[1px] border-b-[#E5E5E6]/50 w-full">
              <p className="font-medium text-[25px] leading-[120%]">
                Testimonials
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-end gap-[40px]">
          <img
            src={"/assets/testimonials-vector-icon.svg"}
            alt="vector"
            className="w-15 h-15"
          />
          <Testimonials />
        </div>
      </div>
      <div className="basis-[44%] w-full h-full bg-white">
        <SignUpArea />
      </div>
    </div>
  );
}
