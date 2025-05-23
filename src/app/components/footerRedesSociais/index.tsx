// Lib NextJS
import Link from "next/link";

// Lib - React Icons
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function RedesSociais() {
  return (
    <section className="py-10">
      <h1 className="text-center">Acompanhe</h1>
      <ul className="flex flex-row justify-center py-10 gap-20 text-2xl">
        {/* icone Instagram */}
        <li>
          <Link
            href="https://www.instagram.com/cursoemvideo/"
            target="_blank"
            rel="noopener noreferrer external"
            className="hover:text-blue-700"
          >
            <FaInstagram />
          </Link>
        </li>
        {/* Icone Facebook */}
        <li>
          <Link
            href="https://facebook.com/cursosemvideo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaFacebook />
          </Link>
        </li>
        {/* Icone Twitter */}
        <li>
          <Link
            href="https://twitter.com/guanabara"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaTwitter />
          </Link>
        </li>
        {/* Icone Youtube */}
        <li>
          <Link
            href="https://youtube.com/cursoemvideo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaYoutube />
          </Link>
        </li>
      </ul>
    </section>
  );
}
