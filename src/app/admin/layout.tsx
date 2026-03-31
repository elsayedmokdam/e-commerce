import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <div className="flex w-64 flex-col border-r border-gray-200 bg-gray-50 pt-5 pb-4">
        <div className="flex flex-shrink-0 items-center px-4">
          <span className="text-lg font-bold">Admin Dashboard</span>
        </div>
        <div className="mt-5 flex flex-grow flex-col">
          <nav className="flex-1 space-y-1 bg-gray-50 px-2" aria-label="Sidebar">
            <Link
              href="/admin/users"
              className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              Users
            </Link>
            <Link
              href="/admin/reviews"
              className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              Reviews
            </Link>
            <Link
              href="/admin/orders"
              className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              Orders
            </Link>
          </nav>
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <main className="flex-1 pb-8">
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
