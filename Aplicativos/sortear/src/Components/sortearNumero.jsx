import React from 'react';

export default function sortearNumero(props) {
    var min = props.min;
    var max = props.max;
    var numeroSorteado = Math.floor(Math.random() * (max - min + 1) + min);

    return <React.Fragment>
        {numeroSorteado}
    </React.Fragment>
}