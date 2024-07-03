import React from "react";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <header className="bg-green-900 text-white px-4 py-2 flex justify-between items-center">
      <a className="text-xl font-bold">My App</a>
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="hover:text-pink-600">
            Home
          </a>
        </li>
        <li>
        <a href="/" className="hover:text-pink-600">
        About
          </a>
        </li>
        <li>
        <a href="/" className="hover:text-pink-600">
        Contact
          </a>
        </li>
      </ul>
      <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <Image
                  src="/png/user-profile.png"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
    </header>
  );
}
