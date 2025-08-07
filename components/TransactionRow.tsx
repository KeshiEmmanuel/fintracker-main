import React from "react";
import { TableCell, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { Transaction } from "@/types/types";

function formatAmount(amount: string): string {
    const amountToString = amount.includes("-")
        ? amount.slice(amount.indexOf("-"), 1) + "$" + amount.slice(1)
        : `$${amount}`;
    return amountToString;
}

const TransactionRow = ({
    id,
    date,
    remark,
    amount,
    currency,
    type,
}: Transaction) => {
    return (
        <TableRow id={id}>
            <TableCell>{date}</TableCell>
            <TableCell>{remark}</TableCell>
            <TableCell className="w-[100px]">
                {formatAmount(amount.toLocaleString("en-US"))}
            </TableCell>
            <TableCell className="w-[100px]">{currency}</TableCell>
            <TableCell className="w-[100px]">
                <TypeIndicator type={type} />
            </TableCell>
        </TableRow>
    );
};

export default TransactionRow;

function TypeIndicator({ type }: { type: "Debit" | "Credit" }) {
    return (
        <Badge className="bg-[#eaeff0] text-gray-600">
            <div
                className={`${
                    type === "Debit" ? "bg-red-500" : "bg-green-500"
                } w-2 h-2 rounded-full`}
            />{" "}
            {type}
        </Badge>
    );
}
