import React, { useState } from 'react'

import shop_black from '../../../assets/iconos/producto/shop_black.png'
import shop_white from '../../../assets/iconos/producto/shop_white.png'
import search_black from '../../../assets/iconos/producto/search_black.png'
import search_white from '../../../assets/iconos/producto/search_white.png'
import refresh_black from '../../../assets/iconos/producto/refresh_black.png'
import refresh_white from '../../../assets/iconos/producto/refresh_white.png'
import favorito_black from '../../../assets/iconos/producto/favorito_black.png'
import favorito_white from '../../../assets/iconos/producto/favorito_white.png'

import star_empty from '../../../assets/iconos/tienda/star_empty.png'
import star_half from '../../../assets/iconos/tienda/star_half.png'
import star_full from '../../../assets/iconos/tienda/star_full.png'

export default function CardProductoTablet({proporcional, producto}) {

    const [seleccion_producto, setSeleccionProducto] = useState('')
    const [seleccion_opcion, setSeleccionOpcion] = useState('')

    return (
        <div className='' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional, border: '1px solid rgb(229, 229, 229)', borderRadius: 10 / proporcional,
                padding: 15 / proporcional, paddingBottom: 10 / proporcional, background: 'white', zIndex: 99}}>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 350 / proporcional, marginBottom: 25 / proporcional,
                    background: seleccion_producto === producto.id  ? 'rgb(0, 0, 0, 0.2)' : 'white', zIndex: 999}}
                onMouseOver={() => setSeleccionProducto(producto.id)} onMouseLeave={() => setSeleccionProducto('')}>
                <div className='position-relative' style={{width: 350 / proporcional, height: 350 / proporcional}}>
                    <img src={producto.image} style={{width: 350 / proporcional, height: 350 / proporcional, padding: 87.5 / proporcional}}/>
                    {
                        seleccion_producto === producto.id  ? (
                            <div className='position-absolute rounded-circle' style={{width: 300 / proporcional, height: 300 / proporcional,
                                    top: 200 / proporcional, left: 25 / proporcional, zIndex: 9999}}>
                                <div style={{width: 300 / proporcional, height: 150 / proporcional, background: 'rgb(255, 180, 34, 0.4)', 
                                        borderTopRightRadius: 150 / proporcional, borderTopLeftRadius: 150 / proporcional}}>
                                    <div className='position-relative' style={{width: '100%', height: 'auto'}}>
                                        <div className='rounded-circle position-absolute'  
                                            style={{width: 46 / proporcional, height: 46 / proporcional, background: seleccion_opcion === 'shop' ? 'rgb(160, 170, 27)' : 'white',
                                                    cursor: 'pointer', top: 90 / proporcional, left: 14.5 / proporcional}}
                                            onMouseOver={() => setSeleccionOpcion('shop')} onMouseLeave={() => setSeleccionOpcion('')}>
                                            <img src={seleccion_opcion === 'shop' ? shop_white : shop_black} style={{width: 46 / proporcional, height: 46 / proporcional, padding: 10 / proporcional}}/>
                                        </div>  
                                        <div className='rounded-circle position-absolute'  
                                            style={{width: 46 / proporcional, height: 46 / proporcional, background: seleccion_opcion === 'search' ? 'rgb(160, 170, 27)' : 'white',
                                                    cursor: 'pointer', top: 44 / proporcional, left: 89.5 / proporcional}}
                                            onMouseOver={() => setSeleccionOpcion('search')} onMouseLeave={() => setSeleccionOpcion('')}>
                                            <img src={seleccion_opcion === 'search' ? search_white : search_black} style={{width: 46 / proporcional, height: 46 / proporcional, padding: 10 / proporcional}}/>
                                        </div>  
                                        <div className='rounded-circle position-absolute'  
                                            style={{width: 46 / proporcional, height: 46 / proporcional, background: seleccion_opcion === 'refresh' ? 'rgb(160, 170, 27)' : 'white',
                                                    cursor: 'pointer', top: 44 / proporcional, left: 164.5 / proporcional}}
                                            onMouseOver={() => setSeleccionOpcion('refresh')} onMouseLeave={() => setSeleccionOpcion('')}>
                                            <img src={seleccion_opcion === 'refresh' ? refresh_white : refresh_black} style={{width: 46 / proporcional, height: 46 / proporcional, padding: 10 / proporcional}}/>
                                        </div>  
                                        <div className='rounded-circle position-absolute'  
                                            style={{width: 46 / proporcional, height: 46 / proporcional, background: seleccion_opcion === 'favorito' ? 'rgb(160, 170, 27)' : 'white',
                                                    cursor: 'pointer', top: 90 / proporcional, left: 239.5 / proporcional}}
                                            onMouseOver={() => setSeleccionOpcion('favorito')} onMouseLeave={() => setSeleccionOpcion('')}>
                                            <img src={seleccion_opcion === 'favorito' ? favorito_white : favorito_black} style={{width: 46 / proporcional, height: 46 / proporcional, padding: 10 / proporcional}}/>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        ) : null
                    }
                </div>
            </div>
            <div className='' style={{width: '100%', height: 'auto', zIndex: 99999}}>
                <h3 style={{fontSize: 16 / proporcional, fontWeigh: 600, color: 'rgb(51, 51, 51)', fontFamily: 'Lemonada, sans-serif', marginBottom: 15 / proporcional, 
                    lineHeight: `${18 / proporcional}px`, textAlign: 'center'}}>
                    {producto.producto}
                </h3>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 12 / proporcional}}>
                    <span style={{fontSize: 16 / proporcional, fontWeigh: 600, color: 'rgb(160, 179, 27)', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, 
                        lineHeight: `${23 / proporcional}px`, textAlign: 'center'}}>
                        ${producto.precio_maximo}
                    </span>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <img src={star_empty} className='' style={{width: 24 / proporcional, height: 24 / proporcional, padding: 3 / proporcional}}/>
                    <img src={star_empty} className='' style={{width: 24 / proporcional, height: 24 / proporcional, padding: 3 / proporcional}}/>
                    <img src={star_empty} className='' style={{width: 24 / proporcional, height: 24 / proporcional, padding: 3 / proporcional}}/>
                    <img src={star_empty} className='' style={{width: 24 / proporcional, height: 24 / proporcional, padding: 3 / proporcional}}/>
                    <img src={star_empty} className='' style={{width: 24 / proporcional, height: 24 / proporcional, padding: 3 / proporcional}}/>
                    {
                        producto.calificaciones > 0 ? (
                            <span style={{fontSize: 14 / proporcional, fontWeigh: 600, color: 'rgb(153, 153, 153)', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, 
                                lineHeight: `${24 / proporcional}px`, textAlign: 'center', marginLeft: 10 / proporcional}}>
                                ({producto.calificaciones})
                            </span>
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}
