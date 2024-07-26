import React from 'react'

import TituloOrderCell from './tituloordercell.jsx'
import ProductosCell from './productoscell.jsx'

export default function TiendaCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
            <div style={{width: '100%', height: 47 / proporcional, marginBottom: 45 / proporcional}}>
                <TituloOrderCell proporcional={proporcional}/>
                <ProductosCell proporcional={proporcional}/>
            </div>
        </div>
    )
}
