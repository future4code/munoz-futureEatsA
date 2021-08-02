import axios from "axios"
import { BASE_URL } from '../Constants/url';
import { goToPerfil } from "../routes/cordinator";


export const putUpProfile = (body, clear, history) => {

    const token = localStorage.getItem("token")
    
    axios.put(`${BASE_URL}/profile`, body,
        {
      headers: {
        auth: token
      },
    })
        .then((res) => {
            clear()            
            alert('Perfil alterado com Sucesso!!') 
            goToPerfil(history)           
        })
        .catch((err) => {
            
            alert(err.response.data.message)
        })
}