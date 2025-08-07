import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="flex w-full items-center justify-center py-10">
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
                  Who runs Helivox?
                  <div className="h-5 w-5 transition-transform duration-300 [&[data-state=open]]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="rounded-b-md bg-muted px-4 py-3 text-muted-foreground">
                  Helivox is operated entirely by high school students, spanning
                  5 schools in 4 districts and 2 states, who are passionate
                  about educational equity and volunteer work. Our organization
                  is led by Co-Presidents Emma Ku and Abha Singh, and Vice President Jaeyoung Kwon, 
                  along with our sector heads: Programming - Aryan
                  Goswami, Marketing - Advik Dogra, Graphics - Advik Tatavarthi,
                  Writing - Krish Gupta, HR - Daniel Cho
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="mb-4">
                <AccordionTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-left text-lg font-medium transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  Is Helivox a legitimate nonprofit?
                  <div className="h-5 w-5 transition-transform duration-300 [&[data-state=open]]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="rounded-b-md bg-muted px-4 py-3 text-muted-foreground">
                  Yes, Helivox is a registered 501(c) nonprofit organization and
                  is PVSA-certified (President&apos;s Volunteer Service Award). We
                  maintain full transparency in our operations and financial
                  management.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="mb-4">
                <AccordionTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-left text-lg font-medium transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  How can I volunteer with Helivox?
                  <div className="h-5 w-5 transition-transform duration-300 [&[data-state=open]]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="rounded-b-md bg-muted px-4 py-3 text-muted-foreground">
                  We welcome student volunteers who are passionate about
                  education and helping others: feel free to apply through the
                  “Get Involved” section and send an email to
                  helivoxofficial@helivox.com. The President and HR Head will
                  get in touch with you shortly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="mb-4">
                <AccordionTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-left text-lg font-medium transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  How can I attend Helivox events?
                  <div className="h-5 w-5 transition-transform duration-300 [&[data-state=open]]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="rounded-b-md bg-muted px-4 py-3 text-muted-foreground">
                  You can view our upcoming events on our website&apos;s Events page.
                  Registration is typically required and can be completed
                  online. We recommend following our social media channels for
                  the latest updates on new events and workshops.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
