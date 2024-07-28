import {
    BarChartIcon,
  } from "@radix-ui/react-icons";
  import { BookCheckIcon, CircleFadingPlusIcon, FileStackIcon, FileTextIcon } from "lucide-react";
  import Link from "next/link";
  
  export const AcademicCards = () => {
    const services = [
      {
        title: "Attendance Management",
        description:
          "Easily enroll new students and manage their financial records.",
        icon: <BookCheckIcon className="mb-4 h-8 w-8 text-green-500" />,
        href: "/revenue/students",
      },
      {
        title: "Time Table/ Datesheet",
        description:
          "Easily enroll new students and manage their financial records.",
        icon: <FileStackIcon className="mb-4 h-8 w-8 text-blue-500" />,
        href: "/revenue/classes",
      },
      {
        title: "Exams & Results",
        description: "Create and manage new classes or courses for the school.",
        icon: <FileTextIcon className="mb-4 h-8 w-8 text-indigo-500" />,
        href: "/revenue/classes",
      },
      {
        title: "Financial Reporting",
        description: "Generate comprehensive financial reports and analytics.",
        icon: <BarChartIcon className="mb-4 h-8 w-8 text-purple-500" />,
        href: "",
      },
      {
        title: "Events & Activities",
        description: "Customize payment plans and automate recurring payments.",
        icon: <CircleFadingPlusIcon className="mb-4 h-8 w-8 text-red-500" />,
        href: "",
      },
    ];
  
    return (
      <section className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Link
            href={service.href}
            key={index}
            className="transform rounded-lg bg-yellow-100 p-6 shadow-md transition duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
          >
            <div className="flex flex-col items-center text-center">
              {service.icon}
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </Link>
        ))}
      </section>
    );
  };
  