import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter"

const heavyStuff = (iterationNumber = 100) => {
    //Este proceso solo se deberia ejecutar si el valor delcounter cambia

    for( let i = 0; i < iterationNumber; i++) {
        console.log('Ahi vamos..');
    }

    return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {

    const {counter, increment} = useCounter(4000);
    const [show, setShow] = useState(true);
    
    // useMemo por lo general memoriza un valor
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]); 
    // Aqui indicamos que el valor del memorizedValue sea el mismo a menos
    // de que cambien el counter(como dependencia)

  return (
    <>
        <h1>Counter: <small value={counter}> </small></h1>
        <hr />

        {/* Esto evita muchos problemas de re-renderizacion  */}
        <h4>{ memorizedValue }</h4> 

        <button
            className="btn btn-primary"
            onClick={() => increment(1)}
        >
            +1
        </button>

        <button 
            className="btn btn-outline-primary"
            onClick={() => setShow(!show)}    
        >
            Show/Hide {JSON.stringify(show)}
        </button>
    </>
  )
}
