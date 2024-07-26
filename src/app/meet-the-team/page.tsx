import React from "react";
import TeamMember from "@/components/TeamMember";

export default function Team() {
  return (
    <section className="flex w-full items-center justify-center py-12 md:py-24 lg:py-32">
      <div className="container grid gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Meet the Team
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            The people behind the magic.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <TeamMember
            name="John Doe"
            title="Software Engineer"
            imageUrl="/placeholder.svg"
            linkedinUrl="https://osrgnsof.com"
            twitterUrl="https://mfoidsjfo.com"
          />
          <TeamMember
            name="Jane Smith"
            title="Product Designer"
            imageUrl="/placeholder.svg"
            linkedinUrl="#"
            twitterUrl="#"
          />
          <TeamMember
            name="Michael Johnson"
            title="Frontend Developer"
            imageUrl="/placeholder.svg"
            linkedinUrl="#"
            twitterUrl="#"
          />
          <TeamMember
            name="Emily Davis"
            title="UX Designer"
            imageUrl="/placeholder.svg"
            linkedinUrl="#"
            twitterUrl="#"
          />
          <TeamMember
            name="David Lee"
            title="Backend Developer"
            imageUrl="/placeholder.svg"
            linkedinUrl="#"
            twitterUrl="#"
          />
          <TeamMember
            name="Sarah Wilson"
            title="Project Manager"
            imageUrl="/placeholder.svg"
            linkedinUrl="#"
            twitterUrl="#"
          />
        </div>
      </div>
    </section>
  );
}
