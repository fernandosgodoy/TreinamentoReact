import React from 'react'

import Primeiro from './components/basics/Primeiro'
import ChamaParametro from './components/basics/Parametros'
import Fragmento from './components/basics/Fragmento'
import Sortear from './components/SotearNumero'

export default function() {
    return <div>
        <strong>Olá React!</strong>
        <br/>
        <h1>Aulas</h1>
        <Fragmento titulo="Segundo Componente" 
            subtitulo="Este é outro parâmetro" />
        <Primeiro></Primeiro>
        <ChamaParametro 
            titulo="Segundo Componente" 
            subtitulo="Este é outro parâmetro" />
        <hr/>
        <Sortear minimo="1" maximo="60" />
    </div>
}