import React from "react";
import useCounter from "../../hooks/useCounter";
import useStorage from "../../hooks/useStorage";
import { Button } from "react-bootstrap";

function Counter() {
  const [count, increment, decrement] = useCounter(0);
  const [value, setValue] = useStorage("count", count);

  return (
    <div>
      <p>Contador: {count}</p>    
      <div className="d-flex flex-column justify-content-center">
        <Button onClick={increment} className="my-2">Incrementar</Button>
        <Button variant="danger" onClick={decrement} className="my-2">
          Decrementar
        </Button>
        <Button variant="warning" onClick={() => setValue(count)} className="my-2">
          Salvar no armazenamento
        </Button>
      </div>
    </div>
  );
}

export default Counter;
