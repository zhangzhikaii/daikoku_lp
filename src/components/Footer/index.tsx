import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Brand */}
        <div className="flex items-center pl-20">
          <Link href="/">
            <Image
              src={Logo}
              alt="Description"
              width={150}
              height={150}
              className="hover:opacity-70 transition"
            />
          </Link>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/commercial-disclosure"
                className="hover:text-white transition"
              >
                Commercial Disclosure
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

      <div className="border-t border-gray-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} Car Life Japan. All rights reserved.
      </div>
    </footer>
  );
}
