import React from 'react'

import BannerTitulo from './bannertitulo.jsx'
import InformacionProducto from './informacionproducto.jsx'
import DescripcionProducto from './descripcionproducto.jsx'

export default function ProductoPanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <BannerTitulo proporcional={proporcional}/>
            <div style={{width: '100%', height: 'auto', paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional, paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                <div style={{width: '100%', height: 'auot', paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional}}>
                    <div style={{width: '100%', height: 'auto'}}>
                        <InformacionProducto proporcional={proporcional}/>
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <DescripcionProducto proporcional={proporcional}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
