import React from 'react'

import { Outlet } from 'react-router-dom'

import MenuSuperior from './comun/menu/superior.jsx'
import MenuPrincipal from './comun/menu/principal.jsx'
import Footer from './comun/footer/footer.jsx'

export default function GlobalPanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <MenuSuperior proporcional={proporcional}/>
            <MenuPrincipal proporcional={proporcional}/>
            <Outlet/>
            <Footer proporcional={proporcional}/>
        </div>
    )
}
