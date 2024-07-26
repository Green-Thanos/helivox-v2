import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#f5f5f5] py-20 md:py-32">
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 md:flex-row md:px-6">
        <div className="max-w-md space-y-4">
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Empowering Students, Transforming Lives
          </h1>
          <p className="text-lg text-muted-foreground">
            Founded in 2022, Helivox is a PVSA-certified and 501(c) registered
            nonprofit organization that provides educational resources for
            students, by students.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Get Involved
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Donate
            </Link>
          </div>
        </div>
        <Image
          src="/inspiration.svg"
          width={600}
          height={400}
          alt="Hero Image"
          className="rounded-xl object-cover"
        />
      </div>
    </section>
  );
}
