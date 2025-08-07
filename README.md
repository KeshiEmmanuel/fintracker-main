# 💰 Wallet Ledger Dashboard

A modern, responsive financial dashboard built with React, TypeScript, and Next.js for tracking wallet transactions and financial summaries.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)


## 🚀 Live Demo
 [View Live Application](https://fintracker-main.vercel.app/)

## 📸 Screenshots

Desktop View
Show Image
Mobile View
Show Image

## ✨ Features

### 🎯 Core Functionality
- **Real-time Financial Overview** - Track total balance, credits, debits, and transaction count
- **Interactive Transaction Table** - Sortable by date, remark, and amount
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **User Management** - Multi-user avatar display with team collaboration features
- **Tab Navigation** - Switch between Overview and Transactions views

### 📊 Dashboard Components
- **Summary Cards** with trend indicators (+/- percentage changes)
- **Color-coded Transaction Types** (Green for credits, Red for debits)
- **Active Status Indicator** with real-time pulsing animation
- **Sortable Data Tables** with visual sort indicators
- **Loading States** and empty state handling
- **Hover Effects** and smooth transitions

### 🎨 UI/UX Features
- **Modern Design Language** with clean typography and spacing
- **Interactive Elements** with hover states and click animations
- **Accessibility Support** with proper semantic markup
- **Performance Optimized** with efficient rendering
- **Mobile-First Approach** with responsive breakpoints

🛠️ Technology Stack

```bash
React.js
TypeScript
TailwindCSS
Nextjs
shadcn UI
```

📋 Project Structure

```bash
wallet-ledger-dashboard/
├── components/
│   ├── Navbar.tsx              # Top Navigation 
│   ├── SideNavBar.tsx              #  Side Navigation
│   ├── DashboardHeading.tsx         # Dashboard Header 
│   ├── GlobalGridLayout.tsx         # For global grid layout
│   ├── DashboardSubHeading.tsx         # dashboard sub header containing users Avatars 
│   ├── Card.tsx         # Financial metric cards
│   ├── Tabs.tsx         #  Tabs Navigation
│   ├── RoundedImages.tsx         #  Reusable components to make images rounded
│   ├── TransactionRow.tsx      # Individual transaction display
├── types/
│   └── index.ts                # TypeScript interfaces
├── constants/
│   └── index.ts              # Utility functions
├── styles/
│   └── globals.css             # Global styles and Tailwind imports
└── README.md
```
