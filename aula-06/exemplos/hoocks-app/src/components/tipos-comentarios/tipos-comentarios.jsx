import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './tipos-comentarios.css';
import { wait } from '@testing-library/user-event/dist/utils';

const TiposComentarios = () => {
  const [resourceType, setresourceType] = useState("posts")

  /*
  useEffect(() => {
     console.log("Renderizando " + resourceType);
  }, [resourceType]) // só quando muda o resourceType
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => console.log(json))
  }, [resourceType]) // só quando muda o resourceType
  */
  useEffect(() => {
    const fetchResourceType = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${resourceType}`
        );
      const responseJSON = await response.json();

      console.log(responseJSON);
    }
    
    fetchResourceType();
  }, [resourceType]) // só quando muda o resourceType


  const changeResourceType = (resourceType) => {
    setresourceType(resourceType);
  }

  return (
  <div className="tipos-comentarios" data-testid="TiposComentarios">
    <h3>Tipos Comentarios </h3>
    <h1>{resourceType}</h1>
    <button onClick={() => changeResourceType("Posts")}>Posts</button>
    <button onClick={() => changeResourceType("comments")}>comentario</button>   
    <button onClick={() => changeResourceType("todos")}>tarefas</button>
  </div>
  );
};

TiposComentarios.propTypes = {};

TiposComentarios.defaultProps = {};

export default TiposComentarios;
