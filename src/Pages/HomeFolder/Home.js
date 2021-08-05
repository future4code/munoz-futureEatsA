import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectedPage';
import {
  ContainerInput,
  CampoIcon,
  CardImagem,
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
  Footer,
} from './styled';
import { MdSearch } from "react-icons/md"
import { goToRestaurante } from '../../routes/cordinator';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import DirectionsIcon from '@material-ui/icons/Directions';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';


function Home() {
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
                <Lista onClick={() => goToRestaurante(history, restaurante.id)}>
                  {restaurante.category}
                </Lista>
              </ContainerLista>
            );
          })}
      </BarraScroll>
      <ScreenContainer>
        {restaurante &&
          restaurante.filter((restaurante) => {
            if (busca === "") {
              return restaurante
            } else if (restaurante.name.toLowerCase().includes(busca.toLowerCase())) {
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
      <Footer>
                  <><HomeOutlinedIcon
                    fontSize="large" /></>
                  <><ShoppingCartOutlinedIcon
                    fontSize="large" /></>
                  <><PersonOutlineOutlinedIcon
                    fontSize="large" /></>
                </Footer>
    </Root>

  );
}

export default Home;
