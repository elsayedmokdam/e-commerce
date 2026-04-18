"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import logo from "@/images/logo.png";
import contact from "@public/contact.svg";
import vector6 from "@public/car.svg";
import vector7 from "@public/Vector(7).svg";
import tel from "@public/tel.svg";
import mail from "@public/mail.svg";
import AppInput from "../shared/app-input/AppInput";
import { signOut, useSession } from "next-auth/react";
import DropDown from "../drop-down/DropDown";
import { FaBars, FaSearch, FaSignOutAlt, FaTimes } from "react-icons/fa";
import {
  FaCartShopping,
  FaRegHeart,
  FaRegUser,
  FaUserPlus,
} from "react-icons/fa6";
import { useRouter } from "next/navigation";
import swal from "sweetalert";
import { cartContext } from "@/app/_providers/context/CartContextProvider";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const route = useRouter();

  const { numOfCartItems } = React.useContext(cartContext);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const { data } = useSession();

  function handleLogout() {
    // Use swall before signing out to confirm the action with the user
    swal({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      buttons: ["Cancel", "Logout"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        signOut({
          callbackUrl: "/signin", // Redirect to signin page after logout
          redirect: false,
        }).then(() => {
          route.push("/signin"); // Ensure client-side navigation to signin page
        });
      }
    });
  }

  return (
    <div className="flex flex-col mb-18">
      {/* Top of Navbar */}
      <div className="hidden lg:flex items-center justify-between text-gray-500 font-medium text-sm px-30 py-4 ">
        <div className="flex items-center gap-7 text-gray-500 font-medium text-sm">
          <div className="flex items-center gap-2">
            <div>
              <img src={vector6.src} alt="Vector" />
            </div>
            <span>Free Shipping on Orders Over 500 EGP</span>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <img src={vector7.src} alt="Vector" />
            </div>
            <span>New Arrivals Daily</span>
          </div>
        </div>

        <div className="flex items-center gap-4 ">
          <div className="relative flex items-center gap-4 after:content-[''] after:w-px after:h-full after:bg-gray-200 after:absolute after:-inset-e-2 after:top-0">
            <Link href="tel:0123456789" className="flex items-center gap-2 ">
              <img src={tel.src} alt="Contact" />
              <span>01028340399</span>
            </Link>
            <Link
              href="mailto:sayed.route@gmail.com"
              className="flex items-center gap-2 "
            >
              <img src={mail.src} alt="Contact" />
              <span>sayed.route@gmail.com</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {data ? (
              <div className="flex items-center gap-3">
                <span className="text-main-color font-semibold text-sm ">
                  Welcome, {data?.user?.name.split(" ", 1)} !
                </span>
                <span
                  onClick={() => handleLogout()}
                  className="hover:text-red-500 cursor-pointer flex items-center gap-1 text-red-400"
                >
                  <span>
                    <FaSignOutAlt />
                  </span>
                  <span>Sign Out</span>
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/signin" className="flex items-center gap-2">
                  <span>
                    <FaRegUser />
                  </span>
                  <span>Sign In</span>
                </Link>
                <Link href="/signup" className="flex items-center gap-2">
                  <span>
                    <FaUserPlus />
                  </span>
                  <span>Sign Up</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <nav
        className={`hidden lg:flex items-center justify-between px-30 py-4 transition-all duration-300 fixed w-full z-50 top-0 border-t border-gray-200 ${scrolled ? "bg-white shadow-md" : "top-12 bg-white"}`}
      >
        {/* Logo */}
        <div>
          <Link href="/">
            <img src={logo.src} alt="Logo" />
          </Link>
        </div>

        {/* Search bar */}
        <div className="flex items-center flex-1 ms-2">
          <AppInput
            placeholder="Search for products, brands and more..."
            icon={<FaSearch />}
            iconPosition="end"
            iconClassName="text-white bg-main-color rounded-full flex items-center justify-center size-8 p-0"
          />
        </div>

        {/* Main links */}
        <div>
          <NavigationMenu>
            <NavigationMenuList className="flex items-center">
              {/* Home */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    className="hover:bg-transparent hover:text-main-color focus:bg-transparent focus:font-bold focus:text-main-color text-lg"
                    href="/"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Shop */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    className="hover:bg-transparent hover:text-main-color focus:bg-transparent focus:font-bold focus:text-main-color text-lg"
                    href="/products"
                  >
                    Shop
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Categories and subcategories */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-main-color">
                  Categories
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-60 text-gray-800 font-semibold">
                    <ListItem href="/categories">All Categoties</ListItem>
                    <ListItem href="/categories/2">Electronics</ListItem>
                    <ListItem href="/categories/3">
                      Category 3 description
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Brands */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    className="hover:bg-transparent hover:text-main-color focus:bg-transparent focus:font-bold focus:text-main-color text-lg"
                    href="/brands"
                  >
                    Brands
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/contact">
                    <div className="bg-main-color/7 size-9 rounded-full flex items-center justify-center">
                      <img src={contact.src} alt="Contact" />
                    </div>
                    <div className="after:content-[''] after:w-px after:h-full after:bg-gray-200 after:absolute after:inset-e-0 after:top-0">
                      <p className="text-gray-400 text-xs">Support</p>
                      <p className="text-gray-700 text-xs">24/7 Help</p>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Wishlist */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    className="hover:bg-transparent text-gray-500 hover:text-main-color focus:bg-transparent focus:font-bold focus:text-main-color text-lg"
                    href="/wishlist"
                  >
                    <FaRegHeart className="size-6" />
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Cart */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    className="relative hover:bg-transparent text-gray-500 hover:text-main-color focus:bg-transparent focus:font-bold focus:text-main-color"
                    href="/cart"
                  >
                    <FaCartShopping className="size-6" />
                    <span className="text-xs absolute top-0 right-2 bg-main-color text-white rounded-full w-5 h-5 flex items-center justify-center">
                      {numOfCartItems > 9 ? "9+" : numOfCartItems}
                    </span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* User Account */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  {data ? (
                    <DropDown data={data} />
                  ) : (
                    <div>
                      {/* Signin Button */}
                      <Link
                        href="/signin"
                        className="bg-main-color text-white px-4 py-2 rounded-full hover:bg-main-color/80 flex items-center gap-2"
                      >
                        <span>
                          <FaRegUser />
                        </span>
                        <span>Signin</span>
                      </Link>
                    </div>
                  )}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Mobile Nav */}
      <div className="flex items-center justify-between text-gray-500 font-medium p-4 text-sm lg:hidden fixed w-full z-50 top-0 bg-white ">
        {/* Logo */}
        <img src={logo.src} alt="logo" className="w-28" />

        <div className="flex items-center gap-3">
          {/* Wishlist & Cart */}
          <div className="flex items-center gap-4">
            <Link href="/wishlist" className="flex items-center gap-3 relative">
              <FaRegHeart className="size-6" />
            </Link>

            <Link href="/cart" className="flex items-center gap-3 relative">
              <FaCartShopping className="size-6" />
              <span className="text-xs absolute -top-2 -right-2 bg-main-color text-white rounded-full w-5 h-5 flex items-center justify-center">
                {numOfCartItems > 9 ? "9+" : numOfCartItems}
              </span>
            </Link>

            {data && <DropDown data={data} />}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="text-xl lg:hidden text-white bg-main-color p-2.5 rounded-full"
          >
            <FaBars />
          </button>
        </div>

        {/* Side Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 
        ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <img src={logo.src} className="w-28" />
            <button onClick={() => setOpen(false)}>
              <FaTimes />
            </button>
          </div>

          {/* Search */}
          <div>
            <AppInput
              placeholder="Search Products..."
              icon={<FaSearch />}
              iconClassName="text-white bg-main-color rounded-md flex items-center justify-center size-8 p-0"
              iconPosition="end"
              className="max-w-10/12 mx-auto my-5 rounded-lg"
            />
          </div>

          {/* Links */}
          <div className="px-7 font-medium">
            <Link
              href="/"
              className="block p-3 rounded-lg hover:text-main-color hover:bg-green-100 transition-colors duration-200"
            >
              Home
            </Link>

            <Link
              href="/products"
              className="block p-3 rounded-lg hover:text-main-color hover:bg-green-100 transition-colors duration-200"
            >
              Shop
            </Link>

            <Link
              href="/categories"
              className="block p-3 rounded-lg hover:text-main-color hover:bg-green-100 transition-colors duration-200"
            >
              Categories
            </Link>

            <Link
              href="/brands"
              className="block p-3 rounded-lg hover:text-main-color hover:bg-green-100 transition-colors duration-200"
            >
              Brands
            </Link>
          </div>

          <div className="my-4 border-t"></div>

          {/* Wishlist & Cart */}
          <div className="ps-7 space-y-4">
            <Link
              href="/wishlist"
              className="flex items-center gap-3 p-3 rounded-lg hover:text-main-color hover:bg-green-100 transition-colors duration-200"
            >
              <FaRegHeart className="size-6" />
              Wishlist
            </Link>

            <Link
              href="/cart"
              className="flex items-center gap-3 p-3 rounded-lg hover:text-main-color hover:bg-green-100 transition-colors duration-200"
            >
              <FaCartShopping className="size-6" />
              Cart
            </Link>
          </div>

          <div className="my-4 border-t"></div>

          {!data && (
            <>
              {/* Buttons */}
              <div className="px-4 space-y-3">
                <Link
                  href="/signin"
                  className="flex items-center justify-center bg-green-600 text-white py-2 rounded-lg"
                >
                  Sign In
                </Link>

                <Link
                  href="/signup"
                  className="flex items-center justify-center border border-green-600 text-green-600 py-2 rounded-lg"
                >
                  Sign Up
                </Link>
              </div>
            </>
          )}

          {/* Support */}
          <Link href="/contact">
            <div className="p-4 mt-4 bg-gray-100 mx-4 rounded-lg text-sm flex items-center gap-3">
              <div className="bg-main-color/15 size-9 rounded-full flex items-center justify-center">
                <img src={contact.src} alt="Contact" />
              </div>
              <div>
                <p className="text-gray-700">Need Help?</p>
                <p className="text-green-600 font-semibold">Contact Support</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
