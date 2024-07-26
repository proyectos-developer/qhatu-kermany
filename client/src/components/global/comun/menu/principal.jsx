import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import arrow_down from '../../../../assets/iconos/menu/principal/down_black.png'
import search from '../../../../assets/iconos/menu/principal/search_black.png'
import perfil from '../../../../assets/iconos/menu/principal/perfil_black.png'
import shop from '../../../../assets/iconos/menu/principal/shop_black.png'

export default function MenuPrincipal({proporcional}) {

    const navigate = useNavigate()

    const [seleccion_menu, setSeleccionMenu] = useState('')
    const [menu, setMenu] = useState('')

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 86 / proporcional}}>
                    <div style={{width: '24%', height: 86 / proporcional, padding: 10 / proporcional}}>
                        <div style={{width: '100%', height: 39 / proporcional, marginTop: 27 / proporcional}}>
                            <h2 style={{color: 'rgb(160, 179, 27)', fontSize: 30 / proporcional, fontWeight: 700, lineHeight: `${39 / proporcional}px`, cursor: 'pointer',
                                fontFamily: 'Lemonada, sans-serif'}}>
                                QHATU
                            </h2>
                        </div>
                    </div>
                    <div className='' style={{width: '48%', height: 86 / proporcional, padding: 10 / proporcional}}>
                        <div className='' style={{width: '100%', height: 54 / proporcional, marginTop: 12 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 54 / proporcional}}>
                                <div classNamed='' style={{width: 'auto', height: 'auto', padding: 15 / proporcional}}
                                    onMouseOver={() => setSeleccionMenu('inicio')} onMouseLeave={() => setSeleccionMenu('')}
                                    onClick={() => navigate ('/')}>
                                    <div className='d-flex' style={{width: 'auto', height: 34 / proporcional, cursor: 'pointer'}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontWeight: 500, fontFamily: 'Poppins, sans-serif',
                                            color: 'rgb(51, 51, 51)'}}>
                                            Inicio
                                        </p>
                                        <img src={arrow_down} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 4 / proporcional}}/>
                                    </div>
                                </div>
                                <div classNamed='' style={{width: 'auto', height: 'auto', padding: 15 / proporcional}}
                                    onMouseOver={() => setSeleccionMenu('nosotros')} onMouseLeave={() => setSeleccionMenu('')}
                                    onClick={() => navigate ('/sobre-nosotros')}>
                                    <div className='d-flex' style={{width: 'auto', height: 34 / proporcional, cursor: 'pointer'}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontWeight: 500, fontFamily: 'Poppins, sans-serif',
                                            color: 'rgb(51, 51, 51)'}}>
                                            Nosotros
                                        </p>
                                        <img src={arrow_down} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 4 / proporcional}}/>
                                    </div>
                                </div>
                                <div classNamed='' style={{width: 'auto', height: 'auto', padding: 15 / proporcional}}
                                    onMouseOver={() => setSeleccionMenu('tienda')} onMouseLeave={() => setSeleccionMenu('')}
                                    onClick={() => navigate ('/nuestra-tienda')}>
                                    <div className='d-flex' style={{width: 'auto', height: 34 / proporcional, cursor: 'pointer'}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontWeight: 500, fontFamily: 'Poppins, sans-serif',
                                            color: 'rgb(51, 51, 51)'}}>
                                            Tienda
                                        </p>
                                        <img src={arrow_down} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 4 / proporcional}}/>
                                    </div>
                                </div>
                                <div classNamed='' style={{width: 'auto', height: 'auto', padding: 15 / proporcional}}
                                    onMouseOver={() => setSeleccionMenu('blog')} onMouseLeave={() => setSeleccionMenu('')}
                                    onClick={() => navigate ('/nuestro-blog')}>
                                    <div className='d-flex' style={{width: 'auto', height: 34 / proporcional, cursor: 'pointer'}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontWeight: 500, fontFamily: 'Poppins, sans-serif',
                                            color: 'rgb(51, 51, 51)'}}>
                                            Blog
                                        </p>
                                        <img src={arrow_down} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 4 / proporcional}}/>
                                    </div>
                                </div>
                                <div classNamed='' style={{width: 'auto', height: 'auto', padding: 15 / proporcional}}
                                    onMouseOver={() => setSeleccionMenu('contacto')} onMouseLeave={() => setSeleccionMenu('')}
                                    onClick={() => navigate ('/contactatnos')}>
                                    <div className='d-flex' style={{width: 'auto', height: 34 / proporcional, cursor: 'pointer'}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontWeight: 500, fontFamily: 'Poppins, sans-serif',
                                            color: 'rgb(51, 51, 51)'}}>
                                            Contáctanos
                                        </p>
                                        <img src={arrow_down} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 4 / proporcional}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '24%', height: 86 / proporcional, padding: 10 / proporcional}}>
                        <div style={{width: '100%', height: 48 / proporcional, padding: 10 / proporcional, marginTop: 18 / proporcional}}>
                            <div className='d-flex justify-content-end' style={{width: '100%', height: 28 / proporcional}}>
                                <img src={search} style={{width: 28 / proporcional, height: 28 / proporcional, padding: 5 / proporcional, marginLeft: 10 / proporcional,
                                        marginRight: 10 / proporcional, cursor: 'pointer'}}/>
                                <img src={perfil} style={{width: 28 / proporcional, height: 28 / proporcional, padding: 5 / proporcional, marginLeft: 10 / proporcional,
                                        marginRight: 10 / proporcional, cursor: 'pointer'}}/>
                                <div className='position-relative' style={{width: 'auto', height: 'auto'}}>
                                    <img src={shop} style={{width: 28 / proporcional, height: 28 / proporcional, padding: 5 / proporcional, marginLeft: 10 / proporcional,
                                            marginRight: 10 / proporcional, cursor: 'pointer'}}/>
                                    <div className='rounded-circle position-absolute start-50 top-0 ' 
                                        style={{width: 16 / proporcional, height: 16 / proporcional, background: 'rgba(160, 179, 27, 0.8)'}}>
                                        <p style={{fontSize: 12 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0, fontWeight: 500, fontFamily: 'Poppins, sans-serif',
                                            color: 'white', textAlign: 'center'}}>
                                            0
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
