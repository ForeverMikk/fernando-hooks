export const todoReducer = (initialState, action) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload] //Creamos un nuevo arreglo que contenga todos los datos anteriores y agregamos el payload
    
        default:
            break;
    }

}