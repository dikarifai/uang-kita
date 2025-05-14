import Tag from "@/components/tags";

const OptionTabs: React.FC = () => {
  return (
    <section className="flex flex-row items-center justify-center gap-8 overflow-auto px-4 py-2">
      <Tag>Today</Tag>
      <Tag>Week</Tag>
      <Tag>Month</Tag>
      <Tag>Year</Tag>
    </section>
  );
};

export default OptionTabs;
