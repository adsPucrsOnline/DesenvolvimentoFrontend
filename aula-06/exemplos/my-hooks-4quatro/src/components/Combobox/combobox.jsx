import React, { useReducer } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const options = [
  { value: 'Option 0', label: 'Escolha um Estado' , state:'nenhum'},
  { value: 'Option 1', label: 'Opção 1' , state:'RS', stateName: 'Rio Grande do Sul' },
  { value: 'Option 2', label: 'Opção 2' , state:'SC', stateName: 'Santa Catarina' },
  { value: 'Option 3', label: 'Opção 3' , state:'PR', stateName: 'Paraná' },
];

const initialState = { selectedOption: options[0] };

function reducer(state, action) {
  switch (action.type) {
    case 'SELECT_OPTION':
      const stateName = options.find(option => option.state === action.payload.state)?.stateName || '';
      const updatedOption = { ...action.payload, stateName };
      return { selectedOption: updatedOption };
    default:
      return state;
  }
}

function Combobox() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleSelect(option) {
    dispatch({ type: 'SELECT_OPTION', payload: option });
  }

  return (
    <div className='container mt-3'>
      <DropdownButton variant="warning" id="dropdown-item-button" title={state.selectedOption.label}>
        {options.map((option, index) => (
          <Dropdown.Item key={index} as="button" onClick={() => handleSelect(option)}>
            {option.label} - {option.state}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <p>Você selecionou: {state.selectedOption.stateName}</p>
    </div>
  );
}

export default Combobox;
