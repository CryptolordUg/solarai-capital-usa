import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SolarAI Capital USA",
  description: "SolarAI Capital USA - Solar Investment Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
