import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

    //Como usaste el spred en el custom hook aqui puedes desestructurar el componente
    const { onInputChange, username, email, password } = useForm({
            username: '',
            email: '',
            password: ''
        });

    // const {username, email, password} = formState;

  return (
    <>
        <h1>Formulario con Custom Hook</h1>
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
        <input 
            type="password" 
            className="form-control mt-2"
            placeholder="Contraseña"    
            name="password"
            value={password}
            onChange={onInputChange}
        />

    </>
  )
}
