import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex justify-between xl:max-w-7xl xl:mx-auto py-7 font-semibold border-b-2">
      <h2>Foodie</h2>
      <ul className="flex justify-center gap-x-10 *:font-semibold">
        <li>Home</li>
        <li>Recipes</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>About Us</li>
      </ul>
      <div className="flex gap-x-5 *:w-5 *:h-5">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
      </div>
    </div>
  );
}
