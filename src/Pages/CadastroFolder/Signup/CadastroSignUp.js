import React from 'react'
import logo from '../../../assets/logo-signUp.png'
import { ScreenContainer } from '../SignUpEnd/styled'
import CadastroForm from './CadastroForm'
import { LogoImage } from '../SignUpEnd/styled'
import { Tittle } from '../SignUpEnd/styled'
import useUnProtectedPage from '../../../hooks/useUnprotectedPage'

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