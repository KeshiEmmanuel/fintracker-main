import DashboardHeading from "@/components/DashboardHeading";
import Tabs from "@/components/Tabs";
import TransactionTable from "@/components/TransactionTable";
import React from "react";

function App() {
    return (
        <div className="font-sans mt-20">
            <section className="max-container">
                <DashboardHeading />
                <Tabs />
            </section>
            <div className="w-[460px] sm:w-[630px] pl-10 md:px-10 md:w-full">
                <TransactionTable />
            </div>
        </div>
    );
}

export default App;
