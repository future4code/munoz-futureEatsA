import React from 'react'
import { ScreenContainer } from './styled'
import PerfilForm from './PerfilForm'
import { Tittle2 } from './styled'
import useProtectedPage from '../../../hooks/useProtectedPage'

const EditarPerfil = ({setRightButtonText}) => {
   useProtectedPage()
   
  return (
    <ScreenContainer>     
      <Tittle2>Editar Perfil</Tittle2>
      <PerfilForm />
    </ScreenContainer>
  )
}

export default EditarPerfil
