import Link from "next/link";
import Logo from "../Logo";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Brand */}
        <div className="flex justify-center items-center">
          <Logo size={150} />
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-start text-white">
          <h3 className="text-sm font-semibold uppercase tracking-wider">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2 text-center md:text-left">
            <li>
              <Link href="/#top" className="hover:underline transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/commerce-disclosure"
                className="hover:underline transition"
              >
                Commerce Disclosure
              </Link>
            </li>
          </ul>
        </div>

        {/* Social
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
            Follow us
          </h3>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="hover:text-white transition">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition">
              GitHub
            </a>
            <a href="#" className="hover:text-white transition">
              LinkedIn
            </a>
          </div>
        </div> */}
      </div>

      <div className="border-t border-gray-800 text-center text-white py-4 text-sm">
        © {new Date().getFullYear()} Car Life Japan. All rights reserved.
      </div>
    </footer>
  );
}
