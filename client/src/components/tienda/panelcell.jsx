import React from 'react'

import BannerTituloCell from './bannertitulocell.jsx'
import TiendaCell from './tiendacell.jsx'
import FiltrosCell from './filtroscell.jsx'

export default function TiendaPanelCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <BannerTituloCell proporcional={proporcional}/>
            <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 0 / proporcional, paddingRight: 0 / proporcional}}>
                <div style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                    <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                        <TiendaCell proporcional={proporcional}/>
                    </div>

                    <div style={{width: '100%', height: 'auto'}}>
                        <FiltrosCell proporcional={proporcional}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
