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


function Restaurante(props) {
  useProtectedPage();
  const [modalVisibily, setModalVisibily] = useState(false)
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
        console.log(response.data);
        props.setListRestaurant(response.data.restaurant.products);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [params.id]);
  
  const addRestaurant = (produto) => {
    const restaurant = props.productInCart.find((restaurant) => {
      if (restaurant.id === produto.id) {
        return true;
      }
      return false;
    });

    if (!restaurant) {
      const novoCarrinho = {
        ...produto,
        quantity: 1,
      };
      const copiaCarrinho = [...props.productInCart, novoCarrinho];
      props.setProductInCart(copiaCarrinho);
    } else {
      const copiaCarrinho = props.productInCart.map((restaurant) => {
        if (restaurant.id === produto.id) {
          return {
            ...restaurant,
            quantity: restaurant.quantity + 1,
          };
        } else {
          return restaurant;
        }
      });
      props.setProductInCart(copiaCarrinho);
    }
  
  };
  return (
    <ContainerDetail>
      <CardRestaurant>
        <h3>Restaurante</h3>
      </CardRestaurant>
      {modalVisibily? <Modal addRestaurant={addRestaurant}/>: null }
      {props.listRestaurant &&
        props.listRestaurant.map((list) => {
          return (
            <CardDetail>
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
                  <Preco>R$ {list.price}0</Preco>
                </CardPreco>
              </CardName>
              <CardBotao>
                <Botao onClick={() => setModalVisibily(true) }>
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
