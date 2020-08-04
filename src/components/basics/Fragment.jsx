import React from 'react'

export default function Fragmento(props) {
    return (
        <React.Fragment>
            <h2>{props.titulo}</h2>
            <h3>{props.subtitulo}</h3>
        </React.Fragment>
    )
}

/**
 * Outra forma de utilizar o <React.Fragment>
 * <>...</>
 */