import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './components/basics/Primeiro'

const rootElement = document.getElementById('root');
ReactDOM.render(
    <div>
        <strong>Olá React!</strong>
        <br/>
        <Primeiro></Primeiro>
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