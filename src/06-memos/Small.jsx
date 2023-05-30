import React from 'react'; 
// El memo es una funcion que memoriza este componente
// Si las Properties cambian si se vuelve a ejecutar
// NOTA: si usas React.StrictMode no te deja usar el memo


export const Small = React.memo(({value}) => { //Es una forma tradicional de memorizar
    console.log('Me volvi a dibujar');
    
    return (
        <small>{value}</small>
    )
})
