import './globals.css';

export const metadata = {
  title: 'BFG Partners',
  description:
    "BFG Partners invests early in the next generation of consumer products — the bold, opinionated brands people actually love.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Spectral:wght@300;400;500;600&family=Hanken+Grotesque:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
