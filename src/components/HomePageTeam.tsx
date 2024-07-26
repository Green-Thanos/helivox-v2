import Link from "next/link";
import { MoveRight } from "lucide-react";

export function HomePageTeam() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Meet the Team
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Get to know the leaders behind Helivox&apos;s mission.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center gap-4 text-center">
            <img
              src="/avatar1.svg"
              width={150}
              height={150}
              alt="Team Member 1"
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-medium">Jeffrey Kim</p>
              <p className="text-sm text-muted-foreground">
                placeholder title and avatar
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <img
              src="/placeholder.svg"
              width={150}
              height={150}
              alt="Team Member 2"
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-medium">Jane Doe</p>
              <p className="text-sm text-muted-foreground">
                Executive Director
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <img
              src="/placeholder.svg"
              width={150}
              height={150}
              alt="Team Member 3"
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-medium">John Smith</p>
              <p className="text-sm text-muted-foreground">Program Manager</p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/meet-the-team"
            className="inline-flex items-center text-primary transition-all hover:pr-2 hover:underline"
            prefetch={false}
          >
            Our Team{" "}
            <MoveRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
