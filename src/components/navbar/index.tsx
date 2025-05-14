"use client";

import { usePathname } from "next/navigation";
import {
  FaChartPie,
  FaExchangeAlt,
  FaHome,
  FaPlus,
  FaTimes,
  FaUser,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  const path = usePathname();

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
      className="flex flex-row w-full justify-around fixed bottom-0 shadow"
    >
      {navigations.map((navigation, index) => {
        if (navigation.key === "add-transaction") {
          return (
            <div key={navigation.key} className="relative px-4">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
                <button className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                  {navigation.icon}
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
