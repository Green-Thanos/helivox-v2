import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="flex py-10 w-full items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
              Get answers to the most common questions about us.
            </p>
          </div>
          <div className="space-y-4 px-4 md:px-0">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className="mb-4">
                <AccordionTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-left text-lg font-medium transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  What is the pricing structure?
                  <div className="h-5 w-5 transition-transform duration-300 [&[data-state=open]]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="rounded-b-md bg-muted px-4 py-3 text-muted-foreground">
                  Our pricing is based on the number of users and features you
                  need. We offer a range of plans to fit your budget and
                  requirements. You can check our pricing page for more details.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="mb-4">
                <AccordionTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-left text-lg font-medium transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  How do I get started?
                  <div className="h-5 w-5 transition-transform duration-300 [&[data-state=open]]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="rounded-b-md bg-muted px-4 py-3 text-muted-foreground">
                  Getting started is easy! Simply sign up on our website and
                  follow the onboarding steps. Our team is also available to
                  help you get set up and answer any questions you might have.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="mb-4">
                <AccordionTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-left text-lg font-medium transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  What kind of support do you offer?
                  <div className="h-5 w-5 transition-transform duration-300 [&[data-state=open]]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="rounded-b-md bg-muted px-4 py-3 text-muted-foreground">
                  We offer a range of support options, including email support,
                  live chat, and a comprehensive knowledge base. Our team is
                  dedicated to providing timely and helpful assistance to ensure
                  you get the most out of our product.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="mb-4">
                <AccordionTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-left text-lg font-medium transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  Do you offer any integrations?
                  <div className="h-5 w-5 transition-transform duration-300 [&[data-state=open]]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="rounded-b-md bg-muted px-4 py-3 text-muted-foreground">
                  Yes, we offer a wide range of integrations with popular
                  business tools and platforms. This allows you to seamlessly
                  connect our product with the tools you already use, making
                  your workflow more efficient.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
