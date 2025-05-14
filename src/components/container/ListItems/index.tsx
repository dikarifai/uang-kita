const ListItems: React.FC<ListItemProps> = ({ children }) => {
  return (
    <div className="flex flex-row items-center bg-white rounded-2xl overflow-hidden">
      {children}
    </div>
  );
};

export default ListItems;
