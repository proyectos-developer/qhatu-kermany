import React, { useState } from 'react'

import phone from '../../../../assets/iconos/menu/superior/phone_white.png'
import location from '../../../../assets/iconos/menu/superior/location_white.png'
import { useNavigate } from 'react-router-dom'

export default function MenuSuperiorCell({proporcional}) {

    const navigate = useNavigate('')

    const [seleccion_menu, setSeleccionMenu] = useState('')
    const [menu, setMenu] = useState('')

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 5 / proporcional, paddingBottom: 5 / proporcional, paddingLeft: 0 / proporcional, 
            paddingRight: 0 / proporcional, background: 'rgb(160, 179, 27)'}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, paddingTop: 10 / proporcional,
                    paddingBottom: 10 / proporcional}}>
                <div className='' style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                        <div className='d-flex' style={{width: 'auto', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                            <img src={location} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 2 / proporcional, marginRight: 6 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontFamily: 'Poppins, sans-serif', 
                                fontWeight: 500, color: 'white', cursor: 'default'}}>
                                Lima, Perú
                            </p>
                        </div>
                        <div className='d-flex' style={{width: 'auto', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                            <img src={phone} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 2 / proporcional, marginRight: 6 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontFamily: 'Poppins, sans-serif', 
                                fontWeight: 500, color: 'white', cursor: 'default'}}>
                                (+51) 999-XXXXXX
                            </p>
                        </div>
                    </div>
                    
                    <div className='d-flex justify-content-end' style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex' style={{width: 'auto', height: 'auto'}}>
                            <div style={{width: 'auto', height: 'auto', marginLeft: 15 / proporcional, marginRight: 15 / proporcional}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontFamily: 'Poppins, sans-serif', 
                                    fontWeight: 500, color: seleccion_menu === 'nosotros' || menu === 'acerca-nosotros' ? 'rgb(255, 180, 34)' : 'white',
                                    cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('nosotros')} onMouseLeave={() => setSeleccionMenu('')} 
                                    onClick={() => navigate ('/acerca-nosotros')}>
                                    Nosotros
                                </p>
                            </div>
                            <div style={{width: 'auto', height: 'auto', marginLeft: 15 / proporcional, marginRight: 15 / proporcional}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontFamily: 'Poppins, sans-serif', 
                                    fontWeight: 500, color: seleccion_menu === 'contactanos' || menu === 'contactanos' ? 'rgb(255, 180, 34)' : 'white',
                                    cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('contactanos')} onMouseLeave={() => setSeleccionMenu('')} 
                                    onClick={() => navigate ('/contactanos')}>
                                    Contácto
                                </p>
                            </div>
                            <div style={{width: 'auto', height: 'auto', marginLeft: 15 / proporcional, marginRight: 15 / proporcional}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontFamily: 'Poppins, sans-serif', 
                                    fontWeight: 500, color: seleccion_menu === 'politica' || menu === 'politica-privacidad' ? 'rgb(255, 180, 34)' : 'white',
                                    cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('politica')} onMouseLeave={() => setSeleccionMenu('')} 
                                    onClick={() => navigate ('/politica-privacidad')}>
                                    Política
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
