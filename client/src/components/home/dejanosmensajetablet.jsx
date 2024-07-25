import React from 'react'

import FormularioTablet from './contacto/formulariotablet.jsx'
import MapaUbitacionTablet from './contacto/mapaubicaciontablet.jsx'

export default function DejanosMensajeTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 40 / proporcional, paddingBottom: 15 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional,
                marginBottom: 70 / proporcional}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '64%', height: 'auto'}}>
                        <FormularioTablet proporcional={proporcional}/>
                    </div>
                    <div style={{width: '34%', height: 'auto'}}>
                        <MapaUbitacionTablet proporcional={proporcional}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
