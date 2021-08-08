import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
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
//  Footer,
} from "./styled";
//import { MdSearch } from "react-icons/md";
//import { goToRestaurante } from "../../routes/cordinator";
//import Card from "@material-ui/core/Card";
//import CardActionArea from "@material-ui/core/CardActionArea";
//import CardActions from "@material-ui/core/CardActions";
//import CardContent from "@material-ui/core/CardContent";
//import CardMedia from "@material-ui/core/CardMedia";
//import Button from "@material-ui/core/Button";
//import Typography from "@material-ui/core/Typography";
//import OutlinedInput from "@material-ui/core/InputBase";
//import SearchIcon from "@material-ui/icons/Search";
//import TextField from "@material-ui/core/TextField";
//import Paper from "@material-ui/core/Paper";
//import InputBase from "@material-ui/core/InputBase";
//import Divider from "@material-ui/core/Divider";
//import IconButton from "@material-ui/core/IconButton";
//import MenuIcon from "@material-ui/icons/Menu";
//import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
//import DirectionsIcon from "@material-ui/icons/Directions";
//import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
//import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import { goToRestaurante } from '../../routes/cordinator';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Footer from '../../Components/Footer'

function Home(props) {
  useProtectedPage()
  
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
        props.setRestaurante(response.data.restaurants);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  const onChangeBusca = (e) => {
    props.setBusca(e.target.value);
  };

  return (
    <Root>
      <Tittle>FutureEats</Tittle>

      <ContainerInput>
        <Paper component="form" variant="outlined">
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>

          <InputBase
            type="text"
            placeholder="Buscar Restaurante"
            value={props.busca}
            onChange={onChangeBusca}
            placeholder="Restaurante"
          />
          <Divider orientation="horizontal" />
        </Paper>
      </ContainerInput>
      <BarraScroll>
        {props.restaurante &&
          props.restaurante.map((restaurante) => {
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
        {props.restaurante &&
          props.restaurante
            .filter((restaurante) => {
              if (props.includesbusca === "") {
                return restaurante;
              } else if (
                restaurante.name
                  .toLowerCase()
                  .includes(props.busca.toLowerCase())
              ) {
                return restaurante;
              }
            })
            .map((restaurante) => {
              return (
                <CardContainer>
                  <CardImg onClick={() => goToRestaurante(history, restaurante.id)} src={restaurante.logoUrl} />
                  <CardInfo>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      color="primary"
                    >
                      {restaurante.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <Info>
                        <p>{restaurante.deliveryTime} min</p>
                        <p>Frete R${restaurante.shipping},00</p>
                      </Info>
                    </Typography>
                  </CardInfo>
                </CardContainer>
              );
            })}
            
      </ScreenContainer>
      <Footer />
    </Root>
  );
}

export default Home;
