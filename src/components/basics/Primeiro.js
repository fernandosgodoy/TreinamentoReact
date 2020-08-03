import React from 'react'

/**
 * Crio uma função javascript e defino que ela será 
 * exportada por padrão (export default)
 */

// export default function primeiro() {
//     return <h2>Primeiro Componente</h2> //(1)
// }

/**
 * (1)
 * Se você precisar de uma estrutura aninhada
 * de elementos html, é comum também ser escrito
 * da seguinte maneira:
 * 
 * (
 *  <div>
 *      <h2>Primeiro Componente</h2>
 *  </div>
 * )
 */

export default function primeiro() {
    const msg = "Lorem ipsum"
    return ( 
        <div>
            <h2>Primeiro Componente</h2> 
            <p>
                { msg }
            </p>
        </div>
    )
}