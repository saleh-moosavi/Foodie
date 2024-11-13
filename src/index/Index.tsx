import BannerOne from "./components/BannerOne";
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import InstaReviews from "./components/InstaReviews";
import Recipes from "./components/Recipes";

export default function Index() {
  return (
    <div>
      <Hero />
      <Categories />
      <Recipes />
      <BannerOne />
      <InstaReviews />
    </div>
  );
}
