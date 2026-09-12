import PageHeader from "@/components/shared/page-header/PageHeader";
import PageContent from "./PageContent";
import $SERVICE_REPOSITORY from "@/services/service.repo";
import { ProductData } from "@/services/types/products_interface";

export default async function page({ params }: any) {
  const { id } = await params;

  // Fetch specific product to get its details
  const response = await $SERVICE_REPOSITORY.Products.getSpecificProduct(id);
  if (!response.ok) {
    throw new Error(response.error.message);
  }

  const productData: ProductData = response.data.data;

  const wishlistResponse = await $SERVICE_REPOSITORY.Wishlist.getWishlist();
  let wishlistIds: string[] = [];

  if (wishlistResponse.ok) {
    wishlistIds = wishlistResponse.data.data.map(
      (item: ProductData) => item._id,
    );
  }

  // Get product reviews
  const reviewsResponse = await $SERVICE_REPOSITORY.Reviews.getProductReviews(
    productData._id,
  );

  if (!reviewsResponse.ok) {
    throw new Error(reviewsResponse.error.message);
  }

  const productReviews = reviewsResponse.data.data;

  return (
    <>
      {/* Header of the page */}
      <PageHeader
        bgColor="bg-linear-to-b from-[#16A34A] via-[#22C55E] to-[#4ADE80]"
        icon={productData.imageCover}
        title={productData.title}
        pageName={[
          { name: "Products", href: "/products" },
          { name: productData.title, href: "" },
        ]}
        subtitle="Check out our complete product collection"
        iconBgColor="from-[#16A34A] to-[#4ADE80]"
      />
      {/* Product Details */}
      <PageContent productData={productData} wishlistIds={wishlistIds} productReviews={productReviews} />
    </>
  );
}
