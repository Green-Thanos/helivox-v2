import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <section className="flex h-screen w-full items-center justify-center bg-black py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl/none">
                Revolutionize Your Email Experience
              </h1>
              <p className="mx-auto max-w-[600px] text-zinc-200 dark:text-zinc-100 md:text-xl">
                Join us and take control of your inbox. Fast, secure, and
                designed for modern life.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1 border-gray-900 bg-gray-800 text-white"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button className="bg-white text-black" type="submit">
                  Join Now
                </Button>
              </form>
              <p className="text-xs text-zinc-200 dark:text-zinc-100">
                Get ready to redefine your email experience.
                <br />
                <Link
                  className="underline-offset-10 text-white underline"
                  href="#"
                  prefetch={false}
                >
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
