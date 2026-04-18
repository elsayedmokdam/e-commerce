import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { CategoryData } from "@/services/types/categories_interface";
import Image from "next/image";
import CategoryCard from "@/components/shared/category-card/CategoryCard";

const promoCards: PromoCard[] = [
  {
    id: "1",
    title: "Fresh Organic Fruits",
    description: "Get up to 40% off on selected organic fruits",
    discount: "40% OFF",
    code: "Use code: ORGANIC40",
    buttonText: "Shop Now",
    bgColor: "bg-linear-to-r from-[#00BC7D] to-[#007A55]",
    textColor: "text-white",
    buttonColor: "text-[#00BC7D]",
  },
  {
    id: "2",
    title: "Exotic Vegetables",
    description: "Discover our latest collection of premium vegetables",
    discount: "25% OFF",
    code: "Use code: FRESH25",
    buttonText: "Explore Now",
    bgColor: "bg-linear-to-r from-[#FF8904] to-[#FF2056]",
    textColor: "text-white",
    buttonColor: "text-[#FF8904]",
  },
];

interface PromoCard {
  id: string;
  title: string;
  description: string;
  discount: string;
  code: string;
  buttonText: string;
  bgColor: string;
  textColor: string;
  buttonColor: string;
}

export default function ShopByCategory({
  categories,
}: {
  categories: CategoryData[];
}) {
  return (
    <section className="w-full bg-gray-50 py-10 lg:py-14 xl:py-18 px-5 md:px-7 lg:px-9">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-8 flex items-center justify-between md:mb-12 relative ms-4">
          <div className="before:absolute before:content-[''] before:w-1.25 before:h-9 before:bg-linear-to-b before:from-main-color before:to-teal-600 before:rounded-xl before:-left-4 before:top-1/2 before:-translate-y-1/2">
            <h2 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl">
              Shop By <span className="text-main-color">Category</span>
            </h2>
          </div>
          <Link
            href="/categories"
            className="group flex items-center gap-1 text-sm font-semibold text-main-color transition-colors hover:text-teal-600 md:text-base"
          >
            <span>
              View All <span className="hidden md:inline">Categories</span>
            </span>
            <span className="group-hover:translate-x-1 transition-transform">
              <FaArrowRightLong size={18} />
            </span>
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="mb-8 grid grid-cols-2 gap-3 md:mb-12 md:grid-cols-3 md:gap-4 lg:grid-cols-5 xl:grid-cols-6 xl:gap-6">
          {categories.map((category) => (
            <CategoryCard key={category._id} category={category} />
          ))}
        </div>

        {/* Promo Cards Section */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
          {promoCards.map((promo) => (
            <div
              key={promo.id}
              className={`${promo.bgColor} rounded-lg p-6 text-white transition-transform duration-300 hover:scale-105 md:p-8 lg:rounded-xl`}
            >
              <div className="flex flex-col justify-between md:min-h-48">
                {/* Promo Header */}
                <div className="mb-4 md:mb-6">
                  <p className="mb-2 text-xs font-semibold opacity-90 md:text-sm bg-white/20 inline-block px-2 py-1 rounded-full">
                    ✨{" "}
                    {promo.buttonText === "Shop Now"
                      ? "Deal of the Day"
                      : "New Arrivals"}
                  </p>
                  <h3 className="mb-2 text-lg font-bold md:text-2xl lg:text-3xl">
                    {promo.title}
                  </h3>
                  <p className="text-xs text-white text-opacity-90 md:text-sm">
                    {promo.description}
                  </p>
                </div>

                {/* Discount and CTA */}
                <div className="flex gap-5 items-center">
                  <div className="mb-4 flex items-baseline gap-2 md:mb-6">
                    <span className="text-xl font-bold md:text-2xl lg:text-3xl">
                      {promo.discount}
                    </span>
                  </div>
                  <p className="mb-4 text-xs font-medium opacity-90 md:mb-6 md:text-sm">
                    {promo.code}
                  </p>
                </div>
                <Link
                  href="/categories"
                  className={`w-fit flex items-center gap-2 rounded-full bg-white px-6 py-2 text-xs font-semibold ${promo.buttonColor} transition-all duration-300 hover:bg-gray-100 hover:shadow-md md:px-8 md:py-3 md:text-sm lg:px-10 lg:py-4 lg:text-base`}
                >
                  {promo.buttonText}
                  <FaArrowRightLong size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
