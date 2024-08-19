import Link from "next/link";
import { SpaceIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center dark:bg-gray-900">
      <div className="max-w-md px-4 text-center">
        <div className="animate-bounce">
          <SpaceIcon className="mx-auto h-32 w-32 text-gray-500 dark:text-gray-400" />
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
          Oops, looks like you took a wrong turn!
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          We seem to have lost this page in the void. Don&apos;t worry,
          we&apos;ll send out a search party to find it.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-900"
            prefetch={false}
          >
            Take me back home
          </Link>
        </div>
      </div>
    </div>
  );
}
