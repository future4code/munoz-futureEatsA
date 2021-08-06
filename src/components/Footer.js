import React from 'react'
import styled from 'styled-components'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { useHistory } from 'react-router-dom';
import { goToCarrinho, goToHome, goToPerfil} from '../routes/cordinator';


const Categoria = styled.p `
&:active{
  color: #5cb646;
}
&:hover{
  cursor: pointer;
  color: #5cb646;
}

`
const Raiz = styled.footer`
  width: 100vw;
  padding: 10px 0;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: sticky;
  bottom: 0;
`;

const Footer = () => {
    const history = useHistory()

    return (

        <Raiz>
            <Categoria><HomeOutlinedIcon fontSize="large"  onClick={() => goToHome(history)}/></Categoria>
            <Categoria><ShoppingCartOutlinedIcon fontSize="large"onClick={() => goToCarrinho(history)} /></Categoria>
            <Categoria><PersonOutlineOutlinedIcon fontSize="large" onClick={() => goToPerfil(history)}/></Categoria>
        </Raiz>
    )


}

export default Footer;