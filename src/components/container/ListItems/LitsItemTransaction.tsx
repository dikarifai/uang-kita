import categoryIcon from "@/utils/categoryIcon";
import ListItems from ".";

const ListItemTransactions: React.FC<ListItemTransactionProps> = ({
  items,
}) => {
  return (
    <>
      {items.map((item) => {
        const Icon = categoryIcon(item.category.key)?.icon;
        return (
          <ListItems key={item.id}>
            <div
              className={`h-16 aspect-square flex justify-center items-center ${
                item.type === "income"
                  ? "bg-success text-success"
                  : "bg-error text-error"
              }`}
            >
              {Icon && <Icon size={24} color="white" />}
            </div>
            <div className="flex justify-between flex-row w-full pr-4 pl-2">
              <div className="flex flex-col ">
                <p>{item.category.name}</p>
                <p>{item.description}</p>
              </div>
              <div className="flex flex-col">
                <p
                  className={`${
                    item.type === "expense" ? "text-error" : "text-success"
                  }`}
                >
                  {item.type === "expense" && "-"} Rp.
                  {item.amount}
                </p>
                <p>{item.date}</p>
              </div>
            </div>
          </ListItems>
        );
      })}
    </>
  );
};

export default ListItemTransactions;
