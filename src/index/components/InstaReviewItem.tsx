import { BiHeart } from "react-icons/bi";
import { BsSend } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa6";
import { FiBookmark } from "react-icons/fi";
import { GoKebabHorizontal } from "react-icons/go";

export default function InstaReviewItem() {
  return (
    <div className="bg-white overflow-hidden w-72 lg:w-52 xl:w-60 mx-auto">
      <section className="flex justify-between px-2 items-center py-1">
        <div className="flex gap-x-5 items-center">
          <img
            className="w-7 h-7 rounded-full"
            src="https://www.thespruceeats.com/thmb/CWfeSCngoL5zOxlR2tsBWETtZ3U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/traditional-chicken-wings-912937-hero-01-6c1a003373a54538a732abc0005145d8.jpg"
          />
          <div>
            <h4 className="text-sm font-bold">Foodie</h4>
            <p className="text-xs font-semibold text-gray-500">Tehran , Iran</p>
          </div>
        </div>
        <GoKebabHorizontal />
      </section>
      <section className="relative">
        <img
          className="h-60 object-cover w-full"
          src="https://www.thespruceeats.com/thmb/CWfeSCngoL5zOxlR2tsBWETtZ3U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/traditional-chicken-wings-912937-hero-01-6c1a003373a54538a732abc0005145d8.jpg"
        />
        <GoKebabHorizontal className="absolute bottom-0 right-[50%] translate-x-1/2 text-gray-100 w-8 h-8" />
        <p className="absolute top-0 right-0 bg-black/70 rounded-full text-white text-xs px-2 pb-1 pt-[.2rem] m-2">
          1/9
        </p>
      </section>
      <section className="flex justify-between px-2 items-center py-2">
        <div className="grid grid-cols-3 gap-2 items-center">
          <BiHeart className="w-5 h-5" />
          <FaRegComment className="w-4 h-4" />
          <BsSend className="w-4 h-4" />
        </div>

        <FiBookmark className="h-5 w-5" />
      </section>
      <section className="flex gap-x-2 items-center px-2">
        <img
          className="w-3 h-3 rounded-full"
          src="https://www.thespruceeats.com/thmb/CWfeSCngoL5zOxlR2tsBWETtZ3U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/traditional-chicken-wings-912937-hero-01-6c1a003373a54538a732abc0005145d8.jpg"
        />
        <p className="text-xs">
          Liked by <span className="font-bold">alibaba </span>and
          <span className="font-bold"> amazon</span>
        </p>
      </section>
      <section className="pb-3 pt-1 px-2">
        <p className="text-xs font-semibold text-justify">
          <span className="font-bold">Foodie .</span> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ex, qui?
        </p>
      </section>
      <p className="text-xs text-gray-500 font-semibold px-2 pb-2">
        september 19
      </p>
    </div>
  );
}
