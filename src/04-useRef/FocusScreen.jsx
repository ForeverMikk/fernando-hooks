
export const FocusScreen = () => {
  
    const onClick = () => {
        document.querySelector('input').select();
    }
    
  return (
    <>
        <h1>FocusScreen</h1>
        <hr />

        <input 
            type="text" 
            name="" 
            placeholder="Ingrese su nombre" 
            className="form-control"
        />
        <input 
            type="text" 
            name="" 
            placeholder="Ingrese su nombre" 
            className="form-control"
        />
        <input 
            type="text" 
            name="" 
            placeholder="Ingrese su nombre" 
            className="form-control"
        />

        <button 
            className="btn btn-primary mt-2"
            onClick={onClick}
        >
            Set focus
        </button>
    </>
  )
}
