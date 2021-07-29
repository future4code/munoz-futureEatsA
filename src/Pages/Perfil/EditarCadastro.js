import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';


function EditarPerfilUser () {
  useProtectedPage()
  
  return (
    <>
      <h1>Oi</h1>
    </>
  );
}

export default EditarPerfilUser;
