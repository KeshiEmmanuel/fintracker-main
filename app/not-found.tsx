import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
    return (
        <main className="h-screen font-sans">
            <div className="flex flex-col items-center justify-center">
                <h1 className="mt-40 text-center text-heading-color font-sans font-black text-8xl">
                    Oops!
                </h1>
                <p className="text-center mt-4 text-primary text-2xl">
                    we couldn't find the page you are looking for
                </p>

                <Link
                    href="/"
                    className="flex mt-5 items-center gap-2 border-heading-color border px-4 py-2 rounded-full hover:bg-primary/50 transition-colors"
                >
                    <FaArrowLeft />
                    <p className="font-bold">Go Home</p>
                </Link>
            </div>
        </main>
    );
};

export default NotFound;
