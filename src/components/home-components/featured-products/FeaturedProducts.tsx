import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { ProductData } from "@/services/types/products_interface";
import ProductCard from "@/components/shared/product-card/ProductCard";

export default function FeaturedProducts({
  products,
}: {
  products: ProductData[];
}) {
  return (
    <section className="w-full py-10 lg:py-14 xl:py-18 px-5 md:px-7 lg:px-9">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 flex items-center justify-between md:mb-12 relative ms-4">
          <div className="before:absolute before:content-[''] before:w-1.25 before:h-9 before:bg-linear-to-b before:from-main-color before:to-teal-600 before:rounded-xl before:-left-4 before:top-1/2 before:-translate-y-1/2">
            <h2 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl">
              Featured <span className="text-main-color">Products</span>
            </h2>
          </div>
          <Link
            href="/products"
            className="group flex items-center gap-1 text-sm font-semibold text-main-color transition-colors hover:text-teal-600 md:text-base"
          >
            <span>
              View All <span className="hidden md:inline">Products</span>
            </span>
            <span className="group-hover:translate-x-1 transition-transform">
              <FaArrowRightLong size={18} />
            </span>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
}
