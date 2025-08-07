import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Transactions } from "@/constants";
import { Badge } from "./ui/badge";
function TransactionTable() {
    function formatAmount(amount: string): string {
        const amountToString = amount.includes("-")
            ? amount.slice(amount.indexOf("-"), 1) + "$" + amount.slice(1)
            : `$${amount}`;
        return amountToString;
    }

    console.log(formatAmount("2000"));

    return (
        <section className="mt-10">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[600px]">Date</TableHead>
                        <TableHead>Remark</TableHead>
                        <TableHead className="w-[100px]">Amount</TableHead>
                        <TableHead className="w-[100px]">Currency</TableHead>
                        <TableHead className="w-[100px]">Type</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {!Transactions ? (
                        <TableRow>
                            <TableCell>Loading...</TableCell>
                        </TableRow>
                    ) : (
                        Transactions.map((invoice) => (
                            <TableRow key={invoice.id}>
                                <TableCell>{invoice.date}</TableCell>
                                <TableCell>{invoice.remark}</TableCell>
                                <TableCell className="w-[100px]">
                                    {formatAmount(
                                        invoice.amount.toLocaleString("en-US")
                                    )}
                                </TableCell>
                                <TableCell className="w-[100px]">
                                    {invoice.currency}
                                </TableCell>
                                <TableCell className="w-[100px]">
                                    <TypeIndicator type={invoice.type} />
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </section>
    );
}

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

export default TransactionTable;
