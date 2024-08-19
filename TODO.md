# TODO

- [ ] Strapi Integration For Events
- [ ] Strapi Editor Permissions and heirarchy test
- [ ] Strapi Meet the Team Page with uploaded pictures
- [x] Home Page Strapi Content
- [ ] ~~Articles Page <<~~ - Move to Substack
- [x] Fix the testimonials cos wtf
- [x] Fix the events page
- [x] Fix eslint issues
- [ ] Add an actual footer with business email (make a resend account for the email)
- [ ] Make types folder and define types for strapi content

- [ ] ~~Move home page components to own folder in app/components~~ Fix Component Naming Scheme
- [ ] ~~Add Internal Server Error page (mainly for blog)~~
- [ ] Home Page sub card components need to be made into their own thing in components/ui
- [x] Make Funtional Pages for all home page sections
- [x] Functional Newsletter API integration with resend, move to sendgrid if no way to manage email list.
- [ ] Implement Zod Email Validation and use actual form components (try to get rid of usestate) - Example form in fwiki repo

- [ ] Express server trick for backend (is there a lighter weight alternative?)

https://uptimerobot.com/
**server.ts**

```ts
// server.ts
import { createServer, IncomingMessage, ServerResponse } from "http";

// Define the server
export function startServer(hostname: string, port: number) {
  const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.method === "GET") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Hello, World!\n");
    } else {
      res.statusCode = 405;
      res.setHeader("Content-Type", "text/plain");
      res.end("Method Not Allowed\n");
    }
  });

  // Start the server
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}
```
