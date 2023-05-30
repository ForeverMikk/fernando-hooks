import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  
    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback( // use Callback es como es useMemo pero en lugar de memorizar un valor memoriza funciones
      (value) => { // En una funcion memorizada este es el input de tu funcion
        setCounter((counter) => counter + value); 
      },
      [],
    )

    useEffect(() => { // Esto en un Caso normal seria un bucle infinito
        // Pero con el useCallback la funcion siempre apunta al mismo espacio de memoria
        // Por lo que no genera un error
        // incrementFather();
    }, [incrementFather])
    // const increment = () => {
    //     setCounter(counter + 1);
    // }
    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementFather} />
        </>
    )
}
