import { NextRequest, NextResponse } from "next/server";
import { getMembers, getArticles, getEvents } from "@/lib/calls";

interface res {
  message: string;
}

export async function GET(req: NextRequest) {
  try {
    // getEvents(0, 6).then((members) => {
    //   members.map((member) => {
    //     console.log(member.attributes.date);
    //     console.log(member.attributes.location);
    //     console.log(member.attributes.name);
    //     console.log(member.attributes.description);
    //   });
    // });

    // getMembers(0, 6).then((m) =>
    //   m.map((m) => console.log(m.attributes.avatar.data.attributes.url)),
    // );

    return NextResponse.json<res>({ message: "Success" }, { status: 200 });
  } catch (e) {
    console.error(e);
  }
}
