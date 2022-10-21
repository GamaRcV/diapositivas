import '../styles/globals.css'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [paginaLista,setPaginaLista]=useState(false)

  useEffect(()=>{
    setPaginaLista(true)
  },[])
  return  paginaLista ?<Component {...pageProps} /> : null
}

export default MyApp
