"use client";
import Link from "next/link";
import { format, isFuture, parseISO } from "date-fns";
import { useEffect, useState } from "react";
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
import { getEvents, Event } from "@/lib/calls";

export default function HomePageEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        const fetchedEvents = await getEvents(0, 100);
        console.log(fetchedEvents);
        setEvents(fetchedEvents);
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents().catch((err) => {
      console.error("Error fetching events:", err);
    });
  }, []);

  const upcomingEvents = events
    .filter((event) => isFuture(new Date(event.attributes.date)))
    .sort(
      (a, b) =>
        new Date(a.attributes.date).getTime() -
        new Date(b.attributes.date).getTime(),
    );

  if (isLoading) {
    // return (
    //   <section className="flex w-full items-center justify-center py-12 md:py-24 lg:py-32">
    //     <div className="container grid gap-4 px-4 text-center md:px-6 lg:gap-10">
    //       <div className="space-y-3">
    //         <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
    //           Meet the Team
    //         </h2>
    //         <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
    //           The people behind the magic.
    //         </p>
    //       </div>
    //       <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    //         {/* Skeleton placeholders */}
    //         {Array.from({ length: 4 }).map((_, index) => (
    //           <div key={index} className="space-y-4">
    //             <Skeleton className="h-40 w-full rounded-lg" />
    //             <Skeleton className="h-5 w-3/4 mx-auto" />
    //             <Skeleton className="h-4 w-1/2 mx-auto" />
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </section>
    // );
  }

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Upcoming Events
          </h2>
          <p className="mx-auto max-w-3xl pb-8 text-lg text-muted-foreground">
            Stay up-to-date with our upcoming events and workshops.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="h-full">
                <CardHeader>
                  <CardTitle>{event.attributes.name}</CardTitle>
                  <CardDescription>
                    {event.attributes.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <Calendar className="mr-2" />
                    <div>
                      <p>
                        {format(
                          parseISO(event.attributes.date),
                          "MMMM d, yyyy",
                        )}
                      </p>
                      <p className="text-sm text-gray-500">
                        {format(parseISO(event.attributes.date), "h:mm a")}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <MapPin className="mr-2" />
                    <p className="text-gray-500">{event.attributes.location}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href={event.attributes.rsvp ?? "/#"}>RSVP</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
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
