
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaClock,
  FaPhoneFlip,
} from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


import PageHeader from "@/components/shared/page-header/PageHeader";
import Link from "next/link";
import ContactForm from "@/components/contact-form/ContactForm";


const contactInfo = [
  {
    icon: FaEnvelope,
    title: "Email Us",
    value: "elsayedmokdam@gmail.com",
    description: "We'll reply within 24 hours",
  },
  {
    icon: FaPhone,
    title: "Call Us",
    value: "+20 10 28 340 399",
    description: "Mon - Fri, 9:00 AM - 6:00 PM",
  },
  {
    icon: FaLocationDot,
    title: "Visit Us",
    value: "Cairo, Egypt",
    description: "Come visit our store",
  },
  {
    icon: FaClock,
    title: "Working Hours",
    value: "09:00 AM - 06:00 PM",
    description: "Saturday - Thursday",
  },
];

export default function ContactUs() {

  return (
    <>
      <PageHeader
        bgColor="bg-linear-to-b from-[#16A34A] via-[#22C55E] to-[#4ADE80]"
        icon={<FaPhoneFlip className="text-white" />}
        title="All Categories"
        pageName={[{ name: "Categories", href: "/categories" }]}
        subtitle="Explore our complete category collection"
        iconBgColor="from-[#16A34A] to-[#4ADE80]"
      />

      <main className="min-h-screen bg-gray-50 py-10 sm:py-14 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
            <section className="relative overflow-hidden rounded-2xl bg-main-color p-6 text-white sm:p-8 lg:p-10">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10" />
              <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white/10" />

              <div className="relative z-10">
                <h2 className="text-2xl font-bold sm:text-3xl">Get in Touch</h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/80 sm:text-base">
                  We're always happy to help. Reach out to us using any of the
                  contact methods below and we'll get back to you as soon as
                  possible.
                </p>


                <div className="mt-8 space-y-6 sm:mt-10">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                          <Icon className="text-lg" />
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold">
                            {item.title}
                          </h3>

                          <p className="mt-1 wrap-break-words text-sm font-medium">
                            {item.value}
                          </p>

                          <p className="mt-1 text-xs text-white/65">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Social Media */}

                <div className="mt-10 border-t border-white/20 pt-7">
                  <p className="mb-4 text-sm font-semibold">Follow us</p>

                  <div className="flex gap-3">
                    <Link
                      href="#"
                      aria-label="Facebook"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-main-color"
                    >
                      <FaFacebookF />
                    </Link>

                    <Link
                      href="#"
                      aria-label="Instagram"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-main-color"
                    >
                      <FaInstagram />
                    </Link>

                    <Link
                      href="#"
                      aria-label="Twitter"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-main-color"
                    >
                      <FaTwitter />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact  Form */}
            <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
              <div className="mb-7">
                <h2 className="text-2xl font-bold text-gray-900">
                  Send Us a Message
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Fill out the form below and our support team will get back to
                  you shortly.
                </p>
              </div>

              <ContactForm />
            </section>
          </div>

          {/* Success Message */}
          <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm sm:mt-10 sm:p-6">
            <p className="text-sm text-gray-500">
              Usually we respond within{" "}
              <span className="font-semibold text-gray-800">24 hours</span>.
              Thank you for choosing us!
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
