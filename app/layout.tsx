export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{background:"black", color:"white", padding:"40px", fontFamily:"sans-serif"}}>
        {children}
      </body>
    </html>
  );
}
