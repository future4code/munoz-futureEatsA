import React from 'react';
import styled from 'styled-components';
import burgerPhoto from '../../assets/mao-santa-burguer.png';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import useProtectedPage from '../../hooks/useProtectedPage';

const CartPageContainer = styled.div`
  margin: 0 auto;
  width: 360px;
  height: 640px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitleContainer = styled.div`
  width: 360px;
  height: 44px;
  background-color: white;
  margin: 20px 92px 0 93px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-family: Roboto;
  font-size: 16px;
  width: 360px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddressContainer = styled.div`
  width: 360px;
  height: 76px;
  margin: 1px 0;
  background-color: #eeeeee;
`;

const AddressTitle = styled.div`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  margin: 16px 16px 4px 16px;
`;

const Address = styled.div`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: black;
  margin: 4px 16px 16px 16px;
`;

const ShopName = styled.div`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #5cb646;
  margin: 16px 16px 4px 16px;
`;

const ShopAddress = styled.div`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  margin: 4px 16px;
`;

const ShopDeliveryTime = styled.div`
  width: 328px;
  height: 18px;
  margin: 4px 16px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  margin: 4px 16px;
`;

const CartCard = styled.div`
  width: 328px;
  height: 112px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin: 4px 16px;
  margin-left: 16px;
  display: flex;
`;

const CardInfo = styled.div`
  margin: 18px 0 15px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardInfoName = styled.div`
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #5cb646;
  width: 167px;
  height: 18px;
`;

const CardInfoDescription = styled.div`
  font-family: Roboto;
  font-size: 12px;
  letter-spacing: -0.29px;
  color: #b8b8b8;
  width: 200px;
  height: 30px;
`;

const CardInfoPrice = styled.div`
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: black;
  width: 118px;
  height: 19px;
`;

const CardInfoQty = styled.div`
  height: 31px;
  padding: 0 11.5px;
  border-radius: 0 8px 0 8px;
  border: solid 1px #5cb646;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -1px;
  left: -16px;
  letter-spacing: -0.39px;
  color: #5cb646;
  font-family: Roboto;
  font-size: 16px;
`;

const CardInfoRemoveButton = styled.button`
  width: 90px;
  height: 31px;
  padding: 8px 23px 9px 24px;
  border-radius: 8px 0 8px 0;
  border: solid 1px #e02020;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: relative;
  top: 82px;
  left: -106px;
  letter-spacing: -0.29px;
  color: #e02020;
`;

const ShippingFee = styled.div`
  width: 104px;
  height: 18px;
  margin: 16px 16px 8px 240px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: black;
  display: flex;
  justify-content: end;
`;

const TotalPriceContainer = styled.div`
  width: 328px;
  height: 21px;
  margin: 8px 16px;
  display: flex;
  justify-content: space-between;
`;

const TotalPriceTitle = styled.div`
  width: 164px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: black;
`;

const TotalPriceValue = styled.div`
  width: 164px;
  height: 21px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.43px;
  color: #5cb646;
  display: flex;
  justify-content: end;
`;

const PaymentContainer = styled.div`
  margin: 8px 16px;
`;

const PaymentContainerTitle = styled.div`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: black;
  margin-bottom: 8px;
`;

const DivBar = styled.hr`
  width: 328px;
  margin: 8px 0;
  border-top: solid 1px black;
`;

const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const PaymentSelect = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid black;
  border-radius: 50%;
  color: white;
  font-size: 8px;
`;

const PaymentOptionTitle = styled.div`
  width: 296px;
  height: 18px;
  margin-left: 8px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: black;
`;

const ConfirmButton = styled.button`
  width: 328px;
  height: 42px;
  padding: 12px 16px;
  border-radius: 2px;
  background-color: #5cb646;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 16px;
  margin-bottom: 16px;
`;

const Footer = styled.footer`
  width: 360px;
  padding: 10px 0;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: sticky;
  bottom: 0;
`;

const PhantomDiv = styled.div`
  height: 55px;
  width: 360px;
  color: white;
  padding: 10px 0;
  font-size: 2em;
`;

function Cart() {
  // useProtectedPage()
  return (
    <CartPageContainer>
      <PageTitleContainer>
        <Title>MEU CARRINHO</Title>
      </PageTitleContainer>
      <AddressContainer>
        <AddressTitle>Endereço de Entrega</AddressTitle>
        <Address>Rua Alessandra Vieira, 42</Address>
      </AddressContainer>
      <ShopName>Bullger Vila Madalena</ShopName>
      <ShopAddress>R. Fradique Coutinho, 1136 - Vila Madalena</ShopAddress>
      <ShopDeliveryTime>30 - 45 min</ShopDeliveryTime>
      <CartCard>
        <img src={burgerPhoto} alt="burguer" />
        <CardInfo>
          <CardInfoName>Stencil</CardInfoName>
          <CardInfoDescription>Pão, carne, queijo, cebola roxa, tomate, alface e molho.</CardInfoDescription>
          <CardInfoPrice>R$46,00</CardInfoPrice>
        </CardInfo>
        <CardInfoQty>2</CardInfoQty>
        <CardInfoRemoveButton>remover</CardInfoRemoveButton>
      </CartCard>
      <CartCard>
        <img src={burgerPhoto} alt="burguer" />
        <CardInfo>
          <CardInfoName>Cheese Fries</CardInfoName>
          <CardInfoDescription>Porção de fritas temperada com páprica e queijo derretido.</CardInfoDescription>
          <CardInfoPrice>R$15,00</CardInfoPrice>
        </CardInfo>
        <CardInfoQty>1</CardInfoQty>
        <CardInfoRemoveButton>remover</CardInfoRemoveButton>
      </CartCard>
      <ShippingFee>Frete: R$6,00</ShippingFee>
      <TotalPriceContainer>
        <TotalPriceTitle>SUBTOTAL</TotalPriceTitle>
        <TotalPriceValue>R$67,00</TotalPriceValue>
      </TotalPriceContainer>
      <PaymentContainer>
        <PaymentContainerTitle>Forma de pagamento</PaymentContainerTitle>
        <DivBar />
        <PaymentOption>
          <PaymentSelect>A</PaymentSelect>
          <PaymentOptionTitle>Dinheiro</PaymentOptionTitle>
        </PaymentOption>
        <PaymentOption>
          <PaymentSelect>A</PaymentSelect>
          <PaymentOptionTitle>Cartão de Crédito</PaymentOptionTitle>
        </PaymentOption>
      </PaymentContainer>
      <ConfirmButton>Confirmar</ConfirmButton>
      <PhantomDiv>A</PhantomDiv>
      <Footer>
        <><HomeOutlinedIcon
          fontSize="large" /></>
        <><ShoppingCartOutlinedIcon
          fontSize="large" /></>
        <><PersonOutlineOutlinedIcon
          fontSize="large" /></>
      </Footer>
    </CartPageContainer>
  );
};

export default Cart;
