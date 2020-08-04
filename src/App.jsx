import React from 'react'

import Primeiro from './components/basics/Primeiro'
import ChamaParametro from './components/basics/Parametros'
import Fragmento from './components/basics/Fragmento'

export default function() {
    return <div>
        <strong>Olá React!</strong>
        <br/>
        <Fragmento titulo="Segundo Componente" 
            subtitulo="Este é outro parâmetro" />
        <Primeiro></Primeiro>
        <ChamaParametro 
            titulo="Segundo Componente" 
            subtitulo="Este é outro parâmetro" />
    </div>
}