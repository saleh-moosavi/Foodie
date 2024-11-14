import { CgSandClock } from "react-icons/cg";
import { FaCirclePlay } from "react-icons/fa6";
import { IoReceiptSharp } from "react-icons/io5";
import { PiForkKnifeFill } from "react-icons/pi";

export default function Hero() {
  return (
    <div className="px-5 xl:px-52 w-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:max-w-7xl xl:mx-auto mt-10 bg-sky-100 rounded-[2.5rem] overflow-hidden">
        <article className="p-5 md:p-10 order-2 md:order-1">
          <button className="bg-white px-4 py-2 rounded-full flex gap-x-2 items-center font-semibold">
            <IoReceiptSharp className="fill-orange-900" />
            Hot Recipes
          </button>
          <h2 className="text-xl md:text-3xl xl:text-5xl font-bold leading-snug my-3">
            Spicy Delicious Chicken Wings
          </h2>
          <p className="text-sm md:text-base text-gray-500 text-justify font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            error a totam, magni impedit soluta tempora temporibus tempore
            molestias.
          </p>
          <div className="flex gap-x-5 my-5">
            <p className="flex gap-x-2 items-center bg-black/10 rounded-full px-3 md:px-4 py-2 font-semibold text-xs md:text-base">
              <CgSandClock className="w-3 md:w-5 h-3 md:h-5" />
              30 Minutes
            </p>
            <p className="flex gap-x-2 items-center bg-black/10 rounded-full px-3 md:px-4 py-2 font-semibold text-xs md:text-base">
              <PiForkKnifeFill className="w-3 md:w-5 h-3 md:h-5" />
              Chicken
            </p>
          </div>
          <div className="flex justify-between items-center md:mt-20">
            <section className="flex gap-x-5 items-center">
              <img
                className="w-10 lg:w-14 h-10 lg:h-14 rounded-full"
                src="data:image/jpeg;base64,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"
              />
              <div>
                <h3 className="text-xs font-semibold md:font-bold lg:text-lg">
                  John Smith
                </h3>
                <p className="text-gray-700 text-xs font-semibold md:font-bold lg:text-base">
                  15 March 2022
                </p>
              </div>
            </section>
            <button className="bg-black px-4 py-2 lg:px-8 lg:py-4 text-white rounded-xl text-xs md:text-base font-semibold flex items-center gap-x-5">
              <FaCirclePlay className="w-5 h-5" />
              View Recipes
            </button>
          </div>
        </article>
        <img
          className="w-full h-full object-cover order-1 md:order-2"
          src="https://www.thespruceeats.com/thmb/CWfeSCngoL5zOxlR2tsBWETtZ3U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/traditional-chicken-wings-912937-hero-01-6c1a003373a54538a732abc0005145d8.jpg"
        />
      </div>
    </div>
  );
}
