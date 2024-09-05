import Link from "next/link";
import Image from "next/image";

import HomePageTeam from "@/components/HomePageTeam";
// import HomePageBlog from "@/components/HomePageBlog";
import Hero from "@/components/Hero";
import FAQ from "@/components/faq";
import Newsletter from "@/components/newsletterSignup";
import HomePageEvents from "@/components/HomePageEvents";
import HomePageCards from "@/components/HomePageCards";
import Testimonials from "@/components/Testimonials";

export default function Component() {
  return (
    <div className="mx-auto flex min-h-[100dvh] flex-col">
      <Hero />
      <Testimonials />
      <section className="bg-muted py-20 md:py-32">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              About Helivox
            </h2>
            <p className="text-lg text-muted-foreground">
              Some of the greatest challenges students face are barriers to
              resources that would otherwise expand their academic journey.
              Helivox aims to foster educational equity for all students through
              various projects and resource catalogs within our communities, to
              ensure equal opportunities in education.
            </p>
            <p className="text-lg text-muted-foreground">
              Our mission is to bridge the opportunity gap and ensure that every
              student, regardless of their background, has the tools and
              guidance they need to succeed.
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
          <Image
            src="/teamcollab.svg"
            width={600}
            height={400}
            alt="About Image"
            className="rounded-xl object-cover"
          />
        </div>
      </section>
      <HomePageCards />
      <HomePageTeam />
      <HomePageEvents />
      {/* <HomePageBlog /> */}
      <FAQ />
      <Newsletter />
    </div>
  );
}
