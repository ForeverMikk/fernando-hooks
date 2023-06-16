export const todoReducer = (initialState, action) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload]; //Creamos un nuevo arreglo que contenga todos los datos anteriores y agregamos el payload
    
        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload); //Con el filter regresas un nuevo arreglo que te retorna todos los elementos del array menos el seleccionado
        
        case '[TODO] Toggle Todo':
            return initialState.map( todo => { //Regresamos un nuevo arreglo donde con el map buscamos el elemento y cambiamos el estado del done
                if(todo.id === action.payload) {
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo; //si no es regresa el mismo todo
            });

        default:
            return initialState;
    }

}