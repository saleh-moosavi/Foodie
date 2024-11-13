export default function BannerOne() {
  return (
    <div className="grid grid-cols-2 xl:max-w-7xl xl:mx-auto my-20 overflow-hidden bg-gradient-to-l from-sky-100 rounded-[2.5rem]">
      <article className="p-10 flex flex-col justify-center">
        <h2 className="text-4xl font-bold leading-snug my-5">
          Spicy Delicious Chicken Wings With More
        </h2>
        <p className="text-gray-500 text-justify font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          error a totam, magni impedit soluta tempora temporibus tempore
          molestias.
        </p>
        <button className="px-8 py-2 font-semibold bg-black text-white rounded-lg mt-10 w-fit">
          Learn More
        </button>
      </article>
      <img
        className="w-full h-full object-cover rounded-[2.5rem]"
        src="https://www.thespruceeats.com/thmb/CWfeSCngoL5zOxlR2tsBWETtZ3U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/traditional-chicken-wings-912937-hero-01-6c1a003373a54538a732abc0005145d8.jpg"
      />
    </div>
  );
}
