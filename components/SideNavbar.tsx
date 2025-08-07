"use client";
import { Links } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const SideNavbar = () => {
    const currentPath = usePathname();

    console.log("Current Path:", currentPath);
    console.log("Links:", Links); // Debug the Links array

    return (
        <nav className="hidden xl:block sticky top-20 w-full h-[calc(100vh-120px)] overflow-y-auto">
            <ul className="flex flex-col gap-2">
                {Links.map((link) => {
                    const isActive = currentPath === link.url;

                    // Debug each link comparison
                    console.log(
                        `Link: ${link.label}, URL: "${link.url}", Current: "${currentPath}", Active: ${isActive}`
                    );

                    return (
                        <li
                            key={link.url}
                            className={`px-8 rounded-2xl py-2 transition-colors hover:bg-gray-200/50 ${
                                isActive ? "bg-[#38677629]" : ""
                            }`}
                        >
                            <Link
                                href={link.url}
                                className={`font-sans font-medium ${
                                    isActive
                                        ? "text-[#3A6C7B] font-semibold"
                                        : ""
                                }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default SideNavbar;
