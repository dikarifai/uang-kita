import ListItems from "@/components/container/ListItems";
import ListItemTransactions from "@/components/container/ListItems/LitsItemTransaction";
import OptionTabs from "@/components/container/OptionTabs";
import ListLayout from "@/components/layouts/ListLayouts";
import Section from "@/components/layouts/Section";
import { transactions } from "@/dummy/transaction";
import categoryIcon from "@/utils/categoryIcon";
import { FaArrowDown, FaArrowUp, FaMoneyBill } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-b from-primary text-white to-white">
        <div className="flex h-10 px-4 my-3 shadow"></div>
        <div
          id="balance"
          className="balance flex flex-col items-center justify-center"
        >
          <p className="text-sm text-slate-200">Account Balance</p>
          <h2 className="font-bold">Rp.1000000</h2>
        </div>
        <div className="flex flex-row items-center justify-center py-10 gap-4">
          <div className="bg-success flex flex-row items-center justify-center p-4 gap-2 rounded-xl shadow">
            <div className="flex flex-col justify-center items-center px-4 py-2 bg-white text-success rounded-xl">
              <FaArrowDown size={14} />
              <FaMoneyBill size={14} />
            </div>
            <div>
              <h3>Income</h3>
              <h3>5000000</h3>
            </div>
          </div>
          <div className="bg-error flex flex-row items-center justify-center p-4 gap-2 rounded-xl shadow">
            <div className="flex flex-col justify-center items-center px-4 py-2 bg-white text-error rounded-xl">
              <FaArrowUp size={14} />
              <FaMoneyBill size={14} />
            </div>
            <div>
              <h3>Income</h3>
              <h3>5000000</h3>
            </div>
          </div>
        </div>
      </section>
      <Section title="Spend Frequency">
        <div className="flex justify-center items-center h-60 bg-white">
          Coming Soon
        </div>
      </Section>

      <OptionTabs />
      <Section title="Recent Transaction">
        <ListLayout>
          <ListItemTransactions items={transactions} />
        </ListLayout>
      </Section>
    </main>
  );
}
