// SE RECOMIENDA USAR USE EFFECT EN MAYOR MEDIDA

import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples"

export const Layout = () => {
  
  const { counter, increment} = useCounter();
  const { data, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
  const { author, quote } = !!data && data[0]; //con el doble signo !! vuelves false el valor del null 
  return (
    <>
        <h1>Braking Bad Cuotes</h1>
        <hr />
          {
            isLoading 
            ? <LoadingQuote />
            : <Quote author={author} quote={quote} />
          }

          <button 
            onClick={() => increment(1)} 
            className="btn btn-primary"
            disabled={isLoading}
          >
            Next Quote
          </button>
    </>
  )
}
