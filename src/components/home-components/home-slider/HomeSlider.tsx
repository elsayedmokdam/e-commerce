import slider1 from "@/images/slider-1.png";
import Link from "next/link";
import Slider from "../../shared/slider/Slider";

const slides = [
  {
    image: slider1.src,
    title: "Fresh Products Delivered",
    subtitle: "to your Door",
    button1: "Shop Now",
    button2: "View Deals",
    description: "Get 20% off your first order",
  },
  {
    image: slider1.src,
    title: "Quality Groceries",
    subtitle: "that make life easy",
    button1: "Browse Collection",
    button2: "Daily Offers",
    description: "Free shipping on orders over $50",
  },
  {
    image: slider1.src,
    title: "Freshness You can Trust",
    subtitle: "Every day, every delivery",
    button1: "Explore Now",
    button2: "View Menu",
    description: "Same-day delivery available",
  },
];

export default function HomeSlider() {
  return (
    <div className="relative">
      <Slider
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
        pagination={{
          clickable: true,
          type: "bullets",
          bulletActiveClass: "bg-white! opacity-100! w-8! rounded-full!",
        }}
        className="h-100"
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-full w-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-green-500/65" />
            <div className="relative z-10 flex h-full flex-col justify-center gap-5 px-6 md:px-20 lg:px-32">
              <span className="w-fit rounded-full border border-white/50 px-4 py-1 text-sm font-medium text-white">
                {slide.description}
              </span>
              <h1 className="text-4xl font-extrabold text-white md:text-5xl">
                {slide.title}
                <br />
                <span>{slide.subtitle}</span>
              </h1>
              <div className="flex gap-4">
                <Link
                  href="/products"
                  className="rounded-lg bg-white px-3 md:px-6 py-3 text-md md:text-lg font-semibold text-green-400 shadow-lg hover:bg-white/80 hover:opacity-90 hover:scale-95 transition duration-300"
                >
                  {slide.button1}
                </Link>
                <Link
                  href="/cart"
                  className="rounded-lg border border-white px-3 md:px-6 py-3 text-md md:text-lg font-semibold text-white transition hover:bg-white/10 hover:scale-95"
                >
                  {slide.button2}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
