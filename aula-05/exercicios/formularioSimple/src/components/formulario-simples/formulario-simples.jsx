import React, { useState } from "react";
import './formulario-simples.css'

function FormsSimples() {
  const [formData, setFormData] = useState({ nome: "", peso: "", altura: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formResult, setFormResult] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    setFormResult(formData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="FormsSimples">
        <label>
          Nome:
          <input className="form-input"
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Peso:
          <input className="form-input"
            type="number"
            name="peso"
            value={formData.peso}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Altura:
          <input className="form-input"
            type="number"
            name="altura"
            value={formData.altura}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <button type="submit" onClick={handleFormSubmit}>
          Enviar
        </button>
      </div>
      {formSubmitted && (
        <div>
          <h2>Dados do formulário:</h2>
          <p>Nome: {formResult.nome}</p>
          <p>Peso: {formResult.peso}</p>
          <p>Altura: {formResult.altura}</p>
        </div>
      )}
    </form>
  );
}

export default FormsSimples;