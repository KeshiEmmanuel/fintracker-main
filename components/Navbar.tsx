"use client";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoMenu, IoSearch } from "react-icons/io5";
import RoundedImage from "./RoundedImage";
import { Links } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const Navbar = () => {
    const [isMobileNav, setIsMobileNav] = useState(false);
    return (
        <section className="fixed w-full bg-[#fcfcfc] z-30">
            <nav className="flex justify-between py-4 max-container">
                <div className="flex items-center gap-2">
                    <div onClick={() => setIsMobileNav(true)}>
                        <IoMenu size={30} />
                    </div>
                    <h1 className="text-xl italic text-primary font-sans">
                        Fintrack
                    </h1>
                </div>
                <div className="flex items-center gap-4">
                    <IoSearch size={25} />
                    <AiOutlineAppstore size={25} />
                    <div>
                        <RoundedImage
                            source="/userProfile.png"
                            width={40}
                            height={40}
                        />
                    </div>
                </div>
            </nav>
            {isMobileNav && (
                <MobileNav onClose={(bool) => setIsMobileNav(bool)} />
            )}
        </section>
    );
};

type MobileProps = {
    onClose: (value: boolean) => void;
};

function MobileNav({ onClose }: MobileProps) {
    return (
        <nav className="absolute bg-darkergray h-screen w-[60%] z-50 xl:hidden">
            <ul className="mt-5 flex flex-col gap-2">
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

            <button
                className="absolute -top-12 -right-40 bg-transparent backdrop-blur-3xl p-2 rounded-full z-50"
                onClick={() => onClose(false)}
            >
                <MdClose size={30} />
            </button>
        </nav>
    );
}

export default Navbar;
