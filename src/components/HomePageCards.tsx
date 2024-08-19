import { User, DollarSignIcon, GraduationCapIcon } from "lucide-react";

export default function HomePageCards() {
  return (
    <section className="bg-muted py-20 md:py-32">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-6 lg:grid-cols-3">
        <div className="space-y-2 rounded-xl bg-background p-6 text-center">
          <div className="flex items-center justify-center">
            <User className="h-12 w-12 text-primary" />
            <h2 className="ml-2 text-2xl font-bold">5,000+</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Students served annually
          </p>
        </div>
        <div className="space-y-2 rounded-xl bg-background p-6 text-center">
          <div className="flex items-center justify-center">
            <DollarSignIcon className="h-12 w-12 text-primary" />
            <h2 className="ml-2 text-2xl font-bold">5M+</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            In scholarships secured for students
          </p>
        </div>
        <div className="space-y-2 rounded-xl bg-background p-6 text-center">
          <div className="flex items-center justify-center">
            <GraduationCapIcon className="h-12 w-12 text-primary" />
            <h2 className="ml-2 text-2xl font-bold">90%</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Of students enroll in a 4-year university
          </p>
        </div>
      </div>
    </section>
  );
}
