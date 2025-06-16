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
  title: "Mohd Adeeb | Full-Stack Developer",
  description: "I’m Mohd Adeeb, a passionate full-stack developer. Explore my portfolio, projects, and skills.",
  keywords: [
    "Mohd Adeeb",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "Frontend Developer",
    "Web Developer Portfolio"
  ],
  authors: [{ name: "Mohd Adeeb", url: "https://adeeb-three.vercel.app/" }],
  creator: "Mohd Adeeb",
  openGraph: {
    title: "Mohd Adeeb | Full-Stack Developer Portfolio",
    description: "Check out my latest web development projects, skills, and contact information.",
    url: "https://adeeb-three.vercel.app/",
    siteName: "Mohd Adeeb Portfolio",
    images: [
      {
        url: "https://adeeb-three.vercel.app/Assets/profile-pic.jpg", 
        width: 800,
        height: 600,
        alt: "Mohd Adeeb Profile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohd Adeeb | Full-Stack Developer",
    description: "Explore Mohd Adeeb's developer portfolio, showcasing web projects and skills.",
    images: ["/Assets/profile-pic.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="5WMaiwO1OFu8BX6aLe0JMNxQcXa9-7sk_ZrhucfEI2Q" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
