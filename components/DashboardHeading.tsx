import { SlOptions } from "react-icons/sl";
import DashboardSubHeading from "./DashboardSubHeading";

const DashboardHeading = () => {
    const allLedgers = ["Wallet Ledger", "All Ledger"];
    return (
        <section className="">
            <div className="flex flex-col gap-6 pt-5 lg:gap-0 lg:flex-row lg:justify-between items-center">
                <div className="flex items-center gap-2">
                    <select className="text-[44px] font-bold text-heading-color">
                        {allLedgers.map((ledger, index) => (
                            <option
                                value={`${ledger}-${index}`}
                                className="text-xl"
                                key={index}
                            >
                                {ledger}
                            </option>
                        ))}
                    </select>
                    <div className="bg-gray py-1 px-2 rounded-full flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <p>Active</p>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <button className="bg-dh-btn px-5 py-2 rounded-full text-lg hover:opacity-80 cursor-pointer transition-opacity">
                        Share
                    </button>
                    <button className="border-gray-200 border-2 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-600/5 transition-colors">
                        <SlOptions size={20} />
                    </button>
                </div>
            </div>
            <div className="">
                <DashboardSubHeading />
            </div>
        </section>
    );
};

export default DashboardHeading;
