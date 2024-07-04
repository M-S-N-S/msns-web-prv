import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { TRPCReactProvider } from "~/trpc/react";
export const metadata = {
  title: "MSNS-WEB",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/logo/logo-white.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>      
      <body className="grid min-h-screen grid-col-1">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
    
  );
}
