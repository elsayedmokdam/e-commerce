export default function ChangePasswordPage() {
  return (
    <section aria-labelledby="change-password-heading">
      <form action="#" method="POST">
        <div className="shadow sm:overflow-hidden sm:rounded-md">
          <div className="bg-white py-6 px-4 sm:p-6">
            <div>
              <h2
                id="change-password-heading"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Change Password
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Ensure your account is using a long, random password to stay secure.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-6">
              <div className="col-span-4 sm:col-span-2">
                <label
                  htmlFor="current-password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Current Password
                </label>
                <input
                  type="password"
                  name="current-password"
                  id="current-password"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="col-span-4 sm:col-span-2 lg:col-span-4"></div> {/* Spacer */}

              <div className="col-span-4 sm:col-span-2">
                <label
                  htmlFor="new-password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  New Password
                </label>
                <input
                  type="password"
                  name="new-password"
                  id="new-password"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="col-span-4 sm:col-span-2">
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Update Password
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
