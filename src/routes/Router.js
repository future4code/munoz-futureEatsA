import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import TelaInicial from '../Pages/TelaInicial'
import Login from '../Pages/LoginFolder/Login'
import CadastroSignUp from '../Pages/CadastroFolder/CadastroSignUp'
import CadastroEnd from '../Pages/CadastroFolder/CadastroEnd'
import Home from '../Pages/HomeFolder/Home'
import Restaurante from '../Pages/RestauranteFolder/Restaurante'
import Carrinho from '../Pages/Carrinho/Carrinho'
import Perfil from '../Pages/Perfil/PerfilUsuario'
import EditarCadastro from '../Pages/Perfil/EditarCadastro'
import EditarEndereco from '../Pages/Perfil/EditarEndereco'




function Router() {

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
                     <CadastroSignUp />
                 </Route>

                 <Route exact path='/cadastroendereco'>
                     <CadastroEnd />
                 </Route>

                 <Route exact path='/'>
                     <Home />
                 </Route>

                 <Route exact path='/restaurante'>
                     <Restaurante />
                 </Route>

                 <Route exact path='/carrinho'>
                     <Carrinho />
                 </Route>

                 <Route exact path='/perfil'>
                     <Perfil />
                 </Route>

                 <Route exact path='/editarcadastro'>
                     <EditarCadastro />
                 </Route>

                 <Route exact path='/editarendereco'>
                     <EditarEndereco />
                 </Route>
             </Switch>
        </BrowserRouter>
    )
}

export default Router;