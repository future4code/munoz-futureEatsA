import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';


function Restaurante () {
  useProtectedPage()
  
  return (
    <>
      <h1>Res</h1>
    </>
  );
}

export default Restaurante;
