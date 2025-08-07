import { PiDotsThreeOutlineFill } from "react-icons/pi";

interface SummaryCardProps {
    label: string;
    value: number;
    change: string;
}

const SummaryCard = ({ label, value, change }: SummaryCardProps) => {
    const stringValue = value.toLocaleString("en-US");
    return (
        <article className="p-[40px] xl:w-[1000px] w-full bg-card-body-color rounded-[28px] hover:shadow-lg transition-shadow">
            <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center">
                    <h1 className="text-heading-color text-3xl xl:text-lg font-bold">
                        {label}
                    </h1>
                    <PiDotsThreeOutlineFill className="size-10 xl:size-6" />
                </div>
                <div className="pt-[18px]">
                    <h1 className="text-5xl font-bold text-heading-color">
                        ${stringValue}
                    </h1>
                    <p className="mt-2 text-[#3E7383] text-xl font-semibold">
                        {change}
                    </p>
                </div>
            </div>
        </article>
    );
};

export default SummaryCard;
