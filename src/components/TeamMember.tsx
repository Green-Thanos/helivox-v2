import React from "react";
import Link from "next/link";
import { Twitter, Linkedin } from "lucide-react";

interface TeamMemberProps {
  name: string;
  title: string;
  imageUrl: string;
  linkedinUrl?: string;
  twitterUrl?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  title,
  imageUrl,
  linkedinUrl,
  twitterUrl,
}) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
    <img
      src={imageUrl}
      alt={name}
      width={400}
      height={400}
      className="h-80 w-full object-cover object-center" // Adjust the height as needed
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#00000080] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <div className="absolute bottom-0 left-0 w-full bg-background/80 px-4 py-3 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-muted-foreground">{title}</p>
      <div className="absolute -top-6 right-3 flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {linkedinUrl && (
          <Link href={linkedinUrl} aria-label="LinkedIn" prefetch={false}>
            <Linkedin className="h-5 w-5" />
          </Link>
        )}
        {twitterUrl && (
          <Link href={twitterUrl} aria-label="Twitter" prefetch={false}>
            <Twitter className="h-5 w-5" />
          </Link>
        )}
      </div>
    </div>
  </div>
);

export default TeamMember;
