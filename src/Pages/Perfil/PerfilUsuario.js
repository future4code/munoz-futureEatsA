import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import {BASE_URL} from '../../Constants/url'
import useRequestProfile from '../../services/useRequestProfile'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { 
  ScreenContainer, 
  Tittle,
  Tittle2, 
  Container1, 
  Container2,
  Container3,
  CardHistory,
  Linha,
  End,
  Icon,  
  Linha1,
  Linha3} from './EditarPerfil/styled'
import { useHistory } from 'react-router-dom';
import {goToEditarEndereco, goToEditarCadastro } from '../../routes/cordinator'





const PerfilUsuario = () => {
  const history = useHistory()
  useProtectedPage()
  const dataProfile = useRequestProfile([], `${BASE_URL}/profile`) 
  
  const profile = () => {
    goToEditarCadastro(history)
  }

  const address = () => {
    goToEditarEndereco(history)
  }
  
  return (
    <ScreenContainer>
      <Tittle>Meu Perfil</Tittle>
     {dataProfile?
     <div>
      <Container1>
        <Icon onClick={profile}>
          <CreateOutlinedIcon/>
        </Icon>
        <p>{dataProfile.name}</p>
        <p>{dataProfile.email}</p>  
        <p>{dataProfile.cpf}</p>
      </Container1>
      <Container2>
        <Icon onClick={address}>
          <CreateOutlinedIcon/>
        </Icon>
        <End>Endereço Cadastrado</End>
        <p>{dataProfile.address}</p>
      </Container2>
      <Tittle2>Historico de pedidos<br></br><Linha></Linha></Tittle2>
      <Container3>
        <CardHistory>
          <Linha1>Burguer Exemplo</Linha1>
          <p>23 outubro 2019</p>
          <Linha3>SUBTOTAL R$52,79</Linha3>
        </CardHistory>
        <CardHistory>
          <Linha1>Burguer Exemplo</Linha1>
          <p>23 outubro 2019</p>
          <Linha3>SUBTOTAL R$52,79</Linha3>
        </CardHistory>
      </Container3>
      </div>: <p>erro</p>}
    </ScreenContainer>
  );
}

export default PerfilUsuario;
