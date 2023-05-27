import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {
  
  const { counter, increment} = useCounter();
  const { data, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
  const { author, quote } = !!data && data[0]; //con el doble signo !! vuelves false el valor del null 
  return (
    <>
        <h1>Braking Bad Cuotes</h1>
        <hr />
          {
            isLoading 
            ? <h2 className="alert alert-info text-center">Cargando...</h2>
            : <blockquote className="blockquote text-end">
              <p className="mb-1">{quote}</p>
              <footer className="blockquote-footer mt-2">{author}</footer>
            </blockquote>
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
