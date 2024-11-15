import TryThisItem from "./TryThisItem";

export default function TryThis() {
  return (
    <div className="xl:max-w-7xl xl:mx-auto my-20 px-5 md:px-0">
      <section className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold">
          Try This Delicous Recipe to make your day
        </h2>
        <p className="text-justify font-semibold text-gray-500 mt-3 md:mt-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure pariatur
          repellat reiciendis aliquam aspernatur saepe in illum blanditiis non
          veniam?
        </p>
      </section>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
        <TryThisItem />
        <TryThisItem />
        <TryThisItem />
        <TryThisItem />
        <TryThisItem />
        <TryThisItem />
        <TryThisItem />
        <TryThisItem />
      </section>
    </div>
  );
}
