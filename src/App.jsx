import React from 'react'

import Primeiro from './components/basics/Primeiro'
import ChamaParametro from './components/basics/Parametros'

export default function() {
    return <div>
        <strong>Olá React!</strong>
        <br/>
        <Primeiro></Primeiro>
        <ChamaParametro 
            titulo="Segundo Componente" 
            subtitulo="Este é outro parâmetro" />
    </div>
}