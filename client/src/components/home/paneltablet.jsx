import React from 'react'

import BannerPrincipalTablet from './bannerprincipaltablet.jsx'
import CategoriasFrutasTablet from './categoriasfrutastablet.jsx'
import AcercaDeTablet from './acercadetablet.jsx'
import EstadisticasTablet from './estadisticastablet.jsx'
import MasVendidosTablet from './masvendidostablet.jsx'
import EspecialmenteTablet from './especialmentetablet.jsx'
import NuestrosProductosTablet from './nuestrosproductostablet.jsx'
import ExcelenteCalidadTablet from './excelentecalidadtablet.jsx'
import NuevosProductosTablet from './nuevosproductostablet.jsx'
import NuestroBlogTablet from './nuestroblogtablet.jsx'
import DejanosMensajeTablet from './dejanosmensajetablet.jsx'

export default function HomePanelTablet ({proporcional}) {

    return (
        <div style={{width: '100%', height: '100%'}}>
            <BannerPrincipalTablet proporcional={proporcional}/>
            <CategoriasFrutasTablet proporcional={proporcional}/>
            <AcercaDeTablet proporcional={proporcional}/>
            <EstadisticasTablet proporcional={proporcional}/>
            <MasVendidosTablet proporcional={proporcional}/>
            <EspecialmenteTablet proporcional={proporcional}/>
            <NuestrosProductosTablet proporcional={proporcional}/>
            <ExcelenteCalidadTablet  proporcional={proporcional}/>
            <NuevosProductosTablet proporcional={proporcional}/>
            <NuestroBlogTablet proporcional={proporcional}/>
            <DejanosMensajeTablet proporcional={proporcional}/>
        </div>
    )
}
