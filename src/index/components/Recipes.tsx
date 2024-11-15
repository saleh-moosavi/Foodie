import RecipeItem from "./RecipeItem";

export default function Recipes() {
  return (
    <div className="flex flex-col items-center xl:max-w-7xl xl:mx-auto mx-5">
      <article className="max-w-[35rem] text-center">
        <h2 className="text-xl md:text-4xl font-bold">Simple And Tasty Recipes</h2>
        <p className="text-xs md:text-base text-gray-500 font-semibold mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          eius optio minima quia maxime aliquid in veniam, cum vitae.
        </p>
      </article>
      <article className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 w-full">
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
      </article>
    </div>
  );
}
