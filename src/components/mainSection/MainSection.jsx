import Image from "next/image";
import BannerImg from "/public/images/png/banner-img.png";
import ArrowRight from "/public/images/svg/arrow-right.svg";

export default function MainSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 mt-32">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-20">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5vw leading-none font-bold mb-4">
            BROWSE HUNDREDS OF
            <span className="text-primary"> ANIMALS</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Explore a diverse selection from domestic to exotic
            <br />
            animals, all from trusted sources.
          </p>
          <button className="bg-primary font-semibold text-2vw text-white px-6 py-3 custom-button hover:bg-emerald-600 transition-colors">
            BROWSE ANIMALS
          </button>
        </div>
        <div className="md:w-1/2 h-full relative">
          <Image
            src={BannerImg}
            alt="Woman with pets"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between relative main-container2 mt-44">
        <div className="md:w-1/2 mb-8 md:mb-0 w-full h-full main-img-container2">
          <div className="p-8 absolute bottom-20 man-img-cont -z-10">
          </div>
          <button className="bg-primary font-semibold z-10 text-2vw text-white px-12 py-24 h-32 w-72 custom-button leading-none hover:bg-emerald-600 transition-colors flex justify-between items-center text-start absolute bottom-28 right-64">
            BROWSE ANIMALS
            <Image src={ArrowRight} alt="arrow right" />
          </button>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-4vw font-bold mb-4 mt-6">
            FROM <span className="text-primary">VERIFIED</span>
            <br />
            BREEDERS
          </h2>
          <p className="text-gray-600 mb-6">
            Each listing represents breeders who meet rigorous
            <br />
            standards for quality and care, giving you peace of
            <br />
            mind and confidence in your purchase.
          </p>
        </div>
      </div>
    </section>
  );
}
