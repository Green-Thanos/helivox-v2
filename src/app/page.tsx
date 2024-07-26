import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User, DollarSign, GraduationCap, DollarSignIcon, GraduationCapIcon} from "lucide-react";
import Image from "next/image";

import { HomePageTeam } from "@/components/HomePageTeam";
import { HomePageBlog } from "@/components/HomePageBlog";

import Hero from "@/components/Hero";
import FAQ from "@/components/faq";
import Newsletter from "@/components/newsletterSignup";
import HomePageEvents from "@/components/HomePageEvents";

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Hero />
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4 rounded-xl bg-muted p-6">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/avatar1.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-muted-foreground">Student</p>
                </div>
              </div>
              <p className="text-lg">
              &quot;Helivox helped me navigate the college application process with
                confidence and ease. Their guidance was invaluable.&quot;
              </p>
            </div>
            <div className="space-y-4 rounded-xl bg-muted p-6">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Jane Doe</p>
                  <p className="text-sm text-muted-foreground">Student</p>
                </div>
              </div>
              <p className="text-lg">
              &quot;Helivox&apos;s support was instrumental in helping me secure a
                scholarship and achieve my dream of attending college.&quot;
              </p>
            </div>
            <div className="space-y-4 rounded-xl bg-muted p-6">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">John Smith</p>
                  <p className="text-sm text-muted-foreground">Student</p>
                </div>
              </div>
              <p className="text-lg">
              &quot;Helivox&apos;s comprehensive resources and personalized guidance
                made the college application process much less daunting.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
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
      <HomePageTeam />
      <section className="bg-muted py-20 md:py-32">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-6 lg:grid-cols-3">
          <div className="space-y-2 rounded-xl bg-background p-6 text-center">
            <User className="h-12 w-12 text-primary" />
            <p className="text-lg text-muted-foreground">
              Serving over 5,000 students annually
            </p>
          </div>
          <div className="space-y-2 rounded-xl bg-background p-6 text-center">
            <DollarSignIcon className="h-12 w-12 text-primary" />
            <p className="text-lg text-muted-foreground">
              $5M+ in scholarships secured for students
            </p>
          </div>
          <div className="space-y-2 rounded-xl bg-background p-6 text-center">
            <GraduationCapIcon className="h-12 w-12 text-primary" />
            <p className="text-lg text-muted-foreground">
              90% of students enroll in a 4-year university
            </p>
          </div>
        </div>
      </section>
      <HomePageEvents />
      <HomePageBlog />
      <FAQ />
      <Newsletter />
    </div>
  );
}