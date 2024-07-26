"use client";

import headerNavLinks from "@/data/headerNavLinks";
import Image from "next/image";
import Link from "./Link";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

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
        <p className="ml-3 flex items-center text-xl font-medium text-[#5DC60B] dark:text-gray-100">
          Heli
          <span className="text-xl font-medium text-gray-900 dark:text-gray-100">
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
        <MobileNav />
      </nav>
    </header>
  );
};

export default Header;
