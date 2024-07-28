import { Footer } from "../_components/footer/footer";
import { Header } from "../_components/header/header";
import { HorizontalMenu } from "../_components/menubar/menubar";

export const metadata = {
  title: "MSNS-WEB | Clerk ",
  description: "Clerk Dashbaord",
  icons: [{ rel: "icon", url: "/logo/logo-white.png" }],
};

export default function RevenueDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <HorizontalMenu />
      <main className="flex flex-col gap-4 p-4">{children}</main>
      <Footer />
    </>
  );
}
