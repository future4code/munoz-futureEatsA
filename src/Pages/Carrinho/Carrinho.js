import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../Constants/url';
import {
  CartPageContainer,
  PageTitleContainer,
  Title,
  AddressContainer,
  AddressTitle,
  Address,
  ShopName,
  ShopAddress,
  ShopDeliveryTime,
  CartCard,
  CardInfo,
  CardInfoName,
  CardInfoDescription,
  CardInfoPrice,
  CardInfoQty,
  CardInfoRemoveButton,
  ShippingFee,
  TotalPriceContainer,
  TotalPriceTitle,
  TotalPriceValue,
  PaymentContainer,
  PaymentContainerTitle,
  DivBar,
  PaymentOption,
  PaymentSelect,
  PaymentOptionTitle,
  ConfirmButton,
  EmptyCartContainer,
  EmptyCartTitle,
  FoodPhoto,
  CartContainer
} from './styled';
import useProtectedPage from '../../hooks/useProtectedPage';
import axios from 'axios';
import Footer from '../../Components/Footer';
import CircularProgress from '@material-ui/core/CircularProgress';
import formatCurrency from '../../Constants/util';
import { goToHome } from '../../routes/cordinator';
import { useHistory } from 'react-router-dom';

function Cart(props) {

  useProtectedPage()

  const history = useHistory();

  const [deliveryAddress, setdeliveryAddress] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('money');

  const token = localStorage.getItem("token")

  const getDeliveryAddress = () => {
    axios
      .get(`${BASE_URL}/profile/address`,
        {
          headers: {
            auth: token
          }
        })
      .then((res) => {
        setdeliveryAddress(res.data.address);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const removeItem = (food) => {
    const cartItems = props.cartItem;
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === food.id) {
        item.count = 0;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...food, count: 1 });
    }
    props.setProductInCart(cartItems.filter((x) => x.count > 0));
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const handlePaymentInput = (event) => {
    setPaymentMethod(event.target.value);
    console.log(event.target.value);
  };

  const placeOrder = () => {
    const cartItems = props.cartItem;
    const products = [];
    cartItems.forEach((food) => {
      products.push({ ...products, id: food.id, quantity: food.count });
    });
    const data = JSON.stringify({
      "products": products,
      "paymentMethod": paymentMethod
    });
    const config = {
      method: 'post',
      url: `${BASE_URL}/restaurants/${props.restaurantDetails.id}/order`,
      headers: {
        'auth': token,
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then((res) => {
        props.setProductInCart([]);
        localStorage.removeItem("cartItems", JSON.stringify(cartItems));
        localStorage.setItem("restaurantCart", JSON.stringify(props.restaurantDetails));
        alert("Pedido enviado!");
        goToHome(history);
      })
      .catch((err) => {
        if(err.response.data.message === "Já existe um pedido em andamento"){
          alert("Você já tem um pedido em andamento!");
        }
        else{
          alert("Ocorreu um erro ao realizar seu pedido.")
        }
      });
  }
  useEffect(() => {
    getDeliveryAddress();
  }, []);

  if (props.cartItem.length > 0 && deliveryAddress) {
    return (
      <CartPageContainer>
        <PageTitleContainer>
          <Title>MEU CARRINHO</Title>
        </PageTitleContainer>
        <AddressContainer>
          <AddressTitle>Endereço de Entrega</AddressTitle>
          <Address>{deliveryAddress.street}, {deliveryAddress.number}</Address>
        </AddressContainer>
        <CartContainer>
          <ShopName>{props.restaurantDetails.name}</ShopName>
          <ShopAddress>{props.restaurantDetails.address}</ShopAddress>
          <ShopDeliveryTime>{props.restaurantDetails.deliveryTime} - {Math.abs(props.restaurantDetails.deliveryTime + 15)} min</ShopDeliveryTime>
          {props.cartItem.map((food) => {
            return (
              <CartCard key={food.id}>
                <FoodPhoto src={food.photoUrl} alt={food.name} />
                <CardInfo>
                  <CardInfoName>{food.name}</CardInfoName>
                  <CardInfoDescription>{food.description}</CardInfoDescription>
                  <CardInfoPrice>{formatCurrency(food.price)}</CardInfoPrice>
                </CardInfo>
                <CardInfoQty>{food.count}</CardInfoQty>
                <CardInfoRemoveButton onClick={() => removeItem(food)}>remover</CardInfoRemoveButton>
              </CartCard>
            )
          })}
          <ShippingFee>Frete: {formatCurrency(props.restaurantDetails.shipping)}</ShippingFee>
          <TotalPriceContainer>
            <TotalPriceTitle>SUBTOTAL</TotalPriceTitle>
            <TotalPriceValue>{formatCurrency(Math.abs((props.cartItem.reduce((a, c) => a + c.price * c.count, 0)) + (props.restaurantDetails.shipping)))}</TotalPriceValue>
          </TotalPriceContainer>
          <PaymentContainer>
            <PaymentContainerTitle>Forma de pagamento</PaymentContainerTitle>
            <DivBar />
            <PaymentOption>
              <PaymentSelect
                type="radio"
                value='money'
                onChange={handlePaymentInput}
                id="money-radio"
                name="payment-method"
                defaultChecked />
              <PaymentOptionTitle for="money-radio">Dinheiro</PaymentOptionTitle>
            </PaymentOption>
            <PaymentOption>
              <PaymentSelect
                type="radio"
                value='creditcard'
                onChange={handlePaymentInput}
                id="creditcard-radio"
                name="payment-method" />
              <PaymentOptionTitle for="creditcard-radio">Cartão de Crédito</PaymentOptionTitle>
            </PaymentOption>
          </PaymentContainer>
          <ConfirmButton onClick={placeOrder}>Confirmar</ConfirmButton>
          <Footer />
        </CartContainer>
      </CartPageContainer>
    )
  }
  else if (props.cartItem.length === 0 && deliveryAddress) {
    return (
      <CartPageContainer>
        <PageTitleContainer>
          <Title>MEU CARRINHO</Title>
        </PageTitleContainer>
        <AddressContainer>
          <AddressTitle>Endereço de Entrega</AddressTitle>
          <Address>{deliveryAddress.street}, {deliveryAddress.number}</Address>
        </AddressContainer>
        <EmptyCartContainer>
          <EmptyCartTitle>SEU CARRINHO ESTÁ VAZIO!</EmptyCartTitle>
        </EmptyCartContainer>
        <Footer />
      </CartPageContainer>
    );
  }
  else if (isLoading) {
    return <CartPageContainer>
      <CircularProgress />
    </CartPageContainer>
  };
};
export default Cart;
