import React, { useState } from 'react'

import manzana from '../../assets/image/home/producto_manzana_03.png'
import fresa from '../../assets/image/home/producto_fresa_07.png'
import kiwi from '../../assets/image/home/producto_kiwi_00.png'
import naranja from '../../assets/image/home/producto_naranja_05.png'

import right from '../../assets/iconos/tienda/right_white.png'
import left from '../../assets/iconos/tienda/left_white.png'

import CardProducto from '../tienda/card/producto'

export default function ProductosRelacionados({proporcional}) {

    const [boton_left, setBotonLeft] = useState(false)
    const [boton_right, setBotonRight] = useState(false)

    const productos = [
        {id: '0', image: manzana, producto: 'Manzanas', precio_maximo: 405, precio_minimo: 0, oferta: 0, descuento: 0, calificaciones: 2, estrellas: 5},
        {id: '1', image: fresa, producto: 'Fresas', precio_maximo: 279, precio_minimo: 0, oferta: 239, descuento: 14, calificaciones: 0, estrellas: 0},
        {id: '2', image: kiwi, producto: 'Kiwi', precio_maximo: 312, precio_minimo: 112, oferta: 0, descuento: 0, calificaciones: 2, estrellas: 5},
        {id: '3', image: naranja, producto: 'Naranjas', precio_maximo: 488, precio_minimo: 0, oferta: 401, descuento: 18, calificaciones: 0, estrellas: 0},
    ]

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 35 / proporcional}}>
                <div className='d-flex justify-content-start' style={{width: 'auto', height: 'auto'}}>
                    <h2 style={{color: 'rgb(51, 51, 51)', fontFamily: 'Lemonada, sans-serif', fontSize: 24 / proporcional, fontWeight: 700, lineHeight: `${45 / proporcional}px`,
                        marginBottom: 0}}>Productos relacionados
                    </h2>    
                </div>
                <div className='d-flex justify-content-end' style={{width: 'auto', height: 45 / proporcional}}>
                    <img className='rounded-circle' src={left} style={{width: 45 / proporcional, height: 45 / proporcional, padding: 12.5 / proporcional, background: boton_left ? 'rgb(206, 179, 30)' : 'rgb(160, 179, 27)', 
                        cursor: 'pointer', marginRight: 10 / proporcional}} onMouseOver={() => setBotonLeft (true)} onMouseLeave={() => setBotonLeft(false)}/>
                    <img className='rounded-circle'  src={right} style={{width: 45 / proporcional, height: 45 / proporcional, padding: 12.5 / proporcional, background: boton_right ? 'rgb(206, 179, 30)' : 'rgb(160, 179, 27)', 
                        cursor: 'pointer'}} onMouseOver={() => setBotonRight (true)} onMouseLeave={() => setBotonRight(false)}/>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '24%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                        <CardProducto proporcional={proporcional} producto={productos[0]}/>
                    </div>
                    <div style={{width: '24%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                        <CardProducto proporcional={proporcional} producto={productos[1]}/>
                    </div>
                    <div style={{width: '24%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                        <CardProducto proporcional={proporcional} producto={productos[2]}/>
                    </div>
                    <div style={{width: '24%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                        <CardProducto proporcional={proporcional} producto={productos[2]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
