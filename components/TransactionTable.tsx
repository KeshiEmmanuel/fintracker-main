"use client";
import { useMemo, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Transactions } from "@/constants";

import TransactionRow from "./TransactionRow";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
type SortField = "date" | "remark" | "amount";
type SortDirection = "asc" | "desc";

function TransactionTable() {
    const [sortField, setSortField] = useState("");
    const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
    // const [isLoading, setIsLoading] = useState(false);

    const sortedTransactions = useMemo(() => {
        return [...Transactions].sort((a, b) => {
            let aValue: string | number;
            let bValue: string | number;

            switch (sortField) {
                case "date":
                    aValue = new Date(a.date).getTime();
                    bValue = new Date(b.date).getTime();
                    break;
                case "remark":
                    aValue = a.remark.toLowerCase();
                    bValue = b.remark.toLowerCase();
                    break;
                case "amount":
                    aValue = Math.abs(a.amount);
                    bValue = Math.abs(b.amount);
                    break;
                default:
                    return 0;
            }

            if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
            if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
            return 0;
        });
    }, [sortField, sortDirection]);

    const handleSort = (field: SortField) => {
        if (sortField === field) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortDirection("desc");
        }
    };

    const getSortIcon = (field: SortField) => {
        if (sortField !== field) return <ArrowUpDown className="w-4 h-4" />;
        return sortDirection === "asc" ? (
            <ArrowUp className="w-4 h-4" />
        ) : (
            <ArrowDown className="w-4 h-4" />
        );
    };
    return (
        <section className="mt-10 w-full">
            <div className="overflow-x-auto">
                <Table className="min-w-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead
                                className="min-w-[120px] sm:w-[600px]"
                                onClick={() => handleSort("date")}
                            >
                                <div className="flex items-center gap-1">
                                    Date
                                    {getSortIcon("date")}
                                </div>
                            </TableHead>
                            <TableHead
                                className="min-w-[80px] sm:w-[100px]"
                                onClick={() => handleSort("remark")}
                            >
                                <div className="flex items-center gap-1">
                                    Remark
                                    {getSortIcon("remark")}
                                </div>
                            </TableHead>
                            <TableHead
                                className="min-w-[80px] sm:w-[100px]"
                                onClick={() => handleSort("amount")}
                            >
                                <div className="flex items-center gap-1">
                                    Amount
                                    {getSortIcon("amount")}
                                </div>
                            </TableHead>
                            <TableHead className="min-w-[80px] sm:w-[100px]">
                                Currency
                            </TableHead>
                            <TableHead className="min-w-[70px] sm:w-[100px]">
                                Type
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {/* Simulating Loading State */}
                        {!sortedTransactions ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center">
                                    Loading...
                                </TableCell>
                            </TableRow>
                        ) : (
                            sortedTransactions.map((invoice) => (
                                <TransactionRow {...invoice} key={invoice.id} />
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </section>
    );
}

export default TransactionTable;
