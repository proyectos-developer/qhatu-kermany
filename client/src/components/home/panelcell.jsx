import React from 'react'

import BannerPrincipalCell from './bannerprincipalcell.jsx'
import CategoriasFrutasCell from './categoriasfrutascell.jsx'
import AcercaDeCell from './acercadecell.jsx'
import EstadisticasCell from './estadisticascell.jsx'
import MasVendidosCell from './masvendidoscell.jsx'
import EspecialmenteCell from './especialmentecell.jsx'
import NuestrosProductosCell from './nuestrosproductoscell.jsx'
import ExcelenteCalidadCell from './excelentecalidadcell.jsx'
import NuevosProductosCell from './nuevosproductoscell.jsx'
import NuestroBlogCell from './nuestroblogcell.jsx'
import DejanosMensajeCell from './dejanosmensajecell.jsx'

export default function HomePanelCell ({proporcional}) {

    return (
        <div style={{width: '100%', height: '100%'}}>
            <BannerPrincipalCell proporcional={proporcional}/>
            <CategoriasFrutasCell proporcional={proporcional}/>
            <AcercaDeCell proporcional={proporcional}/>
            <EstadisticasCell proporcional={proporcional}/>
            <MasVendidosCell proporcional={proporcional}/>
            <EspecialmenteCell proporcional={proporcional}/>
            <NuestrosProductosCell proporcional={proporcional}/>
            <ExcelenteCalidadCell  proporcional={proporcional}/>
            <NuevosProductosCell proporcional={proporcional}/>
            <NuestroBlogCell proporcional={proporcional}/>
            <DejanosMensajeCell proporcional={proporcional}/>
        </div>
    )
}
