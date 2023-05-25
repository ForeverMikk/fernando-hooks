import { useState } from "react";

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
        console.log({name, value});
    }

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
