import React, { useState } from 'react'

import search_black from '../../../assets/iconos/producto/search_black.png'
import search_white from '../../../assets/iconos/producto/search_white.png'
import refresh_white from '../../../assets/iconos/producto/refresh_white.png'
import favorito_white from '../../../assets/iconos/producto/favorito_white.png'
import star_full from '../../../assets/iconos/tienda/star_full.png'
import star_half from '../../../assets/iconos/tienda/star_half.png'
import star_empty from '../../../assets/iconos/tienda/star_empty.png'

export default function CardProducto({proporcional, producto}) {

    const [seleccion_producto, setSeleccionProducto] = useState('')
    const [seleccion_opcion, setSeleccionOpcion] = useState('')

    const [boton_share, setBotonShare] = useState (false)
    const [boton_cart, setBotonCart] = useState (false)
    const [boton_heart, setBotonHeart] = useState(false)

    return (
        <div className='' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional, border: '1px solid rgb(229, 229, 229)', borderRadius: 10 / proporcional,
                padding: 15 / proporcional, paddingBottom: 10 / proporcional, background: 'white', zIndex: 99}}>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 350 / proporcional, marginBottom: 25 / proporcional,
                    background: seleccion_producto === producto.id  ? 'rgb(0, 0, 0, 0.2)' : 'white', zIndex: 999}}
                onMouseOver={() => setSeleccionProducto(producto.id)} onMouseLeave={() => setSeleccionProducto('')}>
                <div className='position-relative' style={{width: 350 / proporcional, height: 350 / proporcional}}>
                    <img src={producto.image} style={{width: 350 / proporcional, height: 350 / proporcional, padding: 87.5 / proporcional}}/>
                    {
                        seleccion_producto === producto.id ? (
                            <div className='rounded-circle position-absolute top-50 start-50 translate-middle'  
                                style={{width: 46 / proporcional, height: 46 / proporcional, background: seleccion_opcion === 'search' ? 'rgb(213, 180, 31)' : '#a0b31b',
                                        cursor: 'pointer'}}
                                onMouseOver={() => setSeleccionOpcion('search')} onMouseLeave={() => setSeleccionOpcion('')}>
                                <img src={seleccion_opcion === 'search' ? search_white : search_black} 
                                    style={{width: 46 / proporcional, height: 46 / proporcional, padding: 6 / proporcional}}/>
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
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                    <img src={star_empty} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 3 / proporcional}}/>
                    <img src={star_empty} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 3 / proporcional}}/>
                    <img src={star_empty} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 3 / proporcional}}/>
                    <img src={star_empty} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 3 / proporcional}}/>
                    <img src={star_empty} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 3 / proporcional}}/>
                    {
                        producto.calificaciones > 0 ? (
                            <span style={{fontSize: 14 / proporcional, fontWeigh: 600, color: 'rgb(153, 153, 153)', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, 
                                lineHeight: `${24 / proporcional}px`, textAlign: 'center', marginLeft: 10 / proporcional}}>
                                ({producto.calificaciones})
                            </span>
                        ) : null
                    }
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                    <div className='rounded-circle' style={{width: 46 / proporcional, height: 46 / proporcional, background: boton_share ? '#a0b31b' : 'rgb(213, 180, 31)', cursor: 'pointer'}}
                        onMouseOver={() => setBotonShare(true)} onMouseLeave={() => setBotonShare(false)}>
                        <img src={refresh_white} style={{width: 46 / proporcional, height: 46 / proporcional, padding: 13 / proporcional}}/>
                    </div>
                    <div className='rounded-pill' style={{width: 130 / proporcional, height: 46 / proporcional, marginRight: 10 / proporcional, marginLeft: 10 / proporcional, 
                            cursor: 'pointer', background: boton_cart ? 'rgb(213, 180, 31)' : '#a0b31b'}} onMouseOver={() => setBotonCart(true)} onMouseLeave={() => setBotonCart(false)}>
                        <p style={{fontSize: 16 / proporcional, fontWeigh: 400, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, 
                            lineHeight: `${46 / proporcional}px`, textAlign: 'center'}}>
                            Carrito
                        </p>
                    </div>
                    <div className='rounded-circle' style={{width: 46 / proporcional, height: 46 / proporcional, background: boton_heart ? '#a0b31b' : 'rgb(213, 180, 31)', cursor: 'pointer'}}
                        onMouseOver={() => setBotonHeart(true)} onMouseLeave={() => setBotonHeart(false)}>
                        <img src={favorito_white} style={{width: 46 / proporcional, height: 46 / proporcional, padding: 13 / proporcional}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
