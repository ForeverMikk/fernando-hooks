import { useEffect, useState } from "react"


export const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0});

    useEffect(() => {
      
        const onMouseMove = ({x, y}) => {
            // const coords = {x, y};
            setCoords({x, y});
        }

        window.addEventListener('mousemove', onMouseMove);
    
      return () => { //Cuando el componente deja de existir puedes limpiar con una ejecucion
        window.removeEventListener('mousemove', onMouseMove); //Removemos el listener para evitar sobrecarga de memoria
      }
    }, [])
    
  return (
    <>
        <h3>Usuario ya existe</h3>
        {JSON.stringify(coords)}
    </>
  )
}
