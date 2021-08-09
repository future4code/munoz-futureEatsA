import React, { useState } from 'react'
import styled from 'styled-components';

const ContainerModal = styled.div ` 
width: 100%;
height: 100vh;
position: absolute;
z-index: 10;
background-color:  RGBA( 169, 169, 169, .5 );
display: flex;
justify-content: center;
align-self: center;

`
const CardModal = styled.div ` 
background-color: white;
width: 80%;
height: 20%;
margin-top: 200px;
`
const CardBotao = styled.div ` 
display: flex;
align-items: center;
margin-top: 15px;
margin-left: 80px;
`
const CardTexto = styled.h4 ` 
display: flex;
justify-content: center;
`
const CardOption = styled.select `
margin-left: 50px;
width: 200px;
`
const Botao = styled.button `
border: 1px solid green;
display: flex;
align-items: center;
justify-content: center;
width: 150px;
height: 30px;
color: green;
background-color: white;
&:hover {
      background-color: #32CD32;
    color: white;
  }
`

const Modal = (props) => {

    const [quantity, setQuantity] = useState(1);

    const handleChange = (event) => {
        setQuantity(event.target.value);
    };

    return <ContainerModal>
        <CardModal>
            <CardTexto>Selecione a quantidade desejada</CardTexto>
            <CardOption
                value={quantity}
                onChange={handleChange}>
                <option value={Number(1)}>1</option>
                <option value={Number(2)}>2</option>
                <option value={Number(3)}>3</option>
                <option value={Number(4)}>4</option>
                <option value={Number(5)}>5</option>
            </CardOption>
            <CardBotao>
                <Botao onClick={() => props.addRestaurant(quantity)}>Adicionar ao Carrinho</Botao>
            </CardBotao>
        </CardModal>
    </ContainerModal>
}
export default Modal;