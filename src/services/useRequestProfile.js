import axios from "axios"
import { useEffect, useState } from "react"



const useRequestProfile = (initialData, url) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios.get(url , {
      headers: {
        auth: localStorage.getItem('token')
      }
    })
      .then((response) => {
        setData(response.data.user)
        console.log(response.data.user)
      })
      .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro, tente novamente')
      })
  }, [url])

  return (data)
}

export default useRequestProfile
