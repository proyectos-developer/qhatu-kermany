import React from 'react'

import { Outlet } from 'react-router-dom'

import MenuSuperiorTablet from './comun/menu/superiortablet.jsx'
import MenuPrincipalTablet from './comun/menu/principaltablet.jsx'
import FooterTablet from './comun/footer/footertablet.jsx'

export default function GlobalPanelTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <MenuSuperiorTablet proporcional={proporcional}/>
            <MenuPrincipalTablet proporcional={proporcional}/>
            <Outlet/>
            <FooterTablet proporcional={proporcional}/>
        </div>
    )
}
