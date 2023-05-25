import { useEffect, useState } from "react";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Michael',
        email: 'mike@gmail.com'
    });

    const {email, username} = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
        // console.log({name, value});
    }

    // Se recomienda tener un efecto que haga una funcion especifica
    // Esto hace maseficiente nuestra aplicaion
    useEffect(() => {
        console.log('useEffect');
    }, []);

    useEffect(() => {
        console.log('formState Changed!');
    }, [formState]); //El arreglo de dependencias indica cuando se renderiza la aplicaion

    useEffect(() => {
        console.log('email Changed!');
    }, [email]);

  return (
    <>
        <h1>SimpleForm</h1>
        <hr />
        <input 
            type="text" 
            className="form-control"
            placeholder="Username"    
            name="username"
            value={username}
            onChange={onInputChange}
        />
        <input 
            type="email" 
            className="form-control mt-2"
            placeholder="ejemplo@gmail.com"    
            name="email"
            value={email}
            onChange={onInputChange}
        />
    </>
  )
}
