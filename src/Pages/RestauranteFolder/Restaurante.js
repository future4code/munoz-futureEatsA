
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import { Botao, CardBotao, CardDetalheProduto, CardName, CardNomeProduto, CardPreco, CardRestaurant, DetalheProduto, Imagem, ListName, NomeProduto, Preco } from "../RestauranteFolder/styled";
import { ContainerDetail, Card, CardDetail } from "./styled";


function Restaurante() {
  useProtectedPage();
  const [listRestaurant, setListRestaurant] = useState();
  const [productInCart, setProductInCart] = useState([]);
  const params = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/${params.id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        console.log(response.data.restaurant.products);
        setListRestaurant(response.data.restaurant.products);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [params.id]);


  const addRestaurant = (produto) => {
    const restaurant = productInCart.find((restaurant) => {
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
      const copiaCarrinho = [...productInCart, novoCarrinho];
      setProductInCart(copiaCarrinho);
    } else {
      const copiaCarrinho = productInCart.map((restaurant) => {
        if (restaurant.id === produto.id) {
          return {
            ...restaurant,
            quantity: restaurant.quantity + 1,
          };
        } else {
          return restaurant;
        }
      });
      setProductInCart(copiaCarrinho);
    }
    console.log("adicionou", productInCart);
  };
  return (
    <ContainerDetail>
      <CardRestaurant>
        <h3>Restaurante</h3>
      </CardRestaurant>
      {listRestaurant &&
        listRestaurant.map((list) => {
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
                  <Botao onClick={() => addRestaurant(params.id)}>
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
