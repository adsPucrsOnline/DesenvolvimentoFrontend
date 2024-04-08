const generateNewItem = (length) => ({ id: length + 1, name: `my name ${length + 1}`});

const ChildrenComponent = ({ items, onAdd }) => {
  const newItem = generateNewItem(items.length); // Este é apenas um exemplo, para simular um novo item que foi informado, estes dados devem vir do formulário

  return (
    <>
      <button onClick={() => onAdd(newItem)}>Adicionar algo</button>
      <ul>
        {items.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </>
  );
}

export default ChildrenComponent;
