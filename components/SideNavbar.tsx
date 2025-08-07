import { Links } from "@/constants";
import Link from "next/link";
import React from "react";

const SideNavbar = () => {
    return (
        <nav className="hidden xl:block sticky top-20 w-full h-[calc(100vh-120px)] overflow-y-auto">
            <ul className=" flex flex-col gap-2">
                {Links.map((link) => (
                    <li key={link.url} className="px-8 rounded-xl py-2">
                        <Link
                            href={link.url}
                            key={link.url}
                            className="font-sans font-meduim"
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
