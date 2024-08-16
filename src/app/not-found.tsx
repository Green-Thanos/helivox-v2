import Link from "@/components/Link";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pb-8 pt-6 md:space-y-5">
        <h1 className="md:leading-14 text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Sorry we couldn&apos;t find this page.
        </p>
        <Link
          href="/"
          className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500"
        >
          Back to homepage
        </Link>
      </div>
    </div>
    <Image
        src={'https://media.discordapp.net/attachments/1019031964453445772/1197716750553333851/kdafnlkdfmlkar.gif?ex=66a4f865&is=66a3a6e5&hm=580e7ae1f3d910df5e3c1e56a5e65bb017401798f73678c836b5a0894bdc05f6&='}
        layout={'responsive'}
        height={175}Q
        width={175}
        alt={`.`}
        unoptimized={true}
      />
    </>
  );
}
