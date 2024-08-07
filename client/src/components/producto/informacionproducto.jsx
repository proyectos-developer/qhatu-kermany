import React from 'react'

import ImagenesProducto from './imagenesproducto.jsx'
import DetallesProducto from './detallesproducto.jsx'

export default function InformacionProducto({proporcional}) {

    return (
        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 70 / proporcional}}>
            <div style={{width: '45%', height: 'auto'}}>
                <ImagenesProducto proporcional={proporcional}/>
            </div>
            <div style={{width: '54%', height: 'auto'}}>
                <DetallesProducto proporcional={proporcional}/>
            </div>
        </div>
    )
}
