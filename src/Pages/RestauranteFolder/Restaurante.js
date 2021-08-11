import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import {
  Botao,
  CardBotao,
  CardDetalheProduto,
  CardName,
  CardNomeProduto,
  CardPreco,
  CardRestaurant,
  DetalheProduto,
  Imagem,
  ListName,
  NomeProduto,
  Preco,
} from "../RestauranteFolder/styled";
import { CardImagem } from "../HomeFolder/styled";
import { ContainerDetail, Card, CardDetail } from "./styled";
import { BASE_URL } from "../../Constants/url";
import Modal from "./modal";
import formatCurrency from "../../Constants/util";


function Restaurante(props) {

  useProtectedPage();

  const [modalVisibily, setModalVisibily] = useState(false);
  const [product, setProduct] = useState(null);


  const params = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${BASE_URL}/restaurants/${params.id}`, {
        headers: {
          auth: token,
        },
      })
      .then((response) => {
        props.setListRestaurant(response.data.restaurant.products);
        props.setRestaurantCart(response.data.restaurant);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [params.id]);

  const addToCart = (qty) => {
    const productAddingToCart = product;
    const cartItems = props.productInCart;
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === productAddingToCart.id) {
        item.count = Number(item.count) + Number(qty);
        alreadyInCart = true;
      }
    });
    if (alreadyInCart === false) {
      cartItems.push({ ...productAddingToCart, count: Number(qty) });
    }
    props.setProductInCart(cartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    const restaurantLocalStorage = JSON.parse(localStorage.getItem("restaurantCart"));
    if (restaurantLocalStorage === null) {
      localStorage.setItem("restaurantCart", JSON.stringify(props.restaurantCart));
    }
    else if (restaurantLocalStorage.id !== props.restaurantCart.id) {
      localStorage.setItem("restaurantCart", JSON.stringify(props.restaurantCart));
      props.setProductInCart([]);
      localStorage.removeItem("cartItems", JSON.stringify(cartItems));
      alert("Você adicionou um produto de outra loja! Seu carrinho antigo foi limpo. Adicione novamente o produto desejado ao carrinho!");
    }
    setModalVisibily(false);
  };

  const openModal = (product) => {
    setModalVisibily(true);
    setProduct(product);
  };

  return (
    <ContainerDetail>
      <CardRestaurant>
        <h3>Restaurante</h3>
      </CardRestaurant>
      {modalVisibily ? <Modal addRestaurant={addToCart} /> : null}
      {props.listRestaurant &&
        props.listRestaurant.map((list) => {
          return (
            <CardDetail key={list.id}>
              <Card>
                <Imagem src={list.photoUrl}></Imagem>
              </Card>
              <CardName>
                <ListName>
                  <CardNomeProduto>
                    <NomeProduto>{list.name}</NomeProduto>
                  </CardNomeProduto>
                  <CardDetalheProduto>
                    <DetalheProduto>{list.description}</DetalheProduto>
                  </CardDetalheProduto>
                </ListName>
                <CardPreco>
                  <Preco>{formatCurrency(list.price)}</Preco>
                </CardPreco>
              </CardName>
              <CardBotao>
                <Botao onClick={() => openModal(list)}>
                  Adicionar
                </Botao>

              </CardBotao>
            </CardDetail>
          );
        })}
    </ContainerDetail>
  );
}

export default Restaurante;
