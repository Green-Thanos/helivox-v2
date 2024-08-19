import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

export default function Events() {
  const upcomingEvents = [
    {
      title: "College Application Workshop",
      description:
        "Interactive workshop on navigating the college application process.",
      date: "June 15, 2023",
      time: "6:00 PM - 8:00 PM",
      location: "123 Main Street, Anytown USA",
    },
    {
      title: "Scholarship Application Workshop",
      description:
        "Learn strategies to maximize your chances of securing scholarships.",
      date: "July 20, 2023",
      time: "6:00 PM - 8:00 PM",
      location: "456 Oak Avenue, Anytown USA",
    },
    {
      title: "Financial Aid Information Session",
      description:
        "Get the latest updates on financial aid and learn how to maximize your opportunities.",
      date: "August 5, 2023",
      time: "6:00 PM - 8:00 PM",
      location: "789 Elm Street, Anytown USA",
    },
  ];

  const pastEvents = [
    {
      date: "January 10, 2023",
      title: "Community Clean-Up Day",
      description:
        "A successful event where volunteers came together to clean up local parks and streets.",
      location: "Anytown USA",
    },
    {
      date: "March 5, 2023",
      title: "Fundraising Gala",
      description:
        "An elegant evening of dining and entertainment to raise funds for our community programs.",
      location: "Anytown USA",
    },
    {
      date: "June 22, 2023",
      title: "Youth Mentoring Workshop",
      description:
        "A workshop aimed at empowering young individuals through mentorship and skill-building activities.",
      location: "Anytown USA",
    },
    {
      date: "September 15, 2023",
      title: "Health Fair",
      description:
        "A community event providing free health screenings, information, and resources to local residents.",
      location: "Anytown USA",
    },
  ];

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
        {upcomingEvents.map((event, index) => (
          <Card key={index} className="h-full">
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>{event.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Calendar className="mr-2" />
                <div>
                  <p>{event.date}</p>
                  <p className="text-sm text-gray-500">{event.time}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <MapPin className="mr-2" />
                <p className="text-gray-500">{event.location}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button>RSVP</Button>
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
        <ol className="relative max-w-2xl border-s  border-gray-200">
          {pastEvents.map((event, index) => (
            <li
              key={index}
              className={`ms-4 ${
                index !== pastEvents.length - 1 ? "mb-10" : ""
              }`}
            >
              <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-200"></div>
              <time className="mb-1 text-sm font-normal leading-none">
                {event.date}
              </time>
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p className="mb-4 text-base font-normal">{event.description}</p>
              <p className="text-sm font-medium">{event.location}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
