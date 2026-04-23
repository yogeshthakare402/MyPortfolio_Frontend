import type { Metadata } from "next";
import "./globals.css";
import { portfolioData } from "@/data/portfolio-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  icons: {
    icon: "/assets/icons/favicon.ico",
  },
  title: {
    default: "Yogesh Thakare | Frontend Engineer",
    template: "%s | Yogesh Thakare",
  },
  description: "Portfolio focused on performant and scalable frontend engineering.",
  openGraph: {
    title: "Yogesh Thakare | Frontend Engineer",
    description: "Portfolio focused on performant and scalable frontend engineering.",
    type: "website",
    url: "https://example.com",
    images: [{ url: "/assets/images/Yogesh_Thakare.webp", width: 1200, height: 630, alt: "Yogesh Thakare" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yogesh Thakare | Frontend Engineer",
    description: "Portfolio focused on performant and scalable frontend engineering.",
    images: ["/assets/images/Yogesh_Thakare.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href={portfolioData.profile.avatar} />
      </head>
      <body>{children}</body>
    </html>
  );
}
