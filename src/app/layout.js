import "./globals.css";

export const metadata = {
  title: 'home',
  description: 'this is home page of weblog',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
