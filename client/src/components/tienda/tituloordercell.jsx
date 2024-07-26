import React, { useState } from 'react'

import grid_green from '../../assets/iconos/tienda/grid_green.png'
import grid_black from '../../assets/iconos/tienda/grid_black.png'
import lista_green from '../../assets/iconos/tienda/list_green.png'
import lista_black from '../../assets/iconos/tienda/list_black.png'

export default function TituloOrderCell({proporcional}) {

    const [order_by, setOrderBy] = useState('')

    const [opcion_vista, setOpcionVista] = useState('grid')
    const [seleccion_vista, setSeleccionVista] = useState('')

    return (
        <div className='d-flex justify-content-between' style={{width: '100%', height: 47 / proporcional}}>
            <div className='d-flex justify-content-start' style={{width: 'auto', height: 47 / proporcional}}>
                <h2 style={{fontSize: 36 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0, color: 'rgb(51, 51, 51)', fontWeight: 700, 
                    fontFamily: 'Lemonada, sans-serif', textAlign: 'left', cursor: 'default', marginTop: 7 / proporcional}}>
                    Tienda
                </h2>
            </div>
            <div className='d-flex justify-content-end' style={{width: 'auto', height: 47 / proporcional}}>
                <div className='d-flex' style={{width: 'auto', lineHeight: 47 / proporcional}}>
                    <select
                        id='order_by'
                        className='form-select rounded-pill'
                        style={{width: 230 / proporcional, height: 47 / proporcional, fontSize: 16 / proporcional, lineHeight: `${23 / proporcional}px`, color: 'rgb(51, 51, 51)',
                            fontWeight: 400, fontFamily: 'Poppins, sans-serif'}}
                        value={order_by}
                        onChange={(event) => event.target.value !== '0' ? setOrderBy(event.target.value) : null}>
                        <option value='0'>Ordenar por</option>
                        <option value='popularidad'>Popularidad</option>
                        <option value='calificacion'>Calificacion</option>
                        <option value='novedades'>Novedades</option>
                        <option value='precio-DESC'>menor a mayor precio</option>
                        <option value='precio-ASC'>mayor a menor precio</option>
                    </select>
                    <div className='' style={{width: 120 / proporcional, height: 47 / proporcional, marginLeft: 10 / proporcional}}>
                        <div className='rounded-pill' style={{width: '100%', height: 47 / proporcional, border: '1px solid rgb(229, 229, 229', 
                            paddingTop: 11 / proporcional, paddingBottom: 11 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 23 / proporcional}}>
                                <h2 style={{fontSize: 16 / proporcional, lineHeight: `${23 / proporcional}px`, marginBottom: 0, color: 'rgb(51, 51, 51)', fontWeight: 500, 
                                    fontFamily: 'Poppins, sans-serif', textAlign: 'center', cursor: 'default'}}>
                                    Items: 12
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: 100 / proporcional, height: 47 / proporcional, marginLeft: 10 / proporcional}}>
                        <div className='rounded-pill' style={{width: '100%', height: 47 / proporcional, border: '1px solid rgb(229, 229, 229', 
                            paddingTop: 11 / proporcional, paddingBottom: 11 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 23 / proporcional}}>
                                <img src={opcion_vista === 'grid' || seleccion_vista === 'grid' ? grid_green : grid_black} 
                                    style={{width: 23 / proporcional, height: 23 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionVista('grid')} onMouseLeave={() => setSeleccionVista('')} onClick={() => setOpcionVista('grid')}/>
                                <img src={opcion_vista === 'lista' || seleccion_vista === 'lista' ? lista_green : lista_black} 
                                    style={{width: 23 / proporcional, height: 23 / proporcional, cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionVista('lista')} onMouseLeave={() => setSeleccionVista('')} onClick={() => setOpcionVista('lista')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
