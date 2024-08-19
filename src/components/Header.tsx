"use client";

import headerNavLinks from "@/data/headerNavLinks";
import { headerIconLinks } from "@/data/headerNavLinks";
import Image from "next/image";
import Link from "./Link";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import { Instagram, Youtube } from "lucide-react";

function CodeIcon({ ...props }) {
  return (
    <div className="relative h-8 w-8 object-contain">
      <Image
        src="/helivox.png"
        alt="Icon"
        fill={true}
        style={{ objectFit: "contain" }}
        {...props}
      />
    </div>
  );
}

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between px-8 py-6">
      <Link href="/" className="flex items-center" prefetch={false}>
        <CodeIcon className="h-8 w-8" />
        <p className="ml-3 flex items-center text-2xl font-medium text-[#5DC60B] dark:text-gray-100">
          Heli
          <span className="font-medium text-gray-900 dark:text-gray-100">
            vox
          </span>
        </p>
      </Link>

      <nav className="flex items-center space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== "/")
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`hidden text-lg font-medium text-gray-900 transition-colors hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300 sm:block ${
                pathname === link.href ? "underline" : ""
              }`}
            >
              {link.title}
            </Link>
          ))}
        <Link href={headerIconLinks.instagram} aria-label="Instagram">
          <Instagram className="h-6 w-6 text-gray-900 transition-colors hover:text-[#E1306C] dark:text-gray-100" />
        </Link>
        <Link href={headerIconLinks.youtube} aria-label="YouTube">
          <Youtube className="h-6 w-6 text-gray-900 transition-colors hover:text-[#FF0000] dark:text-gray-100" />
        </Link>
        <MobileNav />
      </nav>
    </header>
  );
};

export default Header;
