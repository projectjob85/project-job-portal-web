import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Projectjob — Government & Private Jobs", description: "Explore government and private job opportunities across India. Filter by state, city and education." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
