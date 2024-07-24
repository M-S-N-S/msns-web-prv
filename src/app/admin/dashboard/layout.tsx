import React, { type ReactNode } from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";

interface AdminDashboardLayoutProps {
  children: ReactNode; // ReactNode includes any valid JSX children
}

const AdminDashboardLayout: React.FC<AdminDashboardLayoutProps> = ({ children }) => {
  return (
    <body>
      <ScrollArea className="rounded-lg bg-emerald-200 shadow-md p-4 mt-4 ml-10">
      {children}
    </ScrollArea>
    </body>
  );
};

export default AdminDashboardLayout;
