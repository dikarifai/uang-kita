"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaArrowDown,
  FaArrowUp,
  FaChartPie,
  FaExchangeAlt,
  FaHome,
  FaMoneyBill,
  FaPlus,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar: React.FC = () => {
  const path = usePathname();
  const [isButtonOpen, setIsButtonOpen] = useState<boolean>(false);

  const navigations = [
    {
      key: "home",
      name: "Home",
      path: "/",
      icon: <FaHome size={20} />,
    },
    {
      key: "transaction",
      name: "Transaction",
      path: "/transaction",
      icon: <FaExchangeAlt size={20} />,
    },
    {
      key: "add-transaction",
      name: "Add Transaction",
      icon: <FaPlus />,
    },
    {
      key: "budget",
      name: "Budget",
      path: "/budget",
      icon: <FaChartPie size={20} />,
    },
    {
      key: "profile",
      name: "Profile",
      path: "/profile",
      icon: <FaUser size={20} />,
    },
  ];

  return (
    <nav
      id="navbar"
      className="flex flex-row w-full justify-around fixed mt-4 bottom-0 shadow bg-white"
    >
      {navigations.map((navigation, index) => {
        if (navigation.key === "add-transaction") {
          return (
            <div key={navigation.key} className="relative px-4">
              {isButtonOpen && (
                <div className="absolute flex flex-col items-center -top-24 left-1/2 transform -translate-x-1/2 z-10">
                  {/* <button className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                    {navigation.icon}
                  </button> */}
                  <div className="flex-row flex justify-between gap-8">
                    <Link
                      href={"/transactions/income"}
                      className="flex-col bg-success text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
                    >
                      <FaArrowDown size={20} />
                      <FaMoneyBill size={20} />
                    </Link>
                    <Link
                      href={"/transactions/expense"}
                      className="flex-col bg-error text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
                    >
                      <FaArrowUp size={20} />
                      <FaMoneyBill size={20} />
                    </Link>
                  </div>
                </div>
              )}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
                <button
                  onClick={() => setIsButtonOpen((prev) => !prev)}
                  className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
                >
                  {isButtonOpen ? <FaXmark size={20} /> : navigation.icon}
                </button>
              </div>
            </div>
          );
        } else {
          return (
            <div
              key={navigation.key}
              className="py-2 hover:bg-secondary w-full flex items-center justify-center"
            >
              <div className="flex flex-col gap-1 items-center justify-center">
                {navigation.icon}
                {navigation.name}
              </div>
            </div>
          );
        }
      })}
    </nav>
  );
};

export default Navbar;
