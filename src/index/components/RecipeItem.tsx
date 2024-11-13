import { CgSandClock } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";

export default function RecipeItem() {
  return (
    <div className="bg-gradient-to-t from-sky-100 rounded-3xl overflow-hidden p-3">
      <div className="relative">
        <img
          className="rounded-3xl"
          src="https://www.thespruceeats.com/thmb/CWfeSCngoL5zOxlR2tsBWETtZ3U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/traditional-chicken-wings-912937-hero-01-6c1a003373a54538a732abc0005145d8.jpg"
        />
        <FaHeart className="absolute top-2 right-2 bg-white rounded-full w-10 h-10 p-3 fill-gray-300 hover:fill-rose-500 cursor-pointer transition-all divide-blue-400" />
      </div>
      <div className="mt-7 mb-2">
        <h3 className="font-bold text-lg line-clamp-2 text-justify">
          Big And Juicy meat with some of more
        </h3>
        <div className="flex gap-x-5 mt-5 font-semibold">
          <p className="flex gap-x-2 items-center text-gray-500">
            <CgSandClock className="w-5 h-5 text-black" />
            30 Minutes
          </p>
          <p className="flex gap-x-2 items-center text-gray-500">
            <PiForkKnifeFill className="w-5 h-5 text-black" />
            Chicken
          </p>
        </div>
      </div>
    </div>
  );
}
