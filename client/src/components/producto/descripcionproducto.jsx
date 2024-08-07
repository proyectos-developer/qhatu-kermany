import React from 'react'

import SubMenuDescripcion from './submenudescripcion.jsx'
import DataAdicional from './dataadicional.jsx'
import ProductosRelacionados from './productosrelacionados.jsx'

export default function DescripcionProducto({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
            <SubMenuDescripcion proporcional={proporcional}/>
            <DataAdicional proporcional={proporcional}/>
            <ProductosRelacionados proporcional={proporcional}/>
        </div>
    )
}
