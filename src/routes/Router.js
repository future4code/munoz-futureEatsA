import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TelaInicial from '../Pages/TelaInicial'
import Login from '../Pages/LoginFolder/Login'
import CadastroSignUp from '../Pages/CadastroFolder/Signup/CadastroSignUp'
import CadastroEnd from '../Pages/CadastroFolder/SignUpEnd/CadastroEnd'
import Home from '../Pages/HomeFolder/Home'
import Restaurante from '../Pages/RestauranteFolder/Restaurante'
import Carrinho from '../Pages/Carrinho/Carrinho'
import Perfil from '../Pages/Perfil/PerfilUsuario'
// import EditarCadastro from '../Pages/Perfil/EditarCadastro/'
import Frame from '../Components/Frame/Frame.js';
import { goToLogin } from './cordinator';
import { useHistory } from 'react-router-dom';
import EditarPerfil from '../Pages/Perfil/EditarPerfil/EditarPerfil'
import EditarEndereco from '../Pages/Perfil/EditarEndereco/EditarEndereco'

function Router() {

  const [restaurante, setRestaurante] = useState();
  const [busca, setBusca] = useState("")
  const [listRestaurant, setListRestaurant] = useState()
  const [productInCart, setProductInCart] = useState([])
  const history = useHistory()

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/telainicial'>
          <TelaInicial />
        </Route>

        <Route exact path='/login'>
          <Login />
        </Route>

        <Route exact path='/cadastrosignup'>
          <Frame
            onClickReturn={() => goToLogin(history)}
            page={<CadastroSignUp />}
          />
        </Route>

        <Route exact path='/cadastroendereco'>
          <Frame
            page={<CadastroEnd />}
          />
        </Route>

        <Route exact path='/'>
          <Frame
            page={<Home />}
          />
          <Home
            restaurante={restaurante}
            setRestaurante={setRestaurante}
            busca={busca}
            setBusca={setBusca} />
        </Route>

        <Route exact path='/restaurante/:id'>
          <Restaurante
            listRestaurant={listRestaurant}
            setListRestaurant={setListRestaurant}
            productInCart={productInCart}
            setProductInCart={setProductInCart}
          />
        </Route>

        <Route exact path='/carrinho'>
          <Frame
            page={<Carrinho />}
          />
        </Route>

        <Route exact path='/perfil'>
          <Frame
            page={<Perfil />}
          />
        </Route>

        <Route exact path='/editarperfil'>
          <EditarPerfil />
        </Route>

        <Route exact path='/editarendereco'>
          <Frame
            page={<EditarEndereco />}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;