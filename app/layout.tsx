import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate" hrefLang="en" href="https://rtb0.com/en/" />
        <link rel="alternate" hrefLang="es" href="https://rtb0.com/es/" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://rtb0.com/en/"
        />
      </head>
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
