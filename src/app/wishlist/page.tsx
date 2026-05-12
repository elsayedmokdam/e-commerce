import PageHeader from "@/components/shared/page-header/PageHeader";
import { FaHeart } from "react-icons/fa6";
import WishlistTable from "./WishlistTable";
import $SERVICE_REPOSITORY from "@/services/service.repo";
import { FiAlertCircle } from "react-icons/fi";
import IsEmpty from "@/components/shared/is-empty/IsEmpty";

export default async function page() {
  const response = await $SERVICE_REPOSITORY.Wishlist.getWishlist();
  
  const wishlist = response.ok ? response.data.data : [];
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
        <IsEmpty
          icon={<FiAlertCircle size={64} className="text-gray-300" />}
          title="Your wishlist is empty."
          description="Add items to your wishlist to get started"
          links={[{ label: "Continue Shopping", href: "/products" }]}
        />
      )}
    </>
  );
}
