import React, { Fragment } from 'react'

export const Letra = ({ lyrics }) => {
    if (lyrics.length === 0) {
        return null;
    }
    return (
        <Fragment>
            <h2>Letra de la canción</h2>
            <p className="letra">{lyrics}</p>
        </Fragment>
    )
}
