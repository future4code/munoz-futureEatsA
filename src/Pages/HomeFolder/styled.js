import styled from "styled-components";

export const BarraScroll = styled.div`
width: 90vw;
display: flex;
overflow-x: scroll;

`;


export const Lista = styled.p`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-weight: 800;
font-size: 18px;
font-weight: 500;
`;


export const ContainerInput = styled.div `
margin: 18px 28px 6px;
font-family: Roboto;
text-align: center;
width: 90vw;
text-align: start;    
`

export const ContainerLista = styled.div `
margin: 5px 20px;
`


//////
export const CardContainer = styled.div `
width: 90vw;
margin-top: 10px;
box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
border-radius: 10px;
height: 40vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const CardImg = styled.img `
border-radius: 10px 10px 0px 0px;
width: 90vw;
height: 65%;

`


export const ScreenContainer = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  
  
 
`
export const Root = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  
`

export const Tittle = styled.p`
font-size: 18px;
font-family: Roboto;
text-align: center;
font-weight: 500;
margin-top: 33px;
`
export const Info = styled.p`
display: flex;
justify-content: space-between;
font-size: 18px;
margin-bottom: 10px;
`
export const CardImagem = styled.div `
width: 90vw;
margin-top: 10px;
border: 1px solid black;
border-radius: 10px;
`
export const CardInfo = styled.div `
width: 80vw;
padding: 5px;
height: 30%;
margin-bottom: 10px;
`
export const Footer = styled.footer`
  width: 100vw;
  padding: 10px 0;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
`;

export const Categoria = styled.p `
&:active{
  color: #5cb646;
}
&:hover{
  color: #5cb646;
  cursor: pointer;
}


`
