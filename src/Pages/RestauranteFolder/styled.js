import styled from "styled-components"

export const CardDetail = styled.div ` 
border: 1px solid #D3D3D3;
width: 97%;
height: 20%;
margin: .7em 0 0 0;
margin-left: 1.5%;
border-radius: 1em;
display: flex;
`
export const Imagem = styled.img ` 
//border: 1px solid black;
width: 100%;
height: 99%;
border-radius: 10px 0 0 10px;
`
export const Card = styled.div ` 

`
export const ContainerDetail = styled.div ` 
max-width: 100vw;
height: 100vh;

`
export const CardName = styled.div ` 
margin-right: 0%;
width: 300px;
`
export const ListName = styled.div ` 
width: 90%;
`
export const CardRestaurant = styled.div ` 
text-align: center;
width: 100%;
`
export const CardNomeProduto = styled.div ` 
height: 4vh; 
display: flex;
justify-content: center;
`
export const NomeProduto = styled.p ` 
color: #32CD32;
font-weight: 100;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
margin-top: 3%;
`
export const CardDetalheProduto = styled.div ` 
margin-left: 1em;
height: 4em;
width: 8em;
`
export const DetalheProduto = styled.p ` 
color: #D3D3D3;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
margin-top: 0.5em;
`
export const Preco = styled.p ` 
color: #1C1C1C;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
margin-top: 0.5em;
`
export const CardPreco = styled.div `  
margin-left: 1em;
height: 2em;
width: 5em;
`
export const CardBotao = styled.div ` 
margin-top: 5.4em;

`
export const Botao = styled.p ` 
border: 1px solid green;
display: flex;
align-items: center;
justify-content: center;
width: 100px;
height: 30px;
border-radius: 10px 0 10px 0;
&:hover {
      background-color: #32CD32;
    color: white;
  }
`
