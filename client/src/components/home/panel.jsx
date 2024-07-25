import React from 'react'

import BannerPrincipal from './bannerprincipal.jsx'
import CategoriasFrutas from './categoriasfrutas.jsx'
import AcercaDe from './acercade.jsx'
import Estadisticas from './estadisticas.jsx'
import MasVendidos from './masvendidos.jsx'
import Especialmente from './especialmente.jsx'
import NuestrosProductos from './nuestrosproductos.jsx'
import ExcelenteCalidad from './excelentecalidad.jsx'
import NuevosProductos from './nuevosproductos.jsx'
import NuestroBlog from './nuestroblog.jsx'
import DejanosMensaje from './dejanosmensaje.jsx'

export default function HomePanel({proporcional}) {

    return (
        <div style={{width: '100%', height: '100%'}}>
            <BannerPrincipal proporcional={proporcional}/>
            <CategoriasFrutas proporcional={proporcional}/>
            <AcercaDe proporcional={proporcional}/>
            <Estadisticas proporcional={proporcional}/>
            <MasVendidos proporcional={proporcional}/>
            <Especialmente proporcional={proporcional}/>
            <NuestrosProductos proporcional={proporcional}/>
            <ExcelenteCalidad  proporcional={proporcional}/>
            <NuevosProductos proporcional={proporcional}/>
            <NuestroBlog proporcional={proporcional}/>
            <DejanosMensaje proporcional={proporcional}/>
        </div>
    )
}
