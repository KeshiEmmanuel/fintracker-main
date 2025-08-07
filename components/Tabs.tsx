"use client";
import { useState } from "react";
import SummaryCard from "./Card";
import { dashboardSummary } from "@/constants";

import React from "react";

const Tabs = () => {
    const [tab, setTab] = useState("");

    return (
        <section className="mt-16">
            <div className="w-full pb-5 border-b-2 border-darkergray">
                <div className="flex items-center gap-4">
                    <button className="text-tabs-color">Overview</button>
                    <button className="text-tabs-color">Transactions</button>
                </div>
            </div>

            {/* Tabs Content */}
            <div className="mt-10">
                <h1 className="text-3xl font-bold pb-7">Summary</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-nowrap gap-4">
                    {dashboardSummary.map((summary) => (
                        <SummaryCard {...summary} key={summary.label} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tabs;
