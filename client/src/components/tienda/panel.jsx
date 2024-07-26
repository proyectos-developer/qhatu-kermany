import React from 'react'

import BannerTitulo from './bannertitulo.jsx'
import Tienda from './tienda.jsx'
import Filtros from './filtros.jsx'

export default function TiendaPanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <BannerTitulo proporcional={proporcional}/>
            <div style={{width: '100%', height: 'auto', paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional, paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional}}>
                    <div style={{width: '74%', height: 'auto'}}>
                        <Tienda proporcional={proporcional}/>
                    </div>

                    <div style={{width: '24%', height: 'auto'}}>
                        <Filtros proporcional={proporcional}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
