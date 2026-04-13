"use client";
import { IoMdMail } from "react-icons/io";
import leave from "@public/leave.svg";
import car from "@public/car.svg";
import icon2 from "@public/icon2.svg";
import AppButton from "@/components/shared/app-button/AppButton";
import { FaApple, FaArrowRight, FaCheckDouble, FaGooglePlay, FaStar } from "react-icons/fa6";
import AppInput from "@/components/shared/app-input/AppInput";
import { useState } from "react";
const features = [
  {
    icon: leave,
    text: "Fresh Picks Weekly",
  },
  {
    icon: car,
    text: "Free Delivery Codes",
  },
  {
    icon: icon2,
    text: "Members-Only Deals",
  },
];

export default function HomeForm() {
  const [subscribe, setSubscribe] = useState(false);
  function handleSubscribe(){
    setSubscribe(true);
    
     setTimeout(() => {
      setSubscribe(false);
     }, 1000);
  }
  return (
    <section className="w-full py-10 lg:py-14 xl:py-18 px-5 md:px-7 lg:px-9">
      <div className="max-w-7xl mx-auto bg-linear-to-br from-[#17d1931a] via-[#147a701a] to-[#71dfba1a] rounded-[30px] md:rounded-[50px] shadow-xl shadow-[#00BC7D1A] p-7 md:p-12 lg:p-16">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Newsletter Section */}
          <div className="md:col-span-3">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-linear-to-br from-[#00BBA7] to-[#00BC7D] shadow-md shadow-[#00bc7dc3] p-3 md:p-3 rounded-lg text-white">
                  <IoMdMail />
                </div>
                <div className="flex flex-col">
                  <span className="text-main-color font-bold text-sm tracking-wider">
                    NEWSLETTER
                  </span>
                  <span className="text-xs text-gray-500">
                    50,000+ subscribers
                  </span>
                </div>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-2 leading-snug flex flex-col gap-1">
                <span>Get the Freshest Updates</span>
                <span className="text-main-color">Delivered Free</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-500 font-semibold mb-6 text-lg">
              Weekly recipes, seasonal offers & exclusive member perks.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((feature) => {
                return (
                  <div
                    key={feature.text}
                    className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm"
                  >
                    <div className="bg-green-100 p-2 rounded-full">
                      <img src={feature.icon.src} alt={feature.text} />
                    </div>
                    <span className="text-sm text-gray-700">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Form */}
            <form onSubmit={(e) => { e.preventDefault(); handleSubscribe(); }} className="space-y-4">
              <div className="flex flex-col lg:flex-row gap-2 items-center">
                <AppInput
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="rounded-xl border-2 border-gray-300 shadow-sm shadow-[#00BC7D1A] text-sm py-7"
                />
                <AppButton
                  type="submit"
                  className="w-full lg:w-auto bg-linear-to-br from-[#009966] to-[#00BC7D] text-white font-semibold px-12 py-7 rounded-xl shadow-lg shadow-[#00BC7D4D] transition duration-200 ease-in-out whitespace-nowrap flex items-center justify-center cursor-pointer"
                >
                  <span>Subscribe</span>

                  <span className="ml-2 transition-all duration-300">
                    {subscribe ? <FaCheckDouble /> : <FaArrowRight />}
                  </span>
                </AppButton>
              </div>
            </form>

            {/* Disclaimer */}
            <p className="text-sm font-medium text-gray-400 mt-4 flex items-center gap-1">
              <span>✨</span>
              Unsubscribe anytime. No spam, ever.
            </p>
          </div>

          {/* Mobile App Section */}
          <div className="md:col-span-2">
            <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl lg:rounded-4xl p-8 text-white">
              <div className="mb-6">
                <span className="inline-block bg-[#00BC7D4D] text-[#00D492] border border-[#00BC7D33] px-3 py-2 rounded-full text-xs font-semibold tracking-wider mb-4">
                  📱 MOBILE APP
                </span>
                <h3 className="text-3xl font-bold mb-3">
                  Shop Faster on Our App
                </h3>
                <p className="text-gray-300 text-sm font-medium">
                  Get app-exclusive deals & 15% off your first order.
                </p>
              </div>

              {/* App Store Buttons */}
              <div className="space-y-3 mb-6">
                <AppButton
                  type="button"
                  className="w-full bg-gray-700 hover:bg-gray-600 transition px-6 py-9 rounded-xl font-semibold cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl text-white">
                      <FaApple />
                    </span>
                    <div className="text-left">
                      <div className="text-xs text-gray-400">DOWNLOAD ON</div>
                      <div className="text-md font-bold">App Store</div>
                    </div>
                  </div>
                </AppButton>
                <AppButton
                  type="button"
                  className="w-full bg-gray-700 hover:bg-gray-600 transition px-6 py-9 rounded-xl font-semibold cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl text-white">
                      <FaGooglePlay />
                    </span>
                    <div className="text-left">
                      <div className="text-xs text-gray-400">GET IT ON</div>
                      <div className="text-md font-bold">Google Play</div>
                    </div>
                  </div>
                </AppButton>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
                <span className="text-sm text-gray-400">
                  4.9 · 100K+ downloads
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
