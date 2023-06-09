export const todoReducer = (initialState, action) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload]; //Creamos un nuevo arreglo que contenga todos los datos anteriores y agregamos el payload
    
        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload); //Con el filter regresas un nuevo arreglo que te retorna todos los elementos del array menos el seleccionado

        default:
            break;
    }

}