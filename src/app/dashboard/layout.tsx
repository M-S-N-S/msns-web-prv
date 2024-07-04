import React, { type ReactNode } from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Navbar from "./navbar/page";
import Sidebar from "./sidebar/page";
interface DashboardLayoutProps {
  children: ReactNode; // ReactNode includes any valid JSX children
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <body>
            <Navbar/>
            <Sidebar />
      <ScrollArea className="rounded-lg bg-emerald-200 shadow-md p-4 mt-4 ml-10">
      {children}
    </ScrollArea>
    </body>
  );
};

export default DashboardLayout;
