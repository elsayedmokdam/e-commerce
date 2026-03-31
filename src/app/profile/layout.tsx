import Link from "next/link";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <aside className="py-6 px-2 sm:px-6 lg:col-span-3 lg:py-0 lg:px-0">
          <nav className="space-y-1">
            {/* Nav links */}
            <Link
              href="/profile/update"
              className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"
            >
              Profile Settings
            </Link>
            <Link
              href="/profile/change-password"
              className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              Change Password
            </Link>
            <Link
              href="/profile/addresses"
              className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              My Addresses
            </Link>
            <Link
              href="/profile/orders"
              className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              Order History
            </Link>
          </nav>
        </aside>
        <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
          {children}
        </div>
      </div>
    </div>
  );
}
