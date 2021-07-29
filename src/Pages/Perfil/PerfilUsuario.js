import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';


function PerfilUsuario () {
  useProtectedPage()
  
  return (
    <>
      <h1>PP</h1>
    </>
  );
}

export default PerfilUsuario;
