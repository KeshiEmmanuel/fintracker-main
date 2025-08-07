"use client";
import { Links } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const SideNavbar = () => {
    const currentPath = usePathname();
    console.log(currentPath);
    return (
        <nav className="hidden xl:block sticky top-20 w-full h-[calc(100vh-120px)] overflow-y-auto">
            <ul className=" flex flex-col gap-2">
                {Links.map((link) => (
                    <li
                        key={link.url}
                        className={`px-8 rounded-2xl py-2 ${
                            currentPath === link.url ? "bg-[#38677629]" : ""
                        }`}
                    >
                        <Link
                            href={link.url}
                            key={link.url}
                            className={`font-sans font-meduim ${
                                currentPath === link.url &&
                                "text-[#3A6C7B] font-semibold"
                            }`}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SideNavbar;
// bg-card-body-color
// text-primary
