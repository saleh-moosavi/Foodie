import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center border-t-2 border-gray-300 xl:max-w-7xl xl:mx-auto py-5">
      <section className="flex w-full justify-between items-center">
        <h2 className="text-lg font-bold">Foodie</h2>
        <div className="flex gap-x-5 *:w-6 *:h-6">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </section>
      <h3 className="text-gray-500 font-semibold">2024 All Rights Reserved</h3>
    </div>
  );
}
