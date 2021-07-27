import React from 'react'
import logo from '../../assets/logo-signUp.png'
import { ScreenContainer } from './styled'
import CadastroForm from './CadastroForm'
import { LogoImage } from './styled'
import { Tittle } from './styled'
/* import useUnprotectedPage from '../../hooks/useUnprotectedPage'
 */
const CadastroSignUp = ({setRightButtonText}) => {
  /* useUnprotectedPage() */
  return (
    <ScreenContainer>
      
      <LogoImage src={logo}/>
      <Tittle>Cadastrar</Tittle>
      <CadastroForm setRightButtonText={setRightButtonText}/>
    </ScreenContainer>
  )
}

export default CadastroSignUp