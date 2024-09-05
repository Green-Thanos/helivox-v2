export default function Head() {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicons/apple-touch-icon.png"
      />
      <link rel="icon" href="/favicons/favicon.ico" />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#fff"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#000"
      />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </>
  );
}
