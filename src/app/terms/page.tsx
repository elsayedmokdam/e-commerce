"use client";

import PageHeader from "@/components/shared/page-header/PageHeader";
import Link from "next/link";
import {
  FaExclamationTriangle,
  FaHandshake,
  FaUserCheck,
  FaIdCard,
  FaCreditCard,
  FaShippingFast,
  FaUndo,
  FaBalanceScale,
  FaEnvelope,
  FaArrowLeft,
  FaArrowRight,
  FaShieldAlt,
} from "react-icons/fa";

const articles = [
  {
    id: 1,
    icon: FaHandshake,
    title: "Acceptance of Terms",
    points: [
      {
        number: "1.1",
        text: "By accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms.",
      },
      {
        number: "1.2",
        text: "If you do not agree to these Terms, you must not access or use the Service.",
      },
      {
        number: "1.3",
        text: "We reserve the right to modify these Terms at any time, and such modifications shall be effective immediately upon posting.",
      },
    ],
  },
  {
    id: 2,
    icon: FaUserCheck,
    title: "User Eligibility",
    points: [
      {
        number: "2.1",
        text: "The Service is intended for users who are at least eighteen (18) years of age.",
      },
      {
        number: "2.2",
        text: "By using the Service, you represent and warrant that you are of legal age to form a binding contract.",
      },
      {
        number: "2.3",
        text: "If you are accessing the Service on behalf of a legal entity, you represent that you have the authority to bind such entity.",
      },
    ],
  },
  {
    id: 3,
    icon: FaIdCard,
    title: "Account Registration",
    points: [
      {
        number: "3.1",
        text: "You may be required to create an account to access certain features of the Service.",
      },
      {
        number: "3.2",
        text: "You agree to provide accurate, current, and complete information during registration.",
      },
      {
        number: "3.3",
        text: "You are solely responsible for maintaining the confidentiality of your account credentials.",
      },
      {
        number: "3.4",
        text: "You agree to notify us immediately of any unauthorized use of your account.",
      },
    ],
  },
  {
    id: 4,
    icon: FaCreditCard,
    title: "Orders and Payments",
    points: [
      {
        number: "4.1",
        text: "All orders placed through the Service are subject to acceptance and availability.",
      },
      {
        number: "4.2",
        text: "Prices are subject to change without notice prior to order confirmation.",
      },
      {
        number: "4.3",
        text: "Payment must be made in full at the time of purchase through approved payment methods.",
      },
      {
        number: "4.4",
        text: "We reserve the right to refuse or cancel any order at our sole discretion.",
      },
    ],
  },
  {
    id: 5,
    icon: FaShippingFast,
    title: "Shipping and Delivery",
    points: [
      {
        number: "5.1",
        text: "Shipping times are estimates only and are not guaranteed.",
      },
      {
        number: "5.2",
        text: "Risk of loss and title for items purchased pass to you upon delivery to the carrier.",
      },
      {
        number: "5.3",
        text: "We are not responsible for delays caused by carriers, customs, or other factors beyond our control.",
      },
    ],
  },
  {
    id: 6,
    icon: FaUndo,
    title: "Returns and Refunds",
    points: [
      {
        number: "6.1",
        text: "Our return policy allows returns within 14 days of delivery for most items.",
      },
      {
        number: "6.2",
        text: "Products must be unused and in original packaging.",
      },
      {
        number: "6.3",
        text: "Refunds will be processed within 5-7 business days after receiving the returned item.",
      },
    ],
  },
];

const simpleArticles = [
  {
    id: 7,
    icon: FaBalanceScale,
    title: "Limitation of Liability",
    description:
      "To the maximum extent permitted by applicable law, FreshCart shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.",
  },
  {
    id: 8,
    icon: FaEnvelope,
    title: "Contact Us",
    description: (
      <>
        If you have any questions about these Terms, please contact us at{" "}
        <a
          href="mailto:support@freshcart.com"
          className="font-semibold text-main-color hover:underline"
        >
          support@freshcart.com
        </a>
      </>
    ),
  },
];

export default function Page() {
  return (
    <>
    <PageHeader
            title="Terms of Service"
            pageName={[{ name: "Terms of Service", href: "/terms" }]}
            bgColor="bg-linear-to-b from-[#16A34A] via-[#22C55E] to-[#4ADE80]"
            iconBgColor="from-[#16A34A] to-[#4ADE80]"
            icon={<FaShieldAlt className="size-6" />}
            subtitle="Learn more about our terms and conditions"
          />
      <div className="min-h-screen bg-slate-50/40 py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-6">
          {/* Banner Notice */}
          <div className="flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50/70 p-5 shadow-xs">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white shadow-xs">
              <FaExclamationTriangle className="size-5" />
            </div>

            <div>
              <h2 className="text-sm font-bold text-amber-950">
                Important Notice
              </h2>

              <p className="mt-0.5 text-xs leading-relaxed text-amber-900">
                By accessing and using FreshCart, you accept and agree to be
                bound by the terms and provisions of this agreement. Please read
                these terms carefully before using our services.
              </p>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Articles 1 - 6 */}
            {articles.map((article) => {
              const Icon = article.icon;

              return (
                <div
                  key={article.id}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-shadow hover:shadow-md"
                >
                  <div className="mb-5 flex items-start gap-3.5">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-main-color">
                      <Icon className="size-5" />
                    </div>

                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-main-color">
                        Article {article.id}
                      </span>

                      <h3 className="text-base font-bold text-slate-900">
                        {article.title}
                      </h3>
                    </div>
                  </div>

                  <ul className="space-y-3 text-xs text-slate-600">
                    {article.points.map((point) => (
                      <li
                        key={point.number}
                        className="flex items-start gap-2.5"
                      >
                        <span className="shrink-0 rounded-md bg-emerald-100/70 px-1.5 py-0.5 text-[10px] font-bold text-main-color">
                          {point.number}
                        </span>

                        <span>{point.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}

            {/* Articles 7 - 8 */}
            {simpleArticles.map((article) => {
              const Icon = article.icon;

              return (
                <div
                  key={article.id}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-shadow hover:shadow-md"
                >
                  <div className="mb-5 flex items-start gap-3.5">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-main-color">
                      <Icon className="size-5" />
                    </div>

                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-main-color">
                        Article {article.id}
                      </span>

                      <h3 className="text-base font-bold text-slate-900">
                        {article.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs leading-relaxed text-slate-600">
                    {article.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200/60 pt-4 sm:flex-row">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-2.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-200"
            >
              <FaArrowLeft className="size-3" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/privacy-policy"
              className="flex items-center gap-2 rounded-lg bg-main-color px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-main-color"
            >
              <span>View Privacy Policy</span>
              <FaArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
