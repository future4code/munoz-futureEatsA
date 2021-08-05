import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectedPage';
import { ContainerInput, CampoIcon, CampoInput, CardImagem, ContainerLista, ContainerImagem, Lista, BarraScroll, Imagem, } from './styled';
import { MdSearch } from "react-icons/md"
import { goToRestaurante } from '../../routes/cordinator';


function Home () {
  useProtectedPage()
  const [restaurante, setRestaurante] = useState();
  const [busca, setBusca] = useState("")
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setRestaurante(response.data.restaurants);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  console.log("home", restaurante);

  const onChangeBusca = (e) => {
    setBusca(e.target.value)
  }

  return (
    <div>
    <ContainerInput>
    <CampoIcon><MdSearch/></CampoIcon>
    <CampoInput 
    type="text" 
    placeholder="Buscar Restaurante"
    value={busca}
    onChange={onChangeBusca}
    ></CampoInput>
    </ContainerInput>
      <BarraScroll>
        {restaurante &&
          restaurante.map((restaurante) => {
            return (
              <ContainerLista key={restaurante.id}>
                <Lista onClick={() => goToRestaurante(history, restaurante.id)}>
                  {restaurante.category}
                </Lista>
              </ContainerLista>
            );
          })}
      </BarraScroll>
      <ContainerImagem>
        {restaurante &&
          restaurante.filter((restaurante) =>{
            if(busca === ""){
              return restaurante
            }else if(restaurante.logoUrl.toLowerCase().includes(busca.toLowerCase())){
              return restaurante
            }
          })
          .map((restaurante) => {
            return (
              <CardImagem key={restaurante.id}>
                <Imagem
                  onClick={() => goToRestaurante(history, restaurante.id)}
                  src={restaurante.logoUrl}
                ></Imagem>
              </CardImagem>
            );
          })}
      </ContainerImagem>
    </div>
  );
}

export default Home;
