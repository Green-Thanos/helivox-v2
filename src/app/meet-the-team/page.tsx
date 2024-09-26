"use client";
import React from "react";
import { useState, useEffect } from "react";
import TeamMember from "@/components/TeamMember";
import { getMembers, Member } from "@/lib/calls";
import { Skeleton } from "@/components/ui/skeleton";

export default function Team() {
  const [Members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        const fetchedEvents = await getMembers(0, 100);
        console.log(fetchedEvents);
        setMembers(fetchedEvents);
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents().catch((e) => console.log(e));
  }, []);

  if (isLoading) {
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
            {/* Skeleton placeholders */}
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="space-y-4">
                <Skeleton className="h-40 w-full rounded-lg" />
                <Skeleton className="mx-auto h-5 w-3/4" />
                <Skeleton className="mx-auto h-4 w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

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
          {Members.map((member) => (
            <TeamMember
              key={member.id}
              name={member.attributes.name}
              title={member.attributes.title}
              imageUrl={member.attributes.avatar.data.attributes.url}
              // linkedinUrl={member.attributes?.LinkedIn.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
