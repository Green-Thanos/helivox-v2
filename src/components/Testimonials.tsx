import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "James Khawalski",
    role: "CEO, Mavoline",
    comment:
      "Absolutely recommended! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores facere repellendus, velit quis fugiat.",
  },
  {
    name: "Jacob Jones",
    role: "Youtube Personality",
    comment:
      "Service was amazing! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores facere repellendus, velit quis fugiat.",
  },
  {
    name: "Jenny Wilson",
    role: "Esports Commentator",
    comment:
      "Saved me 1000s of hours. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores facere repellendus, velit quis fugiat.",
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
