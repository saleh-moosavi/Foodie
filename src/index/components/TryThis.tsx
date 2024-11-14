import TryThisItem from "./TryThisItem";

export default function TryThis() {
  return (
    <div className="xl:max-w-7xl xl:mx-auto my-20">
      <section className="flex justify-between items-center">
        <h2 className="text-4xl font-bold">
          Try This Delicous Recipe to make your day
        </h2>
        <p className="text-justify font-semibold text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure pariatur
          repellat reiciendis aliquam aspernatur saepe in illum blanditiis non
          veniam?
        </p>
      </section>
      <section className="grid grid-cols-4 gap-10 mt-10">
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
