import React from 'react'

import TituloOrderCell from './tituloordercell.jsx'
import ProductosCell from './productoscell.jsx'

export default function TiendaCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 0 / proporcional, paddingRight: 0 / proporcional}}>
            <div style={{width: '100%', height: 'auto', marginBottom: 45 / proporcional}}>
                <TituloOrderCell proporcional={proporcional}/>
            </div>
            <ProductosCell proporcional={proporcional}/>
        </div>
    )
}
