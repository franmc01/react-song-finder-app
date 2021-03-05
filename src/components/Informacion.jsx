
export const Informacion = ({ information }) => {

    if (Object.keys(information).length === 0) return null;

    const { strArtistThumb, strBiographyEN } = information;

    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Información del artista
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Imagen artista" />
                <h2 className="card-text"> Biografía </h2>
                <p className="card-text">
                    {strBiographyEN}
                </p>
            </div>
        </div>
    )
}
