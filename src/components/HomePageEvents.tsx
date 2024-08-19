import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Calendar, MapPin, MoveRight } from "lucide-react";

export default function HomePageEvents() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Upcoming Events
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Stay up-to-date with our upcoming events and workshops.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>College Application Workshop</CardTitle>
              <CardDescription>
                Join us for an interactive workshop on navigating the college
                application process.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Calendar className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">June 15, 2023</p>
                  <p className="text-sm text-muted-foreground">
                    6:00 PM - 8:00 PM
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <MapPin className="h-6 w-6 text-primary" />
                <p className="text-muted-foreground">
                  123 Main Street, Anytown USA
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="sm">RSVP</Button>
            </CardFooter>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Scholarship Application Workshop</CardTitle>
              <CardDescription>
                Learn strategies to maximize your chances of securing
                scholarships.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Calendar className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">July 20, 2023</p>
                  <p className="text-sm text-muted-foreground">
                    6:00 PM - 8:00 PM
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <MapPin className="h-6 w-6 text-primary" />
                <p className="text-muted-foreground">
                  456 Oak Avenue, Anytown USA
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="sm">RSVP</Button>
            </CardFooter>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Financial Aid Information Session</CardTitle>
              <CardDescription>
                Get the latest updates on financial aid and learn how to
                maximize your opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Calendar className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">August 5, 2023</p>
                  <p className="text-sm text-muted-foreground">
                    6:00 PM - 8:00 PM
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <MapPin className="h-6 w-6 text-primary" />
                <p className="text-muted-foreground">
                  789 Elm Street, Anytown USA
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="sm">RSVP</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/events"
            className="inline-flex items-center text-primary transition-all hover:pr-2 hover:underline"
            prefetch={false}
          >
            View More Events{" "}
            <MoveRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
