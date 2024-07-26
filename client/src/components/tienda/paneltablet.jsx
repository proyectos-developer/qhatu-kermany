import React from 'react'

import BannerTituloTablet from './bannertitulotablet.jsx'
import TiendaTablet from './tiendatablet.jsx'
import FiltrosTablet from './filtrostablet.jsx'

export default function TiendaPanelTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <BannerTituloTablet proporcional={proporcional}/>
            <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 0 / proporcional, paddingRight: 0 / proporcional}}>
                <div style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                    <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                        <TiendaTablet proporcional={proporcional}/>
                    </div>

                    <div style={{width: '100%', height: 'auto'}}>
                        <FiltrosTablet proporcional={proporcional}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
