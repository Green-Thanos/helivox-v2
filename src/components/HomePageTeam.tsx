import Link from "next/link";
import { MoveRight } from "lucide-react";
import CircularProfileImage from "@/components/CircularProfileImage";

export default function HomePageTeam() {
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
        <div className="mt-8 flex justify-center">
          <div className="grid grid-cols-2 gap-8 md:gap-x-16">
            <div className="flex flex-col items-center gap-4 text-center">
              <CircularProfileImage
                src="/assets/jeffreykim.jpg"
                alt="Team Member 1"
                size={150}
              />
              <div>
                <p className="text-lg font-medium">Jeffrey Kim</p>
                <p className="text-sm text-muted-foreground">President</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 text-center">
              <CircularProfileImage
                src="/assets/julia.jpg"
                alt="Team Member 2"
                size={150}
              />
              <div>
                <p className="text-lg font-medium">Julia Liang</p>
                <p className="text-sm text-muted-foreground">Vice President</p>
              </div>
            </div>
            {/* You can add a third card here if needed */}
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
