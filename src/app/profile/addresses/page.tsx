import Link from "next/link";

export default function AddressesPage() {
  return (
    <section aria-labelledby="addresses-heading">
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="bg-white py-6 px-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2
                id="addresses-heading"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                My Addresses
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Manage your saved addresses for quicker checkout.
              </p>
            </div>
            <Link
              href="/profile/addresses/new"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add new address
            </Link>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            {/* Placeholder Empty State or Single Item */}
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-medium text-gray-900">Home Address</h3>
              <p className="mt-1 text-sm text-gray-500">
                123 Main Street<br />
                Apt 4B<br />
                New York, NY 10001<br />
                United States
              </p>
              <div className="mt-4 flex gap-4">
                <Link
                  href="/profile/addresses/1"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Edit
                </Link>
                <button
                  type="button"
                  className="text-sm font-medium text-red-600 hover:text-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
