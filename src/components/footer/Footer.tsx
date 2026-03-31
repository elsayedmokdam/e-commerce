import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";
import logo from "@/images/logo.png"
import car from "@public/car.svg";
import contact from "@public/contact.svg";
import armour from "@public/armour.svg";
import circleArrow from "@public/circle-arrow.svg";

const staticData = [
  {
    icon: car,
    title: "Free shipping",
    description: "On orders over 500 EGP",
  },
  {
    icon: circleArrow,
    title: "Easy Returns",
    description: "14-day return policy",
  },
  {
    icon: armour,
    title: "Secure Payment",
    description: "100% secure checkout",
  },
  {
    icon: contact,
    title: "24/7 Support",
    description: "Contact us anytime",
  }
]

export function Footer() {
  return (
    <footer>
      <div className="bg-[#F0FDF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-4">
            {staticData.map((item)=> {
              return (
                <div key={item.title} className="flex items-center gap-3 rounded-md p-4 ">
                  <div className="bg-main-color/10 p-3 rounded-md">
                    <img src={item.icon.src} alt={item.title} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h6 className="text-md font-semibold text-gray-800">
                      {item.title}
                    </h6>
                    <p className="text-xs text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-[#101828] text-gray-400 pt-16 pb-8 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-md p-2 inline-block mb-6">
                {/* Logo */}
                <div className="flex items-center gap-2">
                  <img src={logo.src} alt="Logo" />
                </div>
              </div>
              <p className="mb-6 leading-relaxed">
                FreshCart is your one-stop destination for quality products.
                From fashion to electronics, we bring you the best brands at
                competitive prices with a seamless shopping experience.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <FaPhoneAlt className="text-main-color shrink-0" />
                  <Link
                    href="tel:01028340399"
                    className="hover:text-main-color"
                  >
                    01028340399
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-main-color shrink-0" />
                  <Link
                    href="mailto:elasyedmokdam@gmail.com.com"
                    className="hover:text-main-color"
                  >
                    elasyedmokdam@gmail.com.com
                  </Link>
                </li>
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-main-color shrink-0 mt-1" />
                  <span>123 Commerce Street, New York, NY 10001</span>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="bg-white/10 p-2.5 rounded-full hover:bg-main-color hover:text-white transition-colors"
                >
                  <FaFacebookF size={14} />
                </a>
                <a
                  href="#"
                  className="bg-white/10 p-2.5 rounded-full hover:bg-main-color hover:text-white transition-colors"
                >
                  <FaTwitter size={14} />
                </a>
                <a
                  href="#"
                  className="bg-white/10 p-2.5 rounded-full hover:bg-main-color hover:text-white transition-colors"
                >
                  <FaInstagram size={14} />
                </a>
                <a
                  href="#"
                  className="bg-white/10 p-2.5 rounded-full hover:bg-main-color hover:text-white transition-colors"
                >
                  <FaYoutube size={14} />
                </a>
              </div>
            </div>

            {/* Shop Column */}
            <div>
              <h3 className="text-white font-semibold text-base mb-5">Shop</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/products"
                    className="hover:text-main-color transition-colors"
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories"
                    className="hover:text-main-color transition-colors"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/brands"
                    className="hover:text-main-color transition-colors"
                  >
                    Brands
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/electronics"
                    className="hover:text-main-color transition-colors"
                  >
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/mens-fashion"
                    className="hover:text-main-color transition-colors"
                  >
                    Men's Fashion
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/womens-fashion"
                    className="hover:text-main-color transition-colors"
                  >
                    Women's Fashion
                  </Link>
                </li>
              </ul>
            </div>

            {/* Account Column */}
            <div>
              <h3 className="text-white font-semibold text-base mb-5">
                Account
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/profile"
                    className="hover:text-main-color transition-colors"
                  >
                    My Account
                  </Link>
                </li>
                <li>
                  <Link
                    href="/profile/orders"
                    className="hover:text-main-color transition-colors"
                  >
                    Order History
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wishlist"
                    className="hover:text-main-color transition-colors"
                  >
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cart"
                    className="hover:text-main-color transition-colors"
                  >
                    Shopping Cart
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="hover:text-main-color transition-colors"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signup"
                    className="hover:text-main-color transition-colors"
                  >
                    Create Account
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="text-white font-semibold text-base mb-5">
                Support
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-main-color transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="hover:text-main-color transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shipping"
                    className="hover:text-main-color transition-colors"
                  >
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link
                    href="/returns"
                    className="hover:text-main-color transition-colors"
                  >
                    Returns & Refunds
                  </Link>
                </li>
                <li>
                  <Link
                    href="/track-order"
                    className="hover:text-main-color transition-colors"
                  >
                    Track Order
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-white font-semibold text-base mb-5">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-main-color transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-main-color transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookie-policy"
                    className="hover:text-main-color transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© 2026 FreshCart. All rights reserved.</p>
            <div className="flex items-center gap-4 text-2xl">
              <FaCcVisa className="hover:text-white transition-colors cursor-pointer" />
              <FaCcMastercard className="hover:text-white transition-colors cursor-pointer" />
              <FaCcPaypal className="hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
