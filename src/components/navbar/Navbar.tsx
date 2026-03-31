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
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import contact from "@public/contact.svg";
import wishlist from "@public/wishlist.svg";
import cart from "@public/cart.svg";
import vector6 from "@public/car.svg";
import vector7 from "@public/Vector(7).svg";
import tel from "@public/tel.svg";
import mail from "@public/mail.svg";
import AppInput from "../shared/app-input/AppInput";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex flex-col">
      {/* Top of Navbar */}
      <div className="hidden md:flex items-center justify-between text-gray-500 font-medium text-sm px-30 py-4">
        <div className="flex items-center gap-7 text-gray-500 font-medium text-sm">
          <div className="flex items-center gap-2">
            <div>
              <img src={vector6.src} alt="Vector" />
            </div>
            <span>Free Shipping on all Orders Over 500 EGP</span>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <img src={vector7.src} alt="Vector" />
            </div>
            <span>New Arrivals Daily</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
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
      </div>

      <div className="h-px bg-gray-200"></div>

      <nav className="hidden md:flex items-center justify-between px-30 py-4">
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
            <NavigationMenuList>
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
                    className="hover:bg-transparent hover:text-main-color focus:bg-transparent focus:font-bold focus:text-main-color text-lg"
                    href="/wishlist"
                  >
                    <img src={wishlist.src} alt="Wishlist" />
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
                    className="hover:bg-transparent hover:text-main-color focus:bg-transparent focus:font-bold focus:text-main-color text-lg"
                    href="/cart"
                  >
                    <img src={cart.src} alt="Cart" />
                  </Link>
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

      {/* Side Menu */}
      <div className="flex items-center justify-between text-gray-500 font-medium p-4 text-sm md:hidden">
        {/* Logo */}
        <img src={logo.src} alt="logo" className="w-28" />

        <div className="flex items-center gap-3">
          {/* Wishlist & Cart */}
          <div className="flex items-center gap-4">
            <Link href="/wishlist" className="flex items-center gap-3 relative">
              <img src={wishlist.src} alt="Wishlist" />
            </Link>

            <Link href="/cart" className="flex items-center gap-3">
              <img src={cart.src} alt="Cart" />
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="text-xl md:hidden text-white bg-main-color p-2.5 rounded-full"
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
              <img src={wishlist.src} alt="Wishlist" />
              Wishlist
            </Link>

            <Link
              href="/cart"
              className="flex items-center gap-3 p-3 rounded-lg hover:text-main-color hover:bg-green-100 transition-colors duration-200"
            >
              <img src={cart.src} alt="Cart" />
              Cart
            </Link>
          </div>

          <div className="my-4 border-t"></div>

          {/* Buttons */}
          <div className="px-4 space-y-3">
            <button className="w-full bg-green-600 text-white py-2 rounded-lg">
              Sign In
            </button>

            <button className="w-full border border-green-600 text-green-600 py-2 rounded-lg">
              Sign Up
            </button>
          </div>

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

{
  /* <div className="bg-main-color/7 size-9 rounded-full flex items-center justify-center">  <div className="after:content-[''] after:w-px after:h-full after:bg-gray-200 after:absolute after:inset-e-0 after:top-0"> <p className="text-gray-400 text-xs">Support</p> <p className="text-gray-700 text-xs">24/7 Help</p> </div> */
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
