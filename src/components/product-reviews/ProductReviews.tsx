"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FaBox,
  FaTruck,
  FaRotateLeft,
  FaShieldHalved,
  FaStar,
  FaCheck,
  FaXmark,
} from "react-icons/fa6";
import { ProductData, Review } from "@/services/types/products_interface";
import AppForm from "../shared/app-form/AppForm";
import AppTextarea from "../shared/app-textarea/AppTextarea";
import { notify } from "@/services/utils/helpers/alerts";
import {
  addProductReviewAction,
  getProductReviewsAction,
} from "@/services/actions/products.action";

type ProductTabsProps = {
  product: ProductData;
  productReviews: Review[];
};

export default function ProductReviews({
  product,
  productReviews,
}: ProductTabsProps) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [selectedRating, setSelectedRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviews, setReviews] = useState<Review[]>(productReviews);

  const totalReviews = reviews.length;

  const ratingCounts = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: reviews.filter((review) => review.rating === rating).length,
  }));

  const calculatedAverage =
    totalReviews > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews
      : 0;

  const averageRating =
    totalReviews > 0 ? calculatedAverage : product.ratingsAverage || 0;

  const reviewFields: any = [
    {
      name: "review",
      type: "input",
      label: "Write your review",
      placeholder: "Share your thoughts about this product...",
    },
  ];

  const handleFormSubmit: any = async (data: {
    review: string;
    rating: number;
  }) => {
    const payload = {
      ...data,
      rating: selectedRating,
    };

    const response = await addProductReviewAction(payload, product._id);
    if (!response.ok) return notify.error(response.error.data.errors.msg);

    notify.success("Review added successfully!");

    const res = await getProductReviewsAction(product._id);
    if (res.ok) setReviews(res.data.data);

    setShowReviewForm(false);
  };

  return (
    <section className="mt-6 sm:mt-10 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <Tabs defaultValue="details" className="w-full">
        {/* Tabs List */}
        <TabsList className="flex h-auto w-full justify-start rounded-none border-b border-slate-200 bg-slate-50/50 p-0">
          <TabsTrigger
            value="details"
            className="group flex items-center gap-2 rounded-lg border-transparent px-6 py-4 text-sm font-medium text-slate-600 transition-all data-[state=active]:border-main-color data-[state=active]:bg-emerald-50/60 data-[state=active]:text-main-color cursor-pointer"
          >
            <FaBox className="size-4 text-slate-500 transition-colors" />
            <span>Product Details</span>
          </TabsTrigger>

          <TabsTrigger
            value="reviews"
            className="group flex items-center gap-2 rounded-lg border-transparent px-6 py-4 text-sm font-medium text-slate-600 transition-all data-[state=active]:border-main-color data-[state=active]:bg-emerald-50/60 data-[state=active]:text-main-color cursor-pointer"
          >
            <FaStar className="size-4 text-slate-500 transition-colors group-data-[state=active]:text-emerald-600" />
            <span>Reviews ({totalReviews})</span>
          </TabsTrigger>

          <TabsTrigger
            value="shipping"
            className="group flex items-center gap-2 rounded-lg border-transparent px-6 py-4 text-sm font-medium text-slate-600 transition-all data-[state=active]:border-main-color data-[state=active]:bg-emerald-50/60 data-[state=active]:text-main-color cursor-pointer"
          >
            <FaTruck className="size-4 text-slate-500 transition-colors group-data-[state=active]:text-emerald-600" />
            <span>Shipping & Returns</span>
          </TabsTrigger>
        </TabsList>

        {/* Product Details */}
        <TabsContent value="details" className="m-0 p-4 sm:p-6 md:p-8">
          <div>
            <h2 className="mb-2 text-base sm:text-lg font-bold text-slate-900">
              About this Product
            </h2>
            <p className="mb-6 whitespace-pre-line text-xs sm:text-sm leading-relaxed text-slate-600">
              {product.description}
            </p>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-slate-50/70 p-4 sm:p-5">
                <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-bold text-slate-900">
                  Product Information
                </h3>
                <div className="space-y-2.5 sm:space-y-3">
                  <InfoRow label="Category" value={product.category.name} />
                  <InfoRow
                    label="Subcategory"
                    value={product.subcategory?.[0]?.name || "N/A"}
                  />
                  <InfoRow label="Brand" value={product.brand.name} />
                  <InfoRow label="Items Sold" value={`${product.sold}+ sold`} />
                </div>
              </div>

              <div className="rounded-lg bg-slate-50/70 p-4 sm:p-5">
                <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-bold text-slate-900">
                  Key Features
                </h3>
                <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-700">
                  <FeatureRow text="Premium Quality Product" />
                  <FeatureRow text="100% Authentic Guarantee" />
                  <FeatureRow text="Fast & Secure Packaging" />
                  <FeatureRow text="Quality Tested" />
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Product Reviews */}
        <TabsContent value="reviews" className="m-0 p-4 sm:p-6 md:p-8">
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-[160px_1fr]">
            <div className="flex flex-col items-center justify-center md:justify-start text-center pt-0 md:pt-2">
              <span className="text-5xl sm:text-6xl font-bold tracking-tight text-slate-900">
                {Math.round(averageRating)}
              </span>

              <div className="my-2 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`size-3.5 sm:size-4 ${
                      star <= Math.round(averageRating)
                        ? "text-amber-400"
                        : "text-slate-200"
                    }`}
                  />
                ))}
              </div>

              <p className="text-xs text-slate-500">
                Based on {totalReviews} reviews
              </p>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              {ratingCounts.map(({ rating, count }) => {
                const percentage =
                  totalReviews > 0 ? (count / totalReviews) * 100 : 0;

                return (
                  <div
                    key={rating}
                    className="grid grid-cols-[40px_1fr_35px] sm:grid-cols-[45px_1fr_40px] items-center gap-2 sm:gap-4"
                  >
                    <span className="text-xs font-medium text-slate-600">
                      {rating} star
                    </span>

                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-amber-400 transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>

                    <span className="text-right text-xs font-medium text-slate-500">
                      {Math.round(percentage)}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="my-6 sm:my-8 border-t border-slate-100" />

          {/* Form / Reviews Header */}
          <div className="mb-4 sm:mb-6 flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-sm sm:text-base font-bold text-slate-900">
              Customer Reviews
            </h3>
            <button
              type="button"
              onClick={() => setShowReviewForm((prev) => !prev)}
              className="text-xs sm:text-sm font-semibold text-emerald-600 transition hover:text-main-color hover:underline cursor-pointer flex items-center gap-1.5"
            >
              {showReviewForm ? (
                <>
                  <FaXmark className="size-3.5" />
                  <span>Cancel</span>
                </>
              ) : (
                "Write a Review"
              )}
            </button>
          </div>

          {/* Write Review Form Collapsible */}
          {showReviewForm && (
            <div className="mb-8 rounded-xl border border-slate-200 bg-slate-50/50 p-4 sm:p-6 transition-all animate-in fade-in slide-in-from-top-2 space-y-4">
              {/* Review Form */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700">
                  Your Rating
                </label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="p-0.5 focus:outline-none transition-transform active:scale-95 cursor-pointer"
                      onClick={() => setSelectedRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                    >
                      <FaStar
                        className={`size-5 transition-colors ${
                          star <= (hoverRating || selectedRating)
                            ? "text-amber-400"
                            : "text-slate-200"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <AppForm
                fields={reviewFields}
                components={{ input: AppTextarea }}
                onSubmit={handleFormSubmit}
                buttonText="Submit Review"
                formClassName="space-y-4"
                layoutClassName="space-y-4"
              />
            </div>
          )}

          {/* Empty / Review List Section */}
          {reviews.length > 0 ? (
            <div className="space-y-4 sm:space-y-6 max-h-100 overflow-y-auto px-2 sm:pr-4 rounded-lg scrollbar-custom">
              {reviews.map((review) => (
                <ReviewCard key={review._id} review={review} />
              ))}
            </div>
          ) : (
            !showReviewForm && (
              <div className="flex flex-col items-center justify-center py-6 text-center">
                <FaStar className="mb-3 size-8 text-slate-300" />
                <p className="text-xs text-slate-500">
                  Customer reviews will be displayed here.
                </p>
                <button
                  type="button"
                  onClick={() => setShowReviewForm(true)}
                  className="mt-4 text-xs font-semibold text-emerald-600 transition hover:text-main-color cursor-pointer hover:underline"
                >
                  Write a Review
                </button>
              </div>
            )
          )}
        </TabsContent>

        {/* Shipping & Returns */}
        <TabsContent value="shipping" className="m-0 p-4 sm:p-6 md:p-8">
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-emerald-50/50 p-4 sm:p-6">
              <div className="mb-3 sm:mb-4 flex items-center gap-3">
                <div className="flex size-8 sm:size-10 items-center justify-center rounded-full bg-main-color text-white shrink-0">
                  <FaTruck className="size-4 sm:size-5" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                  Shipping Information
                </h3>
              </div>
              <ul className="space-y-2 sm:space-y-2.5 text-xs text-slate-700">
                <ShippingCheckItem text="Free shipping on orders over $50" />
                <ShippingCheckItem text="Standard delivery: 3-5 business days" />
                <ShippingCheckItem text="Express delivery available (1-2 business days)" />
                <ShippingCheckItem text="Track your order in real-time" />
              </ul>
            </div>

            <div className="rounded-xl bg-emerald-50/50 p-4 sm:p-6">
              <div className="mb-3 sm:mb-4 flex items-center gap-3">
                <div className="flex size-8 sm:size-10 items-center justify-center rounded-full bg-main-color text-white shrink-0">
                  <FaRotateLeft className="size-4 sm:size-5" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                  Returns & Refunds
                </h3>
              </div>
              <ul className="space-y-2 sm:space-y-2.5 text-xs text-slate-700">
                <ShippingCheckItem text="30-day hassle-free returns" />
                <ShippingCheckItem text="Full refund or exchange available" />
                <ShippingCheckItem text="Free return shipping on defective items" />
                <ShippingCheckItem text="Easy online return process" />
              </ul>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 rounded-xl bg-slate-50 p-4 sm:p-5">
            <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-full bg-slate-200/70 text-slate-700">
              <FaShieldHalved className="size-4 sm:size-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">
                Buyer Protection Guarantee
              </h4>
              <p className="mt-0.5 sm:mt-1 text-xs text-slate-500 leading-relaxed">
                Get a full refund if your order doesn't arrive or isn't as
                described. We ensure your shopping experience is safe and
                secure.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-custom::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 8px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 8px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-xs gap-2">
      <span className="text-slate-400 shrink-0">{label}</span>
      <span className="font-semibold text-slate-800 text-right truncate">
        {value}
      </span>
    </div>
  );
}

function FeatureRow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <FaCheck className="size-3 text-emerald-600 shrink-0" />
      <span>{text}</span>
    </div>
  );
}

function ShippingCheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2">
      <FaCheck className="size-3 shrink-0 text-emerald-600" />
      <span>{text}</span>
    </li>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const date = new Date(review.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article className="border-b border-slate-100 pb-4 sm:pb-5 last:border-0 last:pb-0">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="text-xs font-bold text-slate-900">
            {review.user.name}
          </h4>
          <div className="mt-1 flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`size-3 ${
                  star <= review.rating ? "text-amber-400" : "text-slate-200"
                }`}
              />
            ))}
          </div>
        </div>
        <span className="text-xs text-slate-400 shrink-0">{date}</span>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-slate-600">
        {review.review}
      </p>
    </article>
  );
}
