import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectedPage';
import { CardImagem } from '../HomeFolder/styled';
import { ContainerDetail, Card, CardDetail } from './styled';
import {BASE_URL} from '../../Constants/url'

function Restaurante () {
  useProtectedPage()
  const [listRestaurant, setListRestaurant] = useState()
  const [productInCart, setProductInCart] = useState([])
  const params = useParams()


  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get(`${BASE_URL}/restaurants/${params.id}`, {
      headers: {
        auth: token
      }
    })
    .then((response) => {
      console.log(response.data);
      setListRestaurant(response.data.restaurant.products)
    })
    .catch((error) => {
      console.log(error.response);
    })
  },[params.id])

  const addRestaurant = (produto) => {
    const restaurant = productInCart.find((restaurant) => {
      if(restaurant.id === produto.id){
        return true
      }
      return false
    })
    
    if(!restaurant){
      const novoCarrinho = {
        ...produto,
        quantity: 1
      }
      const copiaCarrinho = [...productInCart, novoCarrinho]
      setProductInCart(copiaCarrinho)
    }else{
      const copiaCarrinho = productInCart.map((restaurant) => {
        if(restaurant.id === produto.id) {
          return {
              ...restaurant,
              quantity: restaurant.quantity + 1
          }
      }else{
          return restaurant
      }
  })
  setProductInCart(copiaCarrinho)
  
}
    console.log("adicionou", productInCart);
  }
  return (
    <ContainerDetail>
      <h1>teste</h1>
      {listRestaurant && listRestaurant.map((list) => {
        return <CardDetail>
          <Card >
          <CardImagem src={list.photoUrl}></CardImagem>
          </Card >
          <div>
          <p>{list.name}</p>
          <p>Price: {list.price}</p>
          <div>
            <p>{list.description}</p>
          </div>
          <button onClick={() =>addRestaurant(params.id)}>Adicionar</button>
          </div>
        </CardDetail>
      })}
    </ContainerDetail>
  );
}

export default Restaurante;

