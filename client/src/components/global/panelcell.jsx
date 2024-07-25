import React from 'react'

import { Outlet, useNavigate } from 'react-router-dom'

import MenuSuperiorCell from './comun/menu/superiorcell.jsx'
import MenuPrincipalCell from './comun/menu/principalcell.jsx'
import FooterCell from './comun/footer/footercell.jsx'

import { useDispatch, useSelector } from 'react-redux'
import { set_open_menu_main } from '../../redux/actions/data.js'

export default function GlobalPanelTablet({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {open_menu_main} = useSelector(({data_actions}) => data_actions)

    return (
        <div className='position-relative' style={{width: '100%', height: '100%'}}>
            <MenuSuperiorCell proporcional={proporcional}/>
            <MenuPrincipalCell proporcional={proporcional}/>
            {
                open_menu_main ? (
                    <div className='position-absolute start-0 d-flex' style={{width: '100%', height: '100%', top: 193 / proporcional}}>
                        <div style={{width: '40%', height: '100%', background: 'rgba(89, 89, 89, 0.6)'}}/>
                        <div className='' style={{width: '60%', height: '100%', padding: 10 / proporcional, background: 'rgb(160, 179, 27)'}}>
                                <div classNamed='' style={{width: 'auto', height: 'auto', padding: 15 / proporcional}}
                                    onClick={() => {navigate ('/'); dispatch(set_open_menu_main(false))}}>
                                    <div className='d-flex' style={{width: 'auto', height: 34 / proporcional}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontWeight: 500, fontFamily: 'Poppins, sans-serif',
                                            color: 'rgb(51, 51, 51)'}}>
                                            Inicio
                                        </p>
                                    </div>
                                </div>
                                <div classNamed='' style={{width: 'auto', height: 'auto', padding: 15 / proporcional}}
                                    onClick={() => {navigate ('/sobre-nosotros'); dispatch(set_open_menu_main(false))}}>
                                    <div className='d-flex' style={{width: 'auto', height: 34 / proporcional}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontWeight: 500, fontFamily: 'Poppins, sans-serif',
                                            color: 'rgb(51, 51, 51)'}}>
                                            Nosotros
                                        </p>
                                    </div>
                                </div>
                                <div classNamed='' style={{width: 'auto', height: 'auto', padding: 15 / proporcional}}
                                    onClick={() => {navigate ('/nuestra-tienda'); dispatch(set_open_menu_main(false))}}>
                                    <div className='d-flex' style={{width: 'auto', height: 34 / proporcional}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontWeight: 500, fontFamily: 'Poppins, sans-serif',
                                            color: 'rgb(51, 51, 51)'}}>
                                            Tienda
                                        </p>
                                    </div>
                                </div>
                                <div classNamed='' style={{width: 'auto', height: 'auto', padding: 15 / proporcional}}
                                    onClick={() => {navigate ('/nuestro-blog'); dispatch(set_open_menu_main(false))}}>
                                    <div className='d-flex' style={{width: 'auto', height: 34 / proporcional}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontWeight: 500, fontFamily: 'Poppins, sans-serif',
                                            color: 'rgb(51, 51, 51)'}}>
                                            Blog
                                        </p>
                                    </div>
                                </div>
                                <div classNamed='' style={{width: 'auto', height: 'auto', padding: 15 / proporcional}}
                                    onClick={() => {navigate ('/contactatnos'); dispatch(set_open_menu_main(false))}}>
                                    <div className='d-flex' style={{width: 'auto', height: 34 / proporcional}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontWeight: 500, fontFamily: 'Poppins, sans-serif',
                                            color: 'rgb(51, 51, 51)'}}>
                                            Contáctanos
                                        </p>
                                    </div>
                                </div>
                        </div>
                    </div>
                ) : null
            }
            <Outlet/>
            <FooterCell proporcional={proporcional}/>
        </div>
    )
}
