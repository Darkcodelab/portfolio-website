import Image from "next/image";
import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Header() {
  return (
    <header className="bg-primarybg border-b border-gray-800 px-4 py-6">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={40}
            height={40}
            alt="Deepan Chakravarthi"
            className="rounded-full"
          />
        </Link>

        <ul className="flex items-center gap-8 text-xl text-primaryfg">
          <li>
            <a href="mailto:contact@darkcodelab.in">
              <MdEmail />
            </a>
          </li>
          <li>
            <a href="https://www.github.com/Darkcodelab" target="_blank">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/d4rkcod3r/" target="_blank">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
