import React from 'react';
import './cao.css'
import {imagemCao} from '../../constantes'
import PropTypes from 'prop-types';

const imagem = imagemCao

const CaoUm = () => (
   <>
      <img 
         src={imagem}
         alt="Dogs" 
         className="cao-estilo"
      />
      <ul>
         <li>Cão 1</li>
         <li>Cão 2</li>
         <li>Cão 3</li>
      </ul>
   </>
);

CaoUm.propTypes = {};

CaoUm.defaultProps = {};

export default CaoUm;
