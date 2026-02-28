import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://alexeckardtgames.com'),
  title: "Alex Eckardt Games | Indie Game Developer Portfolio",
  description: "Explore the game development portfolio of Alex Eckardt, an indie game developer from Waterloo, Ontario. Featuring Soulflame and other game projects.",
  keywords: ['Alex Eckardt', 'indie game developer', 'game development', 'Soulflame', 'Waterloo Ontario', 'Alex Eckardt Games'],
  authors: [{ name: 'Alex Eckardt' }],
  creator: 'Alex Eckardt',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexeckardtgames.com',
    siteName: 'Alex Eckardt Games',
    title: 'Alex Eckardt Games | Indie Game Developer Portfolio',
    description: 'Explore the game development portfolio of Alex Eckardt, an indie game developer from Waterloo, Ontario. Featuring Soulflame and other game projects.',
    images: [
      {
        url: 'https://alexeckardtgames.com/dev-logo.png',
        width: 200,
        height: 210,
        alt: 'Alex Eckardt Games Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Alex Eckardt Games | Indie Game Developer',
    description: 'Portfolio of indie game developer Alex Eckardt. Games include Soulflame and more.',
  },
  alternates: {
    canonical: 'https://alexeckardtgames.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased bg-background"
      >
        {children}

        {/* Google Analytics */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
