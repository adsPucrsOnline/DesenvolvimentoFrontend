import React from 'react';
import { useParams } from 'react-router-dom';

function Products() {

  const { id } = useParams();

  return <h1>Products  {id} </h1>;
}

export default Products;