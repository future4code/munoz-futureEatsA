import styled from 'styled-components';
import { primaryColor, neutralColor } from '../../Constants/colors';

export const CartPageContainer = styled.div`
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageTitleContainer = styled.div`
  width: 100vw;
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

export const Title = styled.div`
  font-family: Roboto;
  font-size: 16px;
  width: 100vw;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddressContainer = styled.div`
  width: 100vw;
  height: 76px;
  margin: 1px 0;
  background-color: #eeeeee;
`;

export const AddressTitle = styled.div`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: ${neutralColor};
  margin: 16px 16px 4px 16px;
`;

export const Address = styled.div`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: black;
  margin: 4px 16px 16px 16px;
`;

export const ShopName = styled.div`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: ${primaryColor};
  margin: 16px 16px 4px 16px;
`;

export const ShopAddress = styled.div`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: ${neutralColor};
  margin: 4px 16px;
`;

export const ShopDeliveryTime = styled.div`
  width: 328px;
  height: 18px;
  margin: 4px 16px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: ${neutralColor};
  margin: 4px 16px;
`;

export const CartCard = styled.div`
  width: 328px;
  height: 112px;
  border-radius: 8px;
  border: solid 1px ${neutralColor};
  margin: 4px 16px;
  margin-left: 16px;
  display: flex;
`;

export const CardInfo = styled.div`
  margin: 18px 0 15px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardInfoName = styled.div`
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: ${primaryColor};
  width: 167px;
  height: 18px;
`;

export const CardInfoDescription = styled.div`
  font-family: Roboto;
  font-size: 12px;
  letter-spacing: -0.29px;
  color: ${neutralColor};
  width: 200px;
  height: 30px;
`;

export const CardInfoPrice = styled.div`
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: black;
  width: 118px;
  height: 19px;
`;

export const CardInfoQty = styled.div`
  height: 31px;
  padding: 0 11.5px;
  border-radius: 0 8px 0 8px;
  border: solid 1px ${primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -1px;
  left: -16.5px;
  letter-spacing: -0.39px;
  color: ${primaryColor};
  font-family: Roboto;
  font-size: 16px;
`;

export const CardInfoRemoveButton = styled.button`
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
  left: -106.5px;
  letter-spacing: -0.29px;
  color: #e02020;
`;

export const ShippingFee = styled.div`
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

export const TotalPriceContainer = styled.div`
  width: 328px;
  height: 21px;
  margin: 8px 16px;
  display: flex;
  justify-content: space-between;
`;

export const TotalPriceTitle = styled.div`
  width: 164px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: black;
`;

export const TotalPriceValue = styled.div`
  width: 164px;
  height: 21px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.43px;
  color: ${primaryColor};
  display: flex;
  justify-content: end;
`;

export const PaymentContainer = styled.div`
  margin: 8px 16px;
`;

export const PaymentContainerTitle = styled.div`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: black;
  margin-bottom: 8px;
`;

export const DivBar = styled.hr`
  width: 328px;
  margin: 8px 0;
  border-top: solid 1px black;
`;

export const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const PaymentSelect = styled.input`
  width: 16px;
  height: 16px;
  border: 1px solid black;
  color: white;
  font-size: 8px;
  &:after {
    background-color: ${neutralColor};  
  };
`;

export const PaymentOptionTitle = styled.label`
  width: 296px;
  height: 18px;
  margin-left: 4px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: black;
`;

export const ConfirmButton = styled.button`
  width: 328px;
  height: 42px;
  padding: 12px 16px;
  border-radius: 2px;
  background-color: ${primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 16px;
  margin: 0 16px 16px 16px;
`;

export const EmptyCartContainer = styled.div`
  width: 100vw;
  height: 80vh;
`;

export const EmptyCartTitle = styled.div`
  font-family: Roboto;
  font-size: 16px;
  width: 100vw;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FoodPhoto = styled.img`
  width: 96px;
  height: 112px;
  object-fit: cover;
  border-radius: 8px 0 0 8px;
`;

export const CartContainer = styled.div`
  width: 100vw;
  min-height: 80vh;
`;