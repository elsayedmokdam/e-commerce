import SigninForm from "@/components/signin-form/SigninForm";
import Image from "next/image";
import Link from "next/link";
import signinImage from "@/images/signinImage.png";
import car from "@public/car.svg";
import armour from "@public/armour.svg";
import clock from "@public/clock.svg";
import { FaLock, FaStar, FaUsers } from "react-icons/fa6";

const staticData = [
  {
    icon: car,
    title: "Free shipping",
  },
  {
    icon: armour,
    title: "Secure Payment",
  },
  {
    icon: clock,
    title: "24/7 Support",
  },
];

export default function Page() {
  return (
    <section className="min-h-screen py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Section */}
          <div className=" hidden lg:block">
            <div>
              <Image
                src={signinImage}
                alt="signin"
                width={500}
                height={500}
                className="w-full rounded-[32px]"
              />
            </div>

            <div className="mt-10">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-center text-gray-800">
                FreshCart - Your One-Stop Shop for Fresh Products
              </h1>
              <p className="mt-6 text-xl font-medium leading-8 text-gray-600 text-center">
                Join thousands of happy customers who trust FreshCart for their
                daily grocery needs
              </p>
            </div>

            <div className="mt-10 flex flex-col items-center md:flex-row md:justify-center gap-6 ">
              {staticData.map((item) => {
                return (
                  <div key={item.title} className="flex items-center gap-2">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={15}
                      height={15}
                    />
                    <div>
                      <p className="font-semibold text-xs text-gray-500">
                        {item.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] lg:p-10">
            <div className="mb-8">
              <p className="text-3xl font-semibold text-center text-gray-600">
                <span className="text-main-color">Fresh</span>
                <span className="text-gray-700">Cart</span>
              </p>
              <p className="mt-4 font-bold text-center text-2xl leading-3.5 text-gray-800">
                Welcome Back!
              </p>
            </div>

            <SigninForm />

            <div className="my-5 w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>

            <p className="mt-6 text-center text-sm text-gray-600">
              New to FreshCart ?{" "}
              <Link
                href="/signup"
                className="font-semibold text-main-color hover:text-green-700 hover:underline transition duration-200"
              >
                Sign Up
              </Link>
            </p>

            <div className="flex items-center justify-center gap-4 mt-5 text-gray-400 text-xs">
              <p className="flex items-center gap-2">
                <span>
                  <FaLock />
                </span>
                <span>SSL Secure</span>
              </p>
              <p className="flex items-center gap-2">
                <span>
                  <FaUsers />
                </span>
                <span>50K+ Users</span>
              </p>
              <p className="flex items-center gap-2">
                <span>
                  <FaStar/>
                </span>
                <span>4.9 Rating</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
