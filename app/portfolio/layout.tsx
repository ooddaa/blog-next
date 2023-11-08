import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  icons: {
    icon: [
      {
        url: "/circles.png",
        href: "/circles.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
