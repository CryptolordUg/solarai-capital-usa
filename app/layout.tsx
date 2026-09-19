export const metadata = {
  title: "SolarAI Capital USA",
  description: "SolarAI Capital USA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
