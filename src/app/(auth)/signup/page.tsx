import SignupForm from "@/components/signup-form/SignupForm";
import Link from "next/link";
import { FaCheckCircle, FaShieldAlt, FaStar, FaTruck } from "react-icons/fa";

const features = [
  {
    title: "Premium Quality",
    description: "Premium quality products sourced from trusted suppliers.",
    icon: <FaStar className="size-4" />,
  },
  {
    title: "Fast Delivery",
    description: "Same-day delivery available in most areas.",
    icon: <FaTruck className="size-4" />,
  },
  {
    title: "Secure Shopping",
    description: "Your data and payments are completely secure.",
    icon: <FaShieldAlt className="size-4" />,
  },
];

export default function Page() {
  return (
    <section className="min-h-screen py-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Section */}
          <div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                <span className="text-gray-700">Welcome to</span>{" "}
                <span className="text-main-color">FreshCart</span>
              </h1>

              <p className="mt-6 text-xl font-medium leading-8 text-slate-600">
                Join thousands of happy customers who enjoy fresh groceries
                delivered right to their doorstep.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 items-center rounded-3xl border border-slate-200 p-4"
                >
                  <div className="grid size-10 place-items-center rounded-full bg-emerald-100 text-main-color">
                    {feature.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-gray-700">
                      {feature.title}
                    </p>
                    <p className="mt-1 text-md text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[28px] border border-slate-200 shadow-md p-6">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                  <span className="text-xl font-semibold">S</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Sayed Mokdam</p>
                  <div className="mt-2 flex items-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} className="h-4 w-4" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-5 text-md font-medium leading-7 italic text-slate-600">
                "FreshCart has transformed my shopping experience. The quality
                of the products is outstanding, and the delivery is always on
                time. Highly recommend!"
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] lg:p-10">
            <div className="mb-8">
              <p className="text-3xl font-semibold text-center text-gray-600">
                Create Your Account
              </p>
              <p className="mt-4 font-medium text-center leading-3.5 text-gray-800">
                Start your fresh journey with us today!
              </p>
            </div>

            <SignupForm />

            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="font-semibold text-main-color hover:text-green-700 hover:underline transition duration-200"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
