import React, {useState} from 'react'

import manzana from '../../assets/image/home/producto_manzana_03.png'
import fresa from '../../assets/image/home/producto_fresa_07.png'
import kiwi from '../../assets/image/home/producto_kiwi_00.png'
import naranja from '../../assets/image/home/producto_naranja_05.png'
import palta from '../../assets/image/home/producto_palta_04.png'
import papaya from '../../assets/image/home/producto_papaya_06.png'
import pera from '../../assets/image/home/producto_pera_02.png'
import sandia from '../../assets/image/home/producto_sandia_09.png'

import right_black from '../../assets/iconos/tienda/right_black.png'
import right_white from '../../assets/iconos/tienda/right_white.png'

import CardProducto from './card/producto.jsx'

export default function Productos({proporcional}) {

    const [boton_nro_producto, setBotonNroProductos] = useState(1)
    const [seleccion_nro_producto, setSeleccionNroProductos] = useState(0)

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
        <div style={{width: '100%', height: 'auto'}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '32%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                    <CardProducto proporcional={proporcional} producto={productos[0]}/>
                </div>
                <div style={{width: '32%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                    <CardProducto proporcional={proporcional} producto={productos[1]}/>
                </div>
                <div style={{width: '32%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                    <CardProducto proporcional={proporcional} producto={productos[2]}/>
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '32%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                    <CardProducto proporcional={proporcional} producto={productos[3]}/>
                </div>
                <div style={{width: '32%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                    <CardProducto proporcional={proporcional} producto={productos[4]}/>
                </div>
                <div style={{width: '32%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                    <CardProducto proporcional={proporcional} producto={productos[5]}/>
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '32%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                    <CardProducto proporcional={proporcional} producto={productos[6]}/>
                </div>
                <div style={{width: '32%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                    <CardProducto proporcional={proporcional} producto={productos[7]}/>
                </div>
                <div style={{width: '32%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                    <CardProducto proporcional={proporcional} producto={productos[5]}/>
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 40 / proporcional}}>
                <div style={{width: '32%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                    <CardProducto proporcional={proporcional} producto={productos[3]}/>
                </div>
                <div style={{width: '32%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                    <CardProducto proporcional={proporcional} producto={productos[1]}/>
                </div>
                <div style={{width: '32%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                    <CardProducto proporcional={proporcional} producto={productos[2]}/>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional}}>
                <div className='rounded-circle' style={{width: 50 / proporcional, height: 50 / proporcional, marginRight: 2 / proporcional, marginLeft: 2 / proporcional,
                    background: boton_nro_producto === 1 || seleccion_nro_producto === 1 ? 'rgb(160, 179, 27)' : 'white', border: '1px solid rgb(229, 229, 229)'}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, color: boton_nro_producto === 1 || seleccion_nro_producto === 1 ? 'white' : 'rgb(51, 51, 51)',
                        fontWeight: 600, textAlign: 'center', cursor: 'pointer'}}
                        onMouseOver={() => setSeleccionNroProductos(1)} onMouseLeave={() => setSeleccionNroProductos(0)} onClick={() => setBotonNroProductos(1)}>
                        1
                    </p>
                </div>
                <div className='rounded-circle' style={{width: 50 / proporcional, height: 50 / proporcional, marginRight: 2 / proporcional, marginLeft: 2 / proporcional,
                    background: boton_nro_producto === 2 || seleccion_nro_producto === 2 ? 'rgb(160, 179, 27)' : 'white', border: '1px solid rgb(229, 229, 229)'}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, color: boton_nro_producto === 2 || seleccion_nro_producto === 2 ? 'white' : 'rgb(51, 51, 51)',
                        fontWeight: 600, textAlign: 'center', cursor: 'pointer'}}
                        onMouseOver={() => setSeleccionNroProductos(2)} onMouseLeave={() => setSeleccionNroProductos(0)} onClick={() => setBotonNroProductos(2)}>
                        2
                    </p>
                </div>
                <div className='rounded-circle' style={{width: 50 / proporcional, height: 50 / proporcional, marginRight: 2 / proporcional, marginLeft: 2 / proporcional,
                    background: boton_nro_producto === 3 || seleccion_nro_producto === 3 ? 'rgb(160, 179, 27)' : 'white', border: '1px solid rgb(229, 229, 229)'}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, color: boton_nro_producto === 3 || seleccion_nro_producto === 3 ? 'white' : 'rgb(51, 51, 51)',
                        fontWeight: 600, textAlign: 'center', cursor: 'pointer'}}
                        onMouseOver={() => setSeleccionNroProductos(3)} onMouseLeave={() => setSeleccionNroProductos(0)} onClick={() => setBotonNroProductos(3)}>
                        3
                    </p>
                </div>
                <div className='rounded-circle' style={{width: 50 / proporcional, height: 50 / proporcional, marginRight: 2 / proporcional, marginLeft: 2 / proporcional,
                    background: boton_nro_producto === 4 || seleccion_nro_producto === 4 ? 'rgb(160, 179, 27)' : 'white', border: '1px solid rgb(229, 229, 229)'}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, color: boton_nro_producto === 4 || seleccion_nro_producto === 4 ? 'white' : 'rgb(51, 51, 51)',
                        fontWeight: 600, textAlign: 'center', cursor: 'pointer'}}
                        onMouseOver={() => setSeleccionNroProductos(4)} onMouseLeave={() => setSeleccionNroProductos(0)} onClick={() => setBotonNroProductos(4)}>
                        <img src={seleccion_nro_producto === 4 || boton_nro_producto === 4 ? right_white : right_black} style={{width: 50 / proporcional, height: 50 / proporcional, padding: 16 / proporcional}}/>
                    </p>
                </div>
            </div>
        </div>
    )
}
