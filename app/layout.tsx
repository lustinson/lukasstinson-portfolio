import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lukasstinson.com"),

  title: {
    default: "Lukas Stinson | Software Developer",
    template: "%s | Lukas Stinson",
  },

  description:
    "Software developer specializing in full-stack web applications, cloud infrastructure, and automation. Experience with AWS, TypeScript, React, and scalable systems.",

  keywords: [
    "Lukas Stinson",
    "Software Developer",
    "Full Stack Developer",
    "Web Developer",
    "Toronto Software Developer",
    "AWS",
    "React",
    "TypeScript",
    "Python",
    "SQL",
    "ETL Pipelines",
    "Data Engineering",
    "Cloud Engineering",
    "AWS Glue",
    "AWS Lambda",
    "PostgreSQL",
    "Next.js",
    "Django",
  ],

  authors: [{ name: "Lukas Stinson", url: "https://www.linkedin.com/in/lukasstinson422/" }],
  creator: "Lukas Stinson",

  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://lukasstinson.com",
    title: "Lukas Stinson | Software Developer",
    description:
      "Software Developer with expertise in Python, TypeScript, AWS, and data engineering. Building scalable solutions and ETL pipelines.",
    siteName: "Lukas Stinson",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Lukas Stinson – Software Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lukas Stinson | Software Developer",
    description:
      "Software Developer specializing in cloud-native applications, data engineering, and modern web development.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://lukasstinson.com",
  },

  verification: {
    google: "3onnwFqbLAvgU0ms7kJVsdiAp0eVVFH9frDum4DVmDc"
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lukas Stinson",
    url: "https://lukasstinson.com",
    jobTitle: "Software Developer",
    description: "Software Developer specializing in Python, TypeScript, SQL, data engineering, and full-stack development",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Victoria",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    email: "stinser01@gmail.com",
    telephone: "+1-905-806-7859",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Victoria",
      location: "Victoria, BC, Canada",
    },
    sameAs: [
      "https://www.linkedin.com/in/lukasstinson422/",
      "https://github.com/lustinson"
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL",
      "AWS",
      "Data Engineering",
      "ETL Pipelines",
      "Full Stack Development",
      "PostgreSQL",
      "React",
      "Next.js",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
