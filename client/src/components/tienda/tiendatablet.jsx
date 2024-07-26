import React from 'react'

import TituloOrderTablet from './tituloordertablet.jsx'
import ProductosTablet from './productostablet.jsx'

export default function TiendaTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
            <div style={{width: '100%', height: 47 / proporcional, marginBottom: 45 / proporcional}}>
                <TituloOrderTablet proporcional={proporcional}/>
            </div>
            <ProductosTablet proporcional={proporcional}/>
        </div>
    )
}
