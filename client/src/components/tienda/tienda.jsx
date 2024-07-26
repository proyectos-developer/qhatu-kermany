import React from 'react'

import TituloOrder from './tituloorder.jsx'
import Productos from './productos.jsx'

export default function Tienda({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
            <div style={{width: '100%', height: 47 / proporcional, marginBottom: 45 / proporcional}}>
                <TituloOrder proporcional={proporcional}/>
            </div>
            <Productos proporcional={proporcional}/>
        </div>
    )
}
