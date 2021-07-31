import React from 'react'
import logo from '../../assets/logo-signUp.png'
import { ScreenContainer } from './styled'
import CadastroForm from './CadastroForm'
import { LogoImage } from './styled'
import { Tittle } from './styled'
import useUnProtectedPage from '../../hooks/useUnprotectedPage'

const CadastroSignUp = ({setRightButtonText}) => {
   useUnProtectedPage()
   
  return (
    <ScreenContainer>
      
      <LogoImage src={logo}/>
      <Tittle>Cadastrar</Tittle>
      <CadastroForm />
    </ScreenContainer>
  )
}

export default CadastroSignUp