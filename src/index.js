import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './components/basics/Primeiro'
import ChamaParametro from './components/basics/Parametros'

const rootElement = document.getElementById('root');
ReactDOM.render(
    <div>
        <strong>Olá React!</strong>
        <br/>
        <Primeiro></Primeiro>
        <ChamaParametro 
            titulo="Segundo Componente" 
            subtitulo="Este é outro parâmetro" />
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