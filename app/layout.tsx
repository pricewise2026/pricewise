import "./globals.css";

export const metadata = {
  title: "Pricewise – Smart price decisions for Ireland",
  description:
    "Compare electronics prices across Ireland. Track price history and avoid fake discounts.",
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