import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

export default function TodoList({ items, heading, onSelectItem }: Props) {
  const [selectedItem, setSelectedItem] = useState<Number>();

  const handleClick = (e: MouseEvent, index: number, item: string) => {
    setSelectedItem(index);
    onSelectItem(item);
  };

  return (
    <div className="container-sm my-5 w-50">
      <h1 className="my-3">{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={(e) => handleClick(e, index, item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
