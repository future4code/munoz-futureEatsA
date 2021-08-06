import React from 'react'
import { ScreenContainer } from './styled'
import CadastroEndForm from './CadastroEndForm'
import { Tittle2 } from './styled'
import useProtectedPage from '../../../hooks/useProtectedPage'

const CadastroEnd = ({setRightButtonText}) => {
   useProtectedPage()
   
  return (
    <ScreenContainer>     
      <Tittle2>Endereço</Tittle2>
      <CadastroEndForm />
    </ScreenContainer>
  )
}

export default CadastroEnd
