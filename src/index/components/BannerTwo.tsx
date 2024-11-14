export default function BannerTwo() {
  return (
    <div className="flex items-center justify-center xl:max-w-7xl xl:mx-auto my-20 overflow-hidden bg-sky-100 rounded-[2.5rem] relative">
      <article className="p-10 flex flex-col justify-center items-center">
        <h2 className="text-5xl font-bold leading-snug my-5">
          Deliciousness To Your Inbux
        </h2>
        <p className="text-gray-500 font-semibold max-w-xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          error a totam, magni impedit soluta tempora temporibus tempore
          molestias.
        </p>
        <label className="relative w-72 h-10 mt-10">
          <button className="px-4 py-2 absolute top-0 bottom-0 right-0 font-semibold bg-black text-white rounded-lg">
            Send
          </button>
          <input
            type="email"
            className="w-full h-full p-3 rounded-xl text-gray-500 font-semibold text-sm"
            placeholder="Enter Your Email ..."
          />
        </label>
      </article>
      <img
        className="absolute -bottom-5 -left-10"
        src="https://images.rawpixel.com/image_trimmed_png_150/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczk5LW1uLXF1aW5vYS1ib3dsLTEucG5n.png"
      />
      <img
        className="absolute -bottom-5 -right-10"
        src="https://images.rawpixel.com/image_trimmed_png_150/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"
      />
    </div>
  );
}
