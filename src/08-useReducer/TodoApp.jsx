import { useReducer } from "react"
import { todoReducer } from "./totoReducer";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del alma',
        done: false,
    }
]



export const TodoApp = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <>
        <h1>TODOApp: 10 <small>pendientes 2</small> </h1>
        <hr />
        <div className="row">
            <div className="col-7">
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Item 1</span>
                        <button className="btn btn-danger">Borrar</button>
                    </li>
                </ul>
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <form action="">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Que hay que hacer"
                    />
                    <button 
                        type="submit"
                        className="btn btn-primary mt-2">
                        Agregar
                    </button>
                </form>
            </div>
        </div>
    </>
  )
}
