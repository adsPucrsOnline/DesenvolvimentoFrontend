import { useState } from 'react';
import receita from '../src/Data/receita'

export default function App() {
  const [minhaReceita, setMinhaReceita] = useState(receita);

  function handleChange(event, itemID) {
    const novosIngredientes = minhaReceita.ingredientes.map(
        item => {
          if(item.id===itemID)
            return {
              ...item,
              [event.target.name]: event.target.value
            }
          else
            return item
        }
      )
    
    setMinhaReceita( { ...minhaReceita, ingredientes: novosIngredientes } )
  }

  return (
    <>
      <div name="cabecalho" style={{border:'1px solid'}}>
        <h1>Receita de: {minhaReceita.receita}</h1>
        <p>Porções: {minhaReceita.porcoes}</p>
        <p>Tempo de preparo: {minhaReceita.tempo} min</p>
        <p>Custo da receita: R$ {minhaReceita.ingredientes.reduce((acum, i) => acum+(i.quantidade*i.precoUnitario),0).toFixed(2)}</p>
      </div>
      <div name="listaDeIngredientes">
        <h1>Lista de ingredientes</h1>
        {minhaReceita.ingredientes.map(
          item => {
            return(
              <div>
                <label>
                  Ingrediente:
                  <input value={item.item}></input>
                </label>
                <label>
                  Quantidade:
                  <input name="quantidade" value={item.quantidade} onChange={(e)=>handleChange(e, item.id)}></input>
                </label>
                <label>
                  Unidade:
                  <input value={item.unidade}></input>
                </label>
                <label>
                  Preço unitário:
                  <input value={item.precoUnitario}></input>
                </label>
              </div>
            )
          }
        )}

      </div>
      <div name="passosDaElaboracao">
        <h2>Passos de confecção da receita</h2>
        {
          minhaReceita.preparo.map(
            etapa =>
            (
              <div>
                <img src={`${process.env.PUBLIC_URL}/img/passo${etapa.passo}.jpg`} style={{width:'50px', height:'5ppx'}}></img>
                <p>{etapa.descricao}</p>
              </div>
            )
           
        )}

      </div>
    </>
  );
}
