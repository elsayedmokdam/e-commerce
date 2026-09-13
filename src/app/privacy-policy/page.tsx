"use client";

import PageHeader from "@/components/shared/page-header/PageHeader";
import Link from "next/link";
import {
  FaShieldAlt,
  FaDatabase,
  FaUserCheck,
  FaLock,
  FaShareAlt,
  FaUserShield,
  FaCookieBite,
  FaClock,
  FaEnvelope,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const articles = [
  {
    icon: <FaDatabase className="size-5" />,
    title: "Information We Collect",
    items: [
      {
        number: "1.1",
        label: "Personal Data:",
        text: "Name, email address, phone number, and shipping address.",
      },
      {
        number: "1.2",
        label: "Payment Data:",
        text: "Credit card information processed securely through our payment providers.",
      },
      {
        number: "1.3",
        label: "Technical Data:",
        text: "IP address, browser type, device information, and access times.",
      },
      {
        number: "1.4",
        label: "Usage Data:",
        text: "Pages viewed, products browsed, and actions taken within our platform.",
      },
    ],
  },

  {
    icon: <FaUserCheck className="size-5" />,
    title: "How We Use Your Information",
    items: [
      {
        number: "2.1",
        text: "To process and fulfill your orders.",
      },
      {
        number: "2.2",
        text: "To send order confirmations and shipping updates.",
      },
      {
        number: "2.3",
        text: "To provide customer support and respond to inquiries.",
      },
      {
        number: "2.4",
        text: "To improve our products, services, and user experience.",
      },
      {
        number: "2.5",
        text: "To send promotional communications (with your consent).",
      },
    ],
  },

  {
    icon: <FaLock className="size-5" />,
    title: "Data Protection",
    items: [
      {
        number: "3.1",
        text: "We implement industry-standard encryption (SSL/TLS) for all data transfers.",
      },
      {
        number: "3.2",
        text: "Payment information is processed by PCI-compliant payment providers.",
      },
      {
        number: "3.3",
        text: "We conduct regular security audits and vulnerability assessments.",
      },
      {
        number: "3.4",
        text: "Access to personal data is restricted to authorized personnel only.",
      },
    ],
  },

  {
    icon: <FaShareAlt className="size-5" />,
    title: "Information Sharing",
    items: [
      {
        number: "4.1",
        text: "We do not sell, trade, or rent your personal information to third parties.",
      },
      {
        number: "4.2",
        text: "We may share data with trusted service providers who assist in our operations.",
      },
      {
        number: "4.3",
        text: "We may disclose information when required by law or to protect our rights.",
      },
    ],
  },

  {
    icon: <FaUserShield className="size-5" />,
    title: "Your Rights",
    items: [
      {
        number: "5.1",
        label: "Access:",
        text: "Request a copy of your personal data.",
      },
      {
        number: "5.2",
        label: "Rectification:",
        text: "Request correction of inaccurate data.",
      },
      {
        number: "5.3",
        label: "Erasure:",
        text: "Request deletion of your personal data.",
      },
      {
        number: "5.4",
        label: "Portability:",
        text: "Request your data in a portable format.",
      },
      {
        number: "5.5",
        label: "Opt-out:",
        text: "Unsubscribe from marketing communications at any time.",
      },
    ],
  },

  {
    icon: <FaCookieBite className="size-5" />,
    title: "Cookies",
    items: [
      {
        number: "6.1",
        text: "We use cookies to enhance your browsing experience and remember preferences.",
      },
      {
        number: "6.2",
        text: "You can control cookie settings through your browser preferences.",
      },
      {
        number: "6.3",
        text: "Disabling cookies may affect the functionality of certain features.",
      },
    ],
  },

  {
    icon: <FaClock className="size-5" />,
    title: "Data Retention",
    description:
      "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Account data is deleted within 30 days of account closure upon request.",
  },

  {
    icon: <FaEnvelope className="size-5" />,
    title: "Contact Us",
    description: (
      <>
        For questions about this Privacy Policy or to exercise your rights,
        contact our Data Protection Officer at{" "}
        <a
          href="mailto:privacy@freshcart.com"
          className="font-semibold text-main-color hover:underline"
        >
          privacy@freshcart.com
        </a>
      </>
    ),
  },
];

export default function Page() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        pageName={[{ name: "Privacy Policy", href: "/privacy-policy" }]}
        bgColor="bg-linear-to-b from-[#16A34A] via-[#22C55E] to-[#4ADE80]"
        iconBgColor="from-[#16A34A] to-[#4ADE80]"
        icon={<FaShieldAlt className="size-6" />}
        subtitle="Your Privacy Matters"
      />

      <div className="min-h-screen bg-emerald-50/20 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-6">
          {/* Banner Notice */}
          <div className="flex items-start gap-4 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 shadow-xs">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-main-color text-white shadow-xs">
              <FaShieldAlt className="size-5" />
            </div>

            <div>
              <h2 className="text-sm font-bold text-emerald-950">
                Your Privacy Matters
              </h2>

              <p className="mt-0.5 text-xs leading-relaxed text-emerald-800">
                This Privacy Policy describes how FreshCart collects, uses, and
                protects your personal information when you use our services. We
                are committed to ensuring that your privacy is protected.
              </p>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {articles.map((article, index) => (
              <div
                key={article.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-shadow hover:shadow-md"
              >
                {/* Article Header */}
                <div className="mb-5 flex items-start gap-3.5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-main-color">
                    {article.icon}
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-main-color">
                      Article {index + 1}
                    </span>

                    <h3 className="text-base font-bold text-slate-900">
                      {article.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                {article.description && (
                  <p className="text-xs leading-relaxed text-slate-600">
                    {article.description}
                  </p>
                )}

                {/* Items */}
                {article.items && (
                  <ul className="space-y-3 text-xs text-slate-600">
                    {article.items.map((item) => (
                      <li
                        key={item.number}
                        className="flex items-start gap-2.5"
                      >
                        <span className="shrink-0 rounded-md bg-emerald-100/70 px-1.5 py-0.5 text-[10px] font-bold text-main-color">
                          {item.number}
                        </span>

                        <span>
                          {item.text && (
                            <strong className="text-slate-800">
                              {item.text}{" "}
                            </strong>
                          )}

                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200/60 pt-4 sm:flex-row">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-md bg-slate-100 px-4 py-2.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-200"
            >
              <FaArrowLeft className="size-3" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/terms"
              className="flex items-center gap-2 rounded-md bg-main-color px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-main-color"
            >
              <span>View Terms of Service</span>
              <FaArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
