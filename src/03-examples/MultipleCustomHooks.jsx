import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {
  
  const {data, isLoading, hasError} = useFetch('https://api.breakingbadquotes.xyz/v1/quotes/1');
  
  console.log(data, isLoading, hasError);
  
  return (
    <>
        <h1>Braking Bad Cuotes</h1>
        <hr />
    </>
  )
}
