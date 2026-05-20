import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/redux/store/StoreProvider";
import { Toaster } from "sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Victory Motors — Professional Automotive Training Institute in Bangladesh",
  description:
    "Victory Motors is Bangladesh's leading professional automotive training institute, offering hands-on courses in EV, advanced automobile engineering, diagnostics and service management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <StoreProvider>
          {children}
          <Toaster position="top-right" expand={false} richColors closeButton />
        </StoreProvider>
      </body>
    </html>
  );
}
