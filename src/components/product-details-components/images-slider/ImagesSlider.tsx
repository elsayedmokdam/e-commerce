import Slider from "@/components/shared/slider/Slider";

export default function ImagesSlider({ images }: { images: string[] }) {
  return (
    <>
      <div className="w-full">
        {/* Main Slider */}
        <Slider
          imageList={images}
          bulletImages={images}
          autoplay={false}
          navigation={false}
          className="rounded-xl overflow-hidden"
          imageClassName="w-full h-[420px] object-contain rounded-xl"
          renderBullet={(index, className) =>
            `<img src="${images[index]}" class="${className} w-17! h-17! object-cover rounded-md! cursor-pointer border border-gray-200" />`
          }
        />

        <div className="custom-pagination mt-4 flex gap-2 overflow-x-auto justify-center"></div>
      </div>
    </>
  );
}
