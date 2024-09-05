"use client";
import { useState, useEffect } from "react";
import { format, isPast, isFuture, parseISO } from "date-fns";
import { getEvents, Event as ApiEvent } from "@/lib/calls";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

// Define the Event type based on the structure you're using
type Event = ApiEvent;

export default function Events() {
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

  const pastEvents = events
    .filter((event) => isPast(new Date(event.attributes.date)))
    .sort(
      (a, b) =>
        new Date(b.attributes.date).getTime() -
        new Date(a.attributes.date).getTime(),
    );

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Upcoming Events
          </h2>
          <p className="mx-auto max-w-[700px] pt-6 text-gray-500 md:text-xl">
            Stay up-to-date with our upcoming events and workshops.
          </p>
        </div>
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Skeleton cards for loading state */}
          {Array.from({ length: 3 }).map((_, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <Skeleton className="mb-2 h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-center">
                  <Skeleton className="mr-2 h-5 w-5" />
                  <div>
                    <Skeleton className="mb-1 h-4 w-32" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>
                <div className="flex items-center">
                  <Skeleton className="mr-2 h-5 w-5" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </CardContent>
              <CardFooter>
                <Skeleton className="h-10 w-full" />
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mb-12 pt-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Past Events
          </h2>
          <p className="mx-auto max-w-[700px] pt-6 text-gray-500 md:text-xl">
            Our past projects and milestones.
          </p>
        </div>
        <div className="flex justify-center">
          <ol className="relative max-w-2xl border-s border-gray-200">
            {/* Skeleton list items for loading state */}
            {Array.from({ length: 3 }).map((_, index) => (
              <li key={index} className="mb-10 ms-4">
                <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-200"></div>
                <Skeleton className="mb-2 h-4 w-32" />
                <Skeleton className="mb-2 h-5 w-48" />
                <Skeleton className="h-4 w-36" />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Upcoming Events
        </h2>
        <p className="mx-auto max-w-[700px] pt-6 text-gray-500 md:text-xl">
          Stay up-to-date with our upcoming events and workshops.
        </p>
      </div>
      <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {upcomingEvents.map((event) => (
          <Card key={event.id} className="h-full">
            <CardHeader>
              <CardTitle>{event.attributes.name}</CardTitle>
              <CardDescription>{event.attributes.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Calendar className="mr-2" />
                <div>
                  <p>
                    {format(parseISO(event.attributes.date), "MMMM d, yyyy")}
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

      <div className="mb-12 pt-12 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Past Events
        </h2>
        <p className="mx-auto max-w-[700px] pt-6 text-gray-500 md:text-xl">
          Our past projects and milestones.
        </p>
      </div>
      <div className="flex justify-center">
        <ol className="relative max-w-2xl border-s border-gray-200">
          {pastEvents.map((event, index) => (
            <li
              key={event.id}
              className={`ms-4 ${
                index !== pastEvents.length - 1 ? "mb-10" : ""
              }`}
            >
              <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-200"></div>
              <time className="mb-1 text-sm font-normal leading-none">
                {format(parseISO(event.attributes.date), "MMMM d, yyyy")}
              </time>
              <h3 className="text-lg font-semibold">{event.attributes.name}</h3>
              <p className="mb-4 text-base font-normal">
                {event.attributes.description}
              </p>
              <p className="text-sm font-medium">
                {event.attributes.location.split(",")[1]}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
