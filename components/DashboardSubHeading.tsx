import { imagesURL } from "@/constants";
import React from "react";
import RoundedImage from "./RoundedImage";

const DashboardSubHeading = () => {
    return (
        <section className="mt-7 pl-2">
            <div className="flex items-center gap-1">
                <div className="flex items-center">
                    {imagesURL.map((url) => (
                        <RoundedImage
                            key={url}
                            source={url}
                            width={50}
                            height={50}
                            className="-ml-2 bg-white p-[2px]"
                        />
                    ))}
                </div>
                <h2 className="text-gray-500">Ava, Liam, Noah +12 others</h2>
            </div>
        </section>
    );
};

export default DashboardSubHeading;
