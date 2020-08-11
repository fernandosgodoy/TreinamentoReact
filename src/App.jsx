import React from 'react'

import Card from './components/layout/Cards'
import Primeiro from './components/basics/Primeiro'
import ChamaParametro from './components/basics/Parametros'
import Fragmento from './components/basics/Fragmento'
import Sortear from './components/SotearNumero'

export default function() {
    return <div>
        <strong>Olá React!</strong>
        <br/>
        <h1>Aulas</h1>

        <Card titulo="Desafio Aleatório">
            <Sortear minimo="1" maximo="60" />
            <Sortear minimo="1" maximo="60" />
            <Sortear minimo="1" maximo="60" />
            <Sortear minimo="1" maximo="60" />
            <Sortear minimo="1" maximo="60" />
            <Sortear minimo="1" maximo="60" />
        </Card>

        <Card titulo="Fragmento">
            <Fragmento titulo="Segundo Componente" 
                subtitulo="Este é outro parâmetro" />
        </Card>

        <Card titulo="Componente com Parâmetros">
            <ChamaParametro 
                titulo="Segundo Componente" 
                subtitulo="Este é outro parâmetro" />
        </Card>

        <Card titulo="Primeiro Componente">
            <Primeiro></Primeiro>
        </Card>
        
    </div>
}