import React from 'react'

import FormularioCell from './contacto/formulariocell.jsx'
import MapaUbitacionCell from './contacto/mapaubicacioncell.jsx'

export default function DejanosMensajeCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 40 / proporcional, paddingBottom: 15 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional,
                marginBottom: 70 / proporcional}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                    <div style={{width: '100%', height: 'auto'}}>
                        <FormularioCell proporcional={proporcional}/>
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <MapaUbitacionCell proporcional={proporcional}/>
                    </div>
            </div>
        </div>
    )
}
