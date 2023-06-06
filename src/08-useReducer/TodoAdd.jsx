
export const TodoAdd = () => {
  return (
    <>
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
    </>
  )
}
