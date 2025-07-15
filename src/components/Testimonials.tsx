import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Student Parent",
    role: "Freshman Success Start",
    comment:
      "It was really helpful, and they provided a lot of information about high schools, AP courses, sports, and club informatoin. This was a really great and helpful session for me as an immigrant parent and hopefully it will impact my child her freshman year.",
  },
  {
    name: "Anneesh Vijaisarath",
    role: "DSAT Prep Event Attendee",
    comment:
      "Great content! The material given for the practices were very informative as to what we can expect from the real DSATs. The explanatinos given for each question were very detailed and helped me truly understand how to classify and think about ways to answer questions on the DSAT. This session really cleared up the questions and concerns I had about this newly created DSAT and helped build my confidence towards taking this exam.",
  },
  {
    name: "Krish Vijay",
    role: "UC Authenticity Seminar Attendee",
    comment:
      "The college authenticity workshop by Helivox turned out to be exactly what I needed at this point in my journey. Helivox is truly leveling the playing field, teaching various pathways to a higher education that I hadn't considered before. The essay breakdown was great.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(58,176,158,0.3),rgba(255,255,255,0))] py-48">
      <div className="mx-auto max-w-screen-lg px-4">
        <div className="text-center">
          <h2 className="mt-4 text-3xl font-bold">
            Why students love{" "}
            <span className="text-[#5DC60B] dark:text-gray-100">Heli</span>
            vox
          </h2>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative flex flex-col rounded-xl shadow-xl"
            >
              <div className="absolute right-4 top-4 text-[#5DC60B]">
                <Quote size={24} />
              </div>
              <CardContent className="flex flex-col justify-between p-6">
                <div>
                  <p className="text-xl font-bold">{testimonial.name}</p>
                  <p className="mt-1 text-sm">{testimonial.role}</p>
                  <blockquote className="mt-4">
                    <p className="text-sm">{testimonial.comment}</p>
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
