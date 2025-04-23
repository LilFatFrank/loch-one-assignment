"use client";

import NotificationBarCard from "@/components/NotificationBarCard";
import NotificationClockCard from "@/components/NotificationClockCard";
import NotificationEmailCard from "@/components/NotificationEmailCard";
import SignUpArea from "@/components/SignUpArea";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex justify-center w-full h-full">
      <div className="flex lg:flex-row flex-col items-stretch h-full w-full max-w-[1536px] mx-auto">
        <div className="xl:basis-[56%] lg:basis-[50%] h-full lg:pt-[84px] lg:pl-[60px] lg:pb-[60px] pt-[36px] px-[16px] pb-[24px] overflow-x-hidden">
          <div className="flex items-start gap-[11px] mb-[72px]">
            <div className="space-y-4 xl:w-[322px] w-full flex-shrink-0">
              <img src={"/assets/bell-icon.svg"} alt="bell" className="w-8 h-8" />
              <p
                className="font-medium text-2xl md:text-[31px] leading-[120%] text-border-shadow"
                data-text="Get notified when a highly correlated whale makes a move"
              >
                Get notified when a highly correlated whale makes a move
              </p>
              <div className="xl:hidden md:w-[50%] block">
                <NotificationScroll />
              </div>
              <p className="font-medium text-sm md:text-[16px] leading-[120%] opacity-70 md:w-[70%]">
                Find out when a certain whale moves more than any preset amount
                on-chain or when a dormant whale you care about becomes active.
              </p>
            </div>
            <div className="xl:block hidden">
              <NotificationScroll />
            </div>
          </div>
          <div className="xl:pr-[60px] lg:pr-[24px] mb-[40px]">
            <div className="flex items-start justify-between gap-[38px]">
              <img
                src={"/assets/product-ss-image.png"}
                alt="product-ss"
                className="xl:block hidden w-[335px] shadow-[0px_14px_64px_-4px_rgba(24,39,75,0.12),0px_8px_22px_-6px_rgba(24,39,75,0.12)]"
              />
              <div className="flex flex-col gap-4 xl:items-end items-start xl:w-[305px] w-full xl:text-end text-start">
                <img
                  src={"/assets/loch-eye-icon.svg"}
                  alt="eye"
                  className="w-8 h-8"
                />
                <p className="text-2xl md:text-[31px] leading-[120%] font-medium">
                  Watch what the whales are doing
                </p>
                <img
                  src={"/assets/product-ss-image.png"}
                  alt="product-ss"
                  className="xl:hidden block md:w-[50%] w-full shadow-[0px_14px_64px_-4px_rgba(24,39,75,0.12),0px_8px_22px_-6px_rgba(24,39,75,0.12)]"
                />
                <p className="font-medium text-sm md:text-[16px] leading-[120%] opacity-70 md:w-[70%]">
                  All whales are not equal. Know exactly what the whales impacting
                  YOUR portfolio are doing.
                </p>
              </div>
            </div>
            <div className="lg:mt-[22px] mt-[40px]">
              <div className="flex lg:justify-end justify-start pb-[20px] border-b-[1px] border-b-[#E5E5E6]/50 w-full">
                <p className="font-medium text-xl md:text-[25px] leading-[120%]">
                  Testimonials
                </p>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col-reverse lg:items-end items-start gap-6 sm:gap-[40px]">
            <img
              src={"/assets/testimonials-vector-icon.svg"}
              alt="vector"
              className="w-12 h-12 sm:w-15 sm:h-15"
            />
            <div className="w-full overflow-x-auto pb-4 -mb-4">
              <Testimonials />
            </div>
          </div>
        </div>
        <div className="xl:basis-[44%] lg:basis-[50%] w-full h-full bg-white">
          <SignUpArea />
        </div>
      </div>
    </div>
  );
}

const NotificationScroll = () => (
  <div className="infinite-scroll-container">
    <div className="infinite-scroll-content items-stretch relative">
      <NotificationEmailCard />
      <NotificationBarCard />
      <NotificationClockCard />
      <NotificationEmailCard />
      <NotificationBarCard />
      <NotificationClockCard />
      <NotificationEmailCard />
      <NotificationBarCard />
      <NotificationClockCard />
    </div>
  </div>
);
