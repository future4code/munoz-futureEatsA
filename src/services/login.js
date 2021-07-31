import axios from "axios"
import { BASE_URL } from '../Constants/url';
import { goToHome, goToCadastroEndereco } from "../routes/cordinator";

export const logar = (body, clear, history) => {
    axios.post(`${BASE_URL}/login`, body)
    .then((res)=>{
      localStorage.setItem("token", res.data.token)
      clear()
      goToHome(history)
    })
    .catch((err)=> alert("Erro no login"))
  }




