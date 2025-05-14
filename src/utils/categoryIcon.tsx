import { FaEllipsisH, FaShoppingBag } from "react-icons/fa";
import {
  FaBriefcase,
  FaGift,
  FaDollarSign,
  FaChartLine,
  FaUtensils,
  FaCar,
  FaHeartPulse,
  FaGraduationCap,
  FaFilm,
  FaFileInvoice,
} from "react-icons/fa6"; // untuk versi Font Awesome 6 (fa6)
const categoryIcon = (category: string) => {
  const categories = [
    {
      key: "salary",
      name: "Gaji",
      icon: FaBriefcase,
    },
    {
      key: "bonus",
      name: "Bonus",
      icon: FaGift,
    },
    {
      key: "sales",
      name: "Penjualan",
      icon: FaDollarSign,
    },
    {
      key: "investment",
      name: "Investasi",
      icon: FaChartLine,
    },
    {
      key: "food",
      name: "Makan",
      icon: FaUtensils,
    },
    {
      key: "shopping",
      name: "Belanja",
      icon: FaShoppingBag,
    },
    {
      key: "transport",
      name: "Transportasi",
      icon: FaCar,
    },
    {
      key: "health",
      name: "Kesehatan",
      icon: FaHeartPulse,
    },
    {
      key: "education",
      name: "Pendidikan",
      icon: FaGraduationCap,
    },
    {
      key: "entertainment",
      name: "Hiburan",
      icon: FaFilm,
    },
    {
      key: "bills",
      name: "Tagihan",
      icon: FaFileInvoice,
    },
    {
      key: "others",
      name: "Lain-lain",
      icon: FaEllipsisH,
    },
  ];

  return categories.find((item) => item.key === category);
};

export default categoryIcon;
