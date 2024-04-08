import { useContext } from "react";
import { DataContext, DataDispatchContext } from "../../context/data-context";
import ChildrenComponent from "../ChildrenComponent";

const List = () => {
  const data = useContext(DataContext);
  const dispatch = useContext(DataDispatchContext);

  const handleAdd = (newItem) => {
    dispatch({
      type: 'added',
      ...newItem,
    });
  }

  return (
    <ChildrenComponent items={data} onAdd={handleAdd} />
  );
}

export default List;
