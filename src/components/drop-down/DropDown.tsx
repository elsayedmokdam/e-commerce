"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { FaRegUserCircle, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";
import { TiContacts } from "react-icons/ti";
import { IoMdSettings } from "react-icons/io";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface DropDownProps {
  data: {
    user: {
      name: string;
      email: string;
    };
  };
}

const dropDownLinks = [
  // {
  //   label: "Profile",
  //   href: "/profile",
  //   icon: <FaRegUser />,
  // },
  {
    label: "Contact",
    href: "/contact",
    icon: <TiContacts />,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: <IoMdSettings />,
  },
  {
    label: "Wishlist",
    href: "/wishlist",
    icon: <FaRegHeart />,
  },
  // {
  //   label: "Addresses",
  //   href: "/addresses",
  //   icon: <TiContacts />,
  // },
];

export default function DropDown({ data }: DropDownProps) {
  const route = useRouter();

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
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <FaRegUserCircle className="text-gray-500 hover:text-main-color size-6.5 cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-70 bg-white border border-gray-200 rounded-lg shadow-lg p-0!"
        >
          {/* User Info */}
          <DropdownMenuItem className="flex items-center gap-2 p-4 hover:bg-transparent!">
            <span>
              <FaRegUserCircle className="size-5 me-2 text-gray-500" />
            </span>
            <div className="flex flex-col text-sm truncate">
              <span className="text-gray-900 font-semibold text-md">
                {data?.user?.name}
              </span>
              <span className="text-gray-500 text-xs">{data?.user?.email}</span>
            </div>
          </DropdownMenuItem>

          {/* Divider */}
          <DropdownMenuSeparator />

          {/* Dropdown Items */}
          {dropDownLinks.map((link) => (
            <DropdownMenuItem className="text-gray-600 p-4">
              <Link
                href={link.href}
                className="flex items-center gap-2 hover:text-main-color! cursor-pointer w-full font-medium"
              >
                <span>
                  <span>{link.icon}</span>
                </span>{" "}
                {link.label}
              </Link>
            </DropdownMenuItem>
          ))}

          <DropdownMenuSeparator />
          <DropdownMenuItem
            variant="destructive"
            className="p-4 flex items-center gap-2 cursor-pointer w-full font-medium"
            onClick={() => handleLogout()}
          >
            <span>
              <FaSignOutAlt />
            </span>
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
