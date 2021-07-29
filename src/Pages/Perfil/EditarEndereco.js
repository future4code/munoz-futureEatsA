import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';


function EditarEndereco () {
  useProtectedPage()
  
  return (
    <>
      <h1>Oi</h1>
    </>
  );
}

export default EditarEndereco;