# TODO

- [ ] Strapi Integration
- [ ] Articles Page <<

- [ ] Move home page components to own folder in app/components
- [ ] Make Funtional Pages for all home page sections
- [ ] Functional Newsletter API integration with resend, move to sendgrid if no way to manage email list.

Email Stack: Stored in pocketbase @ pockethost.io
Tools: resend, sendgrid

- [ ] Express server trick (is there a lighter weight alternative?)

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
