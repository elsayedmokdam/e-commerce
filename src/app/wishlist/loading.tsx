import { FaSpinner } from "react-icons/fa6";

export default function WishlistLoading() {
  return (
    <div className="max-w-7xl min-h-70 mx-auto my-7 py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8 flex flex-col gap-4 justify-center items-center">
      <h2 className="text-gray-500 text-2xl font-semibold flex items-center gap-2 text-center">
        Loading Your Wishlist
      </h2>
      <div className="text-[#ec008c] text-4xl font-bold flex items-center gap-2 text-center">
        <FaSpinner className="animate-spin" />
      </div>
    </div>
  );
}
