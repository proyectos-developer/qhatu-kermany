import React from 'react'

import BannerTituloCell from './bannertitulocell.jsx'
import TiendaCell from './tiendacell.jsx'
import FiltrosCell from './filtroscell.jsx'

export default function TiendaPanelCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <BannerTituloCell proporcional={proporcional}/>
            <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                    <TiendaCell proporcional={proporcional}/>
                </div>

                <div style={{width: '100%', height: 'auto'}}>
                    <FiltrosCell proporcional={proporcional}/>
                </div>
            </div>
        </div>
    )
}
