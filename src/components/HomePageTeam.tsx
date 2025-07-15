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
        <div className="mt-8 flex flex-wrap justify-center gap-x-16 gap-y-10">
  
  <div className="w-40 flex flex-col items-center gap-4 text-center">
    <CircularProfileImage
      src="/assets/abha.jpg"
      alt="Team Member 1"
      size={150}
    />
    <div>
      <p className="text-lg font-medium">Abha Singh</p>
      <p className="text-sm text-muted-foreground">Co-President</p>
    </div>
  </div>

  <div className="w-40 flex flex-col items-center gap-4 text-center">
    <CircularProfileImage
      src="/assets/emma.jpg"
      alt="Team Member 2"
      size={150}
    />
    <div>
      <p className="text-lg font-medium">Emma Ku</p>
      <p className="text-sm text-muted-foreground">Co-President</p>
    </div>
  </div>

  <div className="w-full" />

  <div className="w-40 flex flex-col items-center gap-4 text-center">
    <CircularProfileImage
      src="/assets/jaeyoung.JPG"
      alt="Team Member 3"
      size={150}
    />
    <div>
      <p className="text-lg font-medium">Jaeyoung Kwon</p>
      <p className="text-sm text-muted-foreground">Vice President</p>
    </div>
  </div>
</div>

{/*fourth member here*/}

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
