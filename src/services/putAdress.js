import axios from "axios"
import { BASE_URL } from '../Constants/url';
import { goToHome } from "../routes/cordinator";


export const putAdress = (body, clear, history) => {

    const token = localStorage.getItem("token1")
    
    axios.put(`${BASE_URL}/address`, body,
        {
      headers: {
        auth: token
      },
    })
        .then((res) => {
          localStorage.setItem("token", res.data.token)
            clear()
            goToHome(history)            
        })
        .catch((err) => {
            
            alert(err.response.data.message)
        })
}