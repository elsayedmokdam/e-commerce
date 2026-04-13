import HomeSlider from "@/components/home-components/home-slider/HomeSlider";
import ShopByCategory from "@/components/home-components/shop-by-category/ShopByCategory";
import FeaturedProducts from "@/components/home-components/featured-products/FeaturedProducts";
import HomeForm from "@/components/home-components/home-form/HomeForm";
import $SERVICE_REPOSITORY from "@/services/service.repo";
import { ProductData } from "@/services/types/products_interface";
import { CategoryData } from "@/services/types/categories_interface";

export default async function page() {
  // Fetch featured products for the homepage
  const productsResponse = await $SERVICE_REPOSITORY.Products.getProducts({
    limit: "15",
    page: "1",
  })
  const products: ProductData[] = productsResponse.data;

  // Fetch categories for the Shop By Category section
  const categoriesResponse = await $SERVICE_REPOSITORY.Categories.getCategories({
    limit: "7",
    page: "1",
  })
  const categories: CategoryData[] = categoriesResponse.data;
  return (
    <>
      <HomeSlider />
      <ShopByCategory categories={categories} />
      <FeaturedProducts products={products} />
      <HomeForm />
    </>
  );
}
