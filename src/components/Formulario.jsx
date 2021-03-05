import React from 'react'

export const Formulario = () => {
    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form className="col card text-white bg-transparent mb-5 pt-5 pb-2">
                        <fieldset>
                            <legend className="text-center">Buscador Letras y Canciones</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="artist">Nombre del artista</label>
                                        <input type="text"
                                               className="form-control"
                                               name="artist"
                                               placeholder="Nombre del artista"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="music">Nombre la canción</label>
                                        <input type="text"
                                               className="form-control"
                                               name="music"
                                               placeholder="Nombre de la canción"/>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary float-right">Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}
