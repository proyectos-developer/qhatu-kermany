import React from 'react'

import { Outlet } from 'react-router-dom'

export default function GlobalPanelTablet({proporcional}) {

    return (
        <div>
            <Outlet/>
        </div>
    )
}
