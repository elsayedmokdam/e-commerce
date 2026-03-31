export default function OrdersPage() {
  return (
    <section aria-labelledby="orders-heading">
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="bg-white py-6 px-4 sm:p-6">
          <div>
            <h2
              id="orders-heading"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              Order History
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Check the status of recent orders, manage returns, and discover
              similar products.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Orders</h3>
            {/* Placeholder Empty State or Single Order Item */}
            <div className="rounded-lg border border-gray-200">
              <div className="border-b border-gray-200 bg-gray-50 p-4 sm:flex sm:items-center sm:justify-between sm:p-6 rounded-t-lg">
                <dl className="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:grid-cols-3 lg:grid-cols-4">
                  <div>
                    <dt className="font-medium text-gray-900">Order number</dt>
                    <dd className="mt-1 text-gray-500">WU88191111</dd>
                  </div>
                  <div className="hidden sm:block">
                    <dt className="font-medium text-gray-900">Date placed</dt>
                    <dd className="mt-1 text-gray-500">
                      <time dateTime="2023-01-22">Jan 22, 2026</time>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Total amount</dt>
                    <dd className="mt-1 font-medium text-gray-900">$238.00</dd>
                  </div>
                </dl>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-center sm:items-start text-sm">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">Machined Pen</h4>
                    <p className="mt-2 hidden text-gray-500 sm:block">
                      Black machined pen with minimal details.
                    </p>
                  </div>
                  <p className="font-medium text-gray-900">$35.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
