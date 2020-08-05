import React from 'react'

export default function Sortear(props) {
    const randomNumber = getRandom(
        props.minimo,
        props.maximo
    )

    return (
        <React.Fragment>
            <h2>Sortear um número aleatório.</h2>
            <span>
                Resultado: 
                <strong>
                    {randomNumber}
                </strong>
            </span>
        </React.Fragment>
    )
}

function getRandom(min, max) {
    return parseFloat(Math.random() * (max - min) + min).toFixed(0)
}