import React, {useState} from 'react'

import manzana from '../../assets/image/home/producto_manzana_03.png'
import fresa from '../../assets/image/home/producto_fresa_07.png'
import kiwi from '../../assets/image/home/producto_kiwi_00.png'
import naranja from '../../assets/image/home/producto_naranja_05.png'
import palta from '../../assets/image/home/producto_palta_04.png'
import papaya from '../../assets/image/home/producto_papaya_06.png'
import pera from '../../assets/image/home/producto_pera_02.png'
import sandia from '../../assets/image/home/producto_sandia_09.png'

import CardProductoTablet from './card/productotablet.jsx'

export default function NuestrosProductosTablet({proporcional}) {

    const [filtros, setFiltros] = useState ('')
    const [menu, setMenu] = useState('tendencias')

    const productos = [
        {id: '0', image: manzana, producto: 'Manzanas', precio_maximo: 405, precio_minimo: 0, oferta: 0, descuento: 0, calificaciones: 2, estrellas: 5},
        {id: '1', image: fresa, producto: 'Fresas', precio_maximo: 279, precio_minimo: 0, oferta: 239, descuento: 14, calificaciones: 0, estrellas: 0},
        {id: '2', image: kiwi, producto: 'Kiwi', precio_maximo: 312, precio_minimo: 112, oferta: 0, descuento: 0, calificaciones: 2, estrellas: 5},
        {id: '3', image: naranja, producto: 'Naranjas', precio_maximo: 488, precio_minimo: 0, oferta: 401, descuento: 18, calificaciones: 0, estrellas: 0},
        {id: '4', image: palta, producto: 'Paltas', precio_maximo: 276, precio_minimo: 0, oferta: 250, descuento: 10, calificaciones: 0, estrellas: 0},
        {id: '5', image: papaya, producto: 'Papayas', precio_maximo: 318, precio_minimo: 0, oferta: 0, descuento: 0, calificaciones: 0, estrellas: 0},
        {id: '6', image: pera, producto: 'Peras', precio_maximo: 492, precio_minimo: 0, oferta: 396, descuento: 20, calificaciones: 0, estrellas: 0},
        {id: '7', image: sandia, producto: 'Sandias', precio_maximo: 146, precio_minimo: 0, oferta: 0, descuento: 0, calificaciones: 0, estrellas: 0}
    ]

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                <div style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                        <h2 style={{fontSize: 36 / proporcional, fontWeigh: 700, color: 'rgb(51, 51, 51)', fontFamily: 'Lemonada, sans-serif', marginBottom: 0, lineHeight: `${48 / proporcional}px`,
                            textAlign: 'center', marginBottom: 0 / proporcional}}>
                            Nuestros productos
                        </h2>
                    </div>
                    <div style={{width: '100%', height: 'auto', marginBottom: 45 / proporcional, paddingLeft: 0 / proporcional, paddingRight: 0 / proporcional,
                            marginTop: 10 / proporcional}}>
                        <p style={{fontSize: 16 / proporcional, fontWeigh: 500, color: 'rgb(51, 51, 51)', fontFamily: 'Poppins, sans-serif', marginBottom: 0, lineHeight: `${24 / proporcional}px`,
                            textAlign: 'center', marginBottom: 0 / proporcional}}>
                            Aenean sodales dicum augue, in faucibus nisi sollicitudin eu. Nulla semper arcu. Nam molestie sem eu quam fermentum a tempus nisi aliquet.
                        </p>
                    </div>
                </div>
                <div style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                        <div className='rounded-pill' style={{width: 'auto', height: 45 / proporcional, background: filtros === 'tendencias' || menu === 'tendencias' ? 'rgb(255, 180, 34)' : 'rgb(160,  179, 27)',
                                paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, cursor: 'pointer'}}
                                onMouseOver={() => setFiltros('tendencias')} onMouseLeave={() => setFiltros('')} onClick={() => setMenu('tendencias')}>
                            <p style={{fontSize: 16 / proporcional, fontWeigh: 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0, lineHeight: `${45 / proporcional}px`,
                                textAlign: 'center', marginBottom: 0 / proporcional}}>
                                Tendencias
                            </p>
                        </div>
                        <div className='rounded-pill' style={{width: 'auto', height: 45 / proporcional, background: filtros === 'presentado' || menu === 'presentado' ? 'rgb(255, 180, 34)' : 'rgb(160,  179, 27)',
                                paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, cursor: 'pointer'}}
                                onMouseOver={() => setFiltros('presentado')} onMouseLeave={() => setFiltros('')} onClick={() => setMenu('presentado')}>
                            <p style={{fontSize: 16 / proporcional, fontWeigh: 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0, lineHeight: `${45 / proporcional}px`,
                                textAlign: 'center', marginBottom: 0 / proporcional}}>
                                Presentado
                            </p>
                        </div>
                        <div className='rounded-pill' style={{width: 'auto', height: 45 / proporcional, background: filtros === 'enventa' || menu === 'enventa' ? 'rgb(255, 180, 34)' : 'rgb(160,  179, 27)',
                                paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, cursor: 'pointer'}}
                                onMouseOver={() => setFiltros('enventa')} onMouseLeave={() => setFiltros('')} onClick={() => setMenu('enventa')}>
                            <p style={{fontSize: 16 / proporcional, fontWeigh: 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0, lineHeight: `${45 / proporcional}px`,
                                textAlign: 'center', marginBottom: 0 / proporcional}}>
                                En venta
                            </p>
                        </div>
                        <div className='rounded-pill' style={{width: 'auto', height: 45 / proporcional, background: filtros === 'calificados' || menu === 'calificados' ? 'rgb(255, 180, 34)' : 'rgb(160,  179, 27)',
                                paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, cursor: 'pointer'}}
                                onMouseOver={() => setFiltros('calificados')} onMouseLeave={() => setFiltros('')} onClick={() => setMenu('calificados')}>
                            <p style={{fontSize: 16 / proporcional, fontWeigh: 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0, lineHeight: `${45 / proporcional}px`,
                                textAlign: 'center', marginBottom: 0 / proporcional}}>
                                Mejores calificados
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                        <div style={{width: '48%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                            <CardProductoTablet proporcional={proporcional} producto={productos[0]}/>
                        </div>
                        <div style={{width: '48%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                            <CardProductoTablet proporcional={proporcional} producto={productos[1]}/>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                        <div style={{width: '48%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                            <CardProductoTablet proporcional={proporcional} producto={productos[2]}/>
                        </div>
                        <div style={{width: '48%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                            <CardProductoTablet proporcional={proporcional} producto={productos[3]}/>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                        <div style={{width: '48%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                            <CardProductoTablet proporcional={proporcional} producto={productos[4]}/>
                        </div>
                        <div style={{width: '48%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                            <CardProductoTablet proporcional={proporcional} producto={productos[5]}/>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                        <div style={{width: '48%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                            <CardProductoTablet proporcional={proporcional} producto={productos[6]}/>
                        </div>
                        <div style={{width: '48%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                            <CardProductoTablet proporcional={proporcional} producto={productos[7]}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
