"use client";
import SidebarProvider from "@/context/SidebarContext";
// import Sidebar from "../common/Sidebar";
// import TopBar from "../common/TopBar";
import "./globals.css";
import { Inter } from "next/font/google";
import TopBar from "./common/TopBar";
import Sidebar from "./common/Sidebar";
import NewDealsProvider from "@/context/NewDealsProvider";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Simpli",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NewDealsProvider>
          <SidebarProvider>
            <TopBar />
            <div className="flex items-start pt-16">
              <Sidebar />
              <div className="w-full">
                <NextTopLoader />
                <div className="min-h-screen overflow-y-auto">{children}</div>
              </div>
            </div>
          </SidebarProvider>
        </NewDealsProvider>
      </body>
    </html>
  );
}
