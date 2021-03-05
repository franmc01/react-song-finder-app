import React from 'react'

export const Formulario = () => {
    
    //Definición del initialState - Opcional
    const initialState = {
        artist: '',
        music: ''
    }
    //Definición de los state
    const [ busqueda, setBusqueda ] = React.useState(initialState);
    const [ error, setError ] = React.useState(false);

    //Función que se ejecuta cuando se envia el formulario
    const handleSubmit = (e) => {

        //Para que no recarge el navegador
        e.preventDefault();
        
        //Validar que los campos vengan llenos
        if(busqueda.artist.trim() === '' || busqueda.music.trim() === ''){
            console.log('Error');
            setError(true);
            return;
        }

        //Si todo esta Ok, entonces
        setError(false);

        //Realizar el proceso de búsqueda
        console.log('Enviado');
    }

    //Función que se ejecuta cada vez que los campos cambios su estado
    const handleStateChange = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    }


    //Return del componente
    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form onSubmit={handleSubmit}
                          className="col card text-white bg-transparent mb-5 pt-5 pb-2">
                        <fieldset>
                            <legend className="text-center">Buscador Letras y Canciones</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="artist">Nombre del artista</label>
                                        <input type="text"
                                               className="form-control"
                                               name="artist"
                                               onChange={handleStateChange}
                                               placeholder="Nombre del artista"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="music">Nombre la canción</label>
                                        <input type="text"
                                               className="form-control"
                                               name="music"
                                               onChange={handleStateChange}
                                               placeholder="Nombre de la canción"/>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" 
                                    className="btn btn-primary float-right">Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}
