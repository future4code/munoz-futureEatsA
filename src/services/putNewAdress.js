import axios from "axios"
import { BASE_URL } from '../Constants/url';
import { goToPerfil } from "../routes/cordinator";


export const putNewAdress = (body, clear, history) => {

    const token = localStorage.getItem("token")
    
    axios.put(`${BASE_URL}/address`, body,
        {
      headers: {
        auth: token
      },
    })
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()            
            alert('Endereço alterado com Sucesso!!') 
            goToPerfil(history)           
        })
        .catch((err) => {
            
            alert(err.response.data.message)
        })
}