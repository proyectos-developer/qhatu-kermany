import React from 'react'

import Formulario from './contacto/formulario.jsx'
import MapaUbitacion from './contacto/mapaubicacion.jsx'

export default function DejanosMensaje({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 40 / proporcional, paddingBottom: 15 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional,
                marginBottom: 70 / proporcional}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '74%', height: 'auto'}}>
                        <Formulario proporcional={proporcional}/>
                    </div>
                    <div style={{width: '24%', height: 'auto'}}>
                        <MapaUbitacion proporcional={proporcional}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
