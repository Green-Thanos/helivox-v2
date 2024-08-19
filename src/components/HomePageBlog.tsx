import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { MoveRight } from "lucide-react";

export default function HomePageBlog() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            From the Blog
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Stay up-to-date with the latest news, insights, and resources from
            Helivox.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Navigating the College Application Process</CardTitle>
              <CardDescription>
                Tips and strategies for students to successfully apply to their
                dream schools.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/placeholder.svg"
                width={300}
                height={200}
                alt="Blog Post 1"
                className="rounded-t-xl object-cover"
              />
            </CardContent>
            <CardFooter>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </CardFooter>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Securing Scholarships and Financial Aid</CardTitle>
              <CardDescription>
                Strategies for students to maximize their chances of receiving
                financial assistance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/placeholder.svg"
                width={300}
                height={200}
                alt="Blog Post 2"
                className="rounded-t-xl object-cover"
              />
            </CardContent>
            <CardFooter>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </CardFooter>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Overcoming Barriers to Higher Education</CardTitle>
              <CardDescription>
                Insights on the challenges faced by underserved students and how
                Helivox is making a difference.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/placeholder.svg"
                width={300}
                height={200}
                alt="Blog Post 3"
                className="rounded-t-xl object-cover"
              />
            </CardContent>
            <CardFooter>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/articles"
            className="inline-flex items-center text-primary transition-all hover:pr-2 hover:underline"
            prefetch={false}
          >
            See More{" "}
            <MoveRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
