import PageHeader from "@/components/shared/page-header/PageHeader";
import { FaHeart } from "react-icons/fa6";
import WishlistTable from "./WishlistTable";
import $SERVICE_REPOSITORY from "@/services/service.repo";
import { FiAlertCircle } from "react-icons/fi";
import Link from "next/link";

export default async function page() {
  const response = await $SERVICE_REPOSITORY.Wishlist.getWishlist();
  if (!response.ok) {
    throw new Error(response.error.message);
  }
  const wishlist = response.data.data;
  return (
    <>
      <PageHeader
        bgColor="bg-linear-to-r from-[#ec008c] via-[#ff4d4d] to-[#fc6767]"
        icon={<FaHeart className="size-6" />}
        title="My Wishlist"
        pageName={[{ name: "Wishlist", href: "/wishlist" }]}
        subtitle={wishlist.length + " Items Saved"}
        iconBgColor="from-[#ec008c] to-[#fc6767]"
      />
      <div></div>
      {wishlist.length > 0 ? (
        <WishlistTable wishlist={wishlist} />
      ) : (
        <div className="max-w-7xl mx-auto my-12 flex flex-col items-center justify-center py-20">
          <FiAlertCircle size={64} className="text-gray-300 mb-6" />
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">
            Your Wishlist is Empty
          </h3>
          <p className="text-gray-500 text-center font-medium max-w-md mb-6">
            Looks like you have not added any products to your wishlist yet.
          </p>
          <Link
            href="/"
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      )}
    </>
  );
}
