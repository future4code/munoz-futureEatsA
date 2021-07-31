import React from 'react'
import logo from '../../assets/logo-signUp.png'
import { ScreenContainer } from './styled'
import CadastroEndForm from './CadastroEndForm'
import { LogoImage } from './styled'
import { Tittle } from './styled'
import { Tittle2 } from './styled'
import useProtectedPage from '../../hooks/useUnprotectedPage'

const CadastroEnd = ({setRightButtonText}) => {
   useProtectedPage()
   
  return (
    <ScreenContainer>     
      <Tittle2>Meu Endereço</Tittle2>
      <CadastroEndForm />
    </ScreenContainer>
  )
}

export default CadastroEnd
