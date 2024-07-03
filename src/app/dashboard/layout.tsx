import React, { type ReactNode } from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Navbar from "./navbar/page";
interface DashboardLayoutProps {
  children: ReactNode; // ReactNode includes any valid JSX children
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <body>
            <Navbar/>
      <ScrollArea className="rounded-lg bg-green-300 shadow-md p-4 mt-4">
      {children}
    </ScrollArea>
    </body>
  );
};

export default DashboardLayout;
