import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

const rootElement = document.getElementById('root');
ReactDOM.render(
    <div>
        <strong>Olá React!</strong>
    </div>,
    rootElement
)

// Outra forma de escrita
/**
 * const tag = <strong>Olá React!</strong>
 * ...
 * <div>
 *      { tag }
 * </div>
 */