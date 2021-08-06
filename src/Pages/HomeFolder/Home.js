import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectedPage';
import {
  ContainerInput,  
  CardInfo,
  ScreenContainer,
  ContainerLista,
  CardContainer,
  Lista,
  BarraScroll,
  Root,
  Tittle,
  Info,
  CardImg,  
  Categoria
} from './styled';
import { goToRestaurante } from '../../routes/cordinator';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Footer from '../../components/Footer'

function Home() {
  useProtectedPage()
  const [restaurante, setRestaurante] = useState();
  const [busca, setBusca] = useState("")
  const [categoria, setCategoria] = useState("Árabe")
  const history = useHistory();

  const changeCategory = (type) => {
   
    setCategoria(type)    
  }

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
    <Root>
      <Tittle>FutereEats</Tittle>

      <ContainerInput>
        <Paper component="form" variant="outlined" >
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>

          <InputBase
            type="text"
            placeholder="Buscar Restaurante"
            value={busca}
            onChange={onChangeBusca}
            placeholder="Restaurante"
            
          />
          <Divider orientation="horizontal" />
        </Paper>
      </ContainerInput>
      <BarraScroll>
        {restaurante &&
          restaurante.map((restaurante) => {
            return (
              <ContainerLista key={restaurante.id}>
                <Lista onClick={() => changeCategory(restaurante.category)}>
                  <Categoria >{restaurante.category}</Categoria>
                </Lista>
              </ContainerLista>
            );
          })}
      </BarraScroll>
      <ScreenContainer>
        {restaurante &&
          restaurante.filter((restaurante) => {
            if (categoria === restaurante.category) {
              return true
            } 
            else  {
              return false
            }
            
            
          }).filter((restaurante) => {
            
            if (busca === "") {
              return restaurante
            } 
            else if (restaurante.name.toLowerCase().includes(busca.toLowerCase())) {
              return restaurante
            }
            
          })
            .map((restaurante) => {
              return (
                
                  <CardContainer>                    
                      <CardImg                                                
                        src={restaurante.logoUrl}                        
                      />
                      <CardInfo>
                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                          {restaurante.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          <Info><p>{restaurante.deliveryTime} min</p><p>Frete R${restaurante.shipping},00</p></Info>
                        </Typography>
                      </CardInfo>
                      
                       
                        
                        
                     
                    
                  </CardContainer>
                  
                

                /* <CardImagem key={restaurante}>
                  <Imagem
                    onClick={() => goToRestaurante(history, restaurante.id)}
                    src={restaurante.logoUrl}
                  ></Imagem>
                </CardImagem>  */
              );
            })}
            
      </ScreenContainer>
      
      <Footer/>
    </Root>

  );
}

export default Home;
