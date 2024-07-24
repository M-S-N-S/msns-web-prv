import { RevenueHeader } from "~/app/_components/revenue/RevenueHeader";

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
      <RevenueHeader />
      <main className="flex flex-col gap-4 p-4">{children}</main>
    </>
  );
}
