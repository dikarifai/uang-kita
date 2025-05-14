const ListLayout: React.FC<ListLayoutsPorps> = ({ children }) => {
  return <div className="px-4 flex flex-col gap-2">{children}</div>;
};

export default ListLayout;
