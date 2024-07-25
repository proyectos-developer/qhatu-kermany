import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import arrow_down from '../../../../assets/iconos/menu/principal/down_black.png'
import search from '../../../../assets/iconos/menu/principal/search_black.png'
import perfil from '../../../../assets/iconos/menu/principal/perfil_black.png'
import shop from '../../../../assets/iconos/menu/principal/shop_black.png'
import menu from '../../../../assets/iconos/menu/principal/menu_black.png'

import {set_open_menu_main} from '../../../../redux/actions/data'

export default function MenuPrincipalCell({proporcional}) {

    const dispatch = useDispatch()

    const {open_menu_main} = useSelector(({data_actions}) => data_actions)

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional, paddingLeft: 0 / proporcional, paddingRight: 0 / proporcional}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 86 / proporcional}}>
                    <div style={{width: '48%', height: 86 / proporcional, padding: 10 / proporcional}}>
                        <div style={{width: '100%', height: 39 / proporcional, marginTop: 27 / proporcional}}>
                            <h2 style={{color: 'rgb(160, 179, 27)', fontSize: 30 / proporcional, fontWeight: 700, lineHeight: `${39 / proporcional}px`, cursor: 'pointer',
                                fontFamily: 'Lemonada, sans-serif'}}>
                                QHATU
                            </h2>
                        </div>
                    </div>
                    <div style={{width: '48%', height: 86 / proporcional, padding: 10 / proporcional}}>
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
                                <img src={menu} style={{width: 28 / proporcional, height: 28 / proporcional, padding: 5 / proporcional, marginLeft: 10 / proporcional,
                                        marginRight: 10 / proporcional, cursor: 'pointer'}}
                                        onClick={() => dispatch(set_open_menu_main(!open_menu_main))}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
