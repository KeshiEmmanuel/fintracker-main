import { Transaction } from "@/types/types";

export const imagesURL = [
    "/userProfile.png",
    "/darkwoman.png",
    "/youngadultwoman.png",
    "/darkman.png",
];

export const Links = [
    {
        label: "Dashboard",
        url: "/",
    },
    {
        label: "Transcations",
        url: "/transcations",
    },
    {
        label: "Reports",
        url: "/reports",
    },
    {
        label: "Settings",
        url: "/settings",
    },
];
export const dashboardSummary = [
    {
        label: "Total Balance",
        value: 12345,
        change: "+5%",
    },
    {
        label: "Total Credits",
        value: 7890,
        change: "+3%",
    },
    {
        label: "Total Debits",
        value: 4455,
        change: "-2%",
    },
    {
        label: "Transactions",
        value: 150,
        change: "+10%",
    },
];

export const Transactions: Transaction[] = [
    {
        id: "1",
        date: "2023-10-01",
        remark: "Salary",
        amount: 3000,
        currency: "USD",
        type: "Credit",
    },
    {
        id: "2",
        date: "2023-10-02",
        remark: "Groceries",
        amount: -150,
        currency: "USD",
        type: "Debit",
    },
    {
        id: "3",
        date: "2023-10-03",
        remark: "Gym Membership",
        amount: -50,
        currency: "USD",
        type: "Debit",
    },
    {
        id: "4",
        date: "2023-10-04",
        remark: "Dinner",
        amount: -40,
        currency: "USD",
        type: "Debit",
    },
    {
        id: "5",
        date: "2023-10-05",
        remark: "Movie Tickets",
        amount: -30,
        currency: "USD",
        type: "Debit",
    },
    {
        id: "6",
        date: "2023-10-06",
        remark: "Rent",
        amount: -1200,
        currency: "USD",
        type: "Debit",
    },
    {
        id: "7",
        date: "2023-10-07",
        remark: "Utilities",
        amount: -100,
        currency: "USD",
        type: "Debit",
    },
    {
        id: "8",
        date: "2023-10-08",
        remark: "Car Payment",
        amount: -400,
        currency: "USD",
        type: "Debit",
    },
    {
        id: "9",
        date: "2023-10-09",
        remark: "Insurance",
        amount: -200,
        currency: "USD",
        type: "Debit",
    },
];
