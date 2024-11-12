import CategoriesItem from "./CategoriesItem";

export default function Categories() {
  return (
    <div className="flex flex-col xl:max-w-7xl xl:mx-auto my-20">
      <article className="flex justify-between">
        <h2 className="text-4xl font-bold">Categories</h2>
        <button className="bg-sky-100 px-6 py-3 rounded-2xl font-semibold">
          View All Categories
        </button>
      </article>
      <article className="grid grid-cols-6 gap-10 justify-self-center items-center h-72">
        <CategoriesItem
          img="https://images.rawpixel.com/image_trimmed_png_150/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"
          title="Lunch"
          color="#fee2e2 "
        />
        <CategoriesItem
          img="https://images.rawpixel.com/image_trimmed_png_150/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xMV9jb2xvcmVkX3BlbmNpbF9kaWdpdGFsX2lsbHVzdHJhdGlvbl9vZl9hX2JlZV8yNjg5NjQ0Ny00MTc0LTRlMDItOTQzNi1mMThiMTIxZjJmYjQucG5n.png"
          title="Meat"
          color="#f3e8ff"
        />
        <CategoriesItem
          img="https://images.rawpixel.com/image_trimmed_png_150/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA2L3B4MTI5NDkwNi1pbWFnZS1qb2I5MTkucG5n.png"
          title="Chocolate"
          color="#fef3c7"
        />
        <CategoriesItem
          img="https://images.rawpixel.com/image_trimmed_png_150/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczc2LW1vbmlrYS1ncmFia293c2thLXdpbnRlci1icmVha2Zhc3QtNy5wbmc.png"
          title="Breakfast"
          color="#fef9c3"
        />
        <CategoriesItem
          img="https://images.rawpixel.com/image_trimmed_png_150/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsb2ZmaWNlNV9waG90b19vZl9hX3N3ZWV0X2N1cGNha2VfaXNvbGF0ZWRfb25fd2hpdGVfYmFja185MTgyMjc4MS0wZjc5LTQ1ZmEtODk3ZS1hNzdiZDk2ZjMyMDhfMS5wbmc.png"
          title="Dessert"
          color="#f3f4f6"
        />
        <CategoriesItem
          img="https://images.rawpixel.com/image_trimmed_png_150/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczk5LW1uLXF1aW5vYS1ib3dsLTEucG5n.png"
          title="Vegan"
          color="#cffafe"
        />
      </article>
    </div>
  );
}
