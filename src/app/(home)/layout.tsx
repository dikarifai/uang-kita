import Navbar from "@/components/navbar";

const HomeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="pb-20">
      {children}
      <Navbar />
    </main>
  );
};

export default HomeLayout;
