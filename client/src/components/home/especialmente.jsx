import React, {useState} from 'react'

import especialidad from '../../assets/image/home/especialmente.png'
import uvas from '../../assets/image/home/producto_uvas_01.png'
import naranjas from '../../assets/image/home/producto_naranja_05.png'

import CardProducto from './card/producto.jsx'

export default function Especialmente({proporcional}) {

    const [boton_order, setBotonOrder] = useState(false)

    const productos = [
        {id: '0', image: uvas, producto: 'Uvas', precio_maximo: 442.00, precio_minimo: 0, calificacion: 0, oferta: 0, descuento: 0},
        {id: '1', image: naranjas, producto: 'Naranjas', precio_maximo: 442.00, precio_minimo: 0, calificacion: 0, oferta: 0, descuento: 0}
    ]

    return (
        <div style={{width: '100%', height: 'auto', marginTop: 60 / proporcional}}>
            <div style={{width: '100%', height: 800 / proporcional, backgroundImage: `url(${especialidad})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
                paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional}}>
                <div style={{width: '100%', height: 600 / proporcional, paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional}}>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 600 / proporcional}}>
                        
                        <div style={{width: '48%', height: 600 / proporcional}}>
                            <div className='position-relative' style={{width: '100%', height: 600 / proporcional}}>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{width: '100%', height: 'auto'}}>
                                    <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                        <h2 style={{color: 'white', fontSize: 36 / proporcional, fontWeight: 700, lineHeight: `${48 / proporcional}px`, fontFamily: 'Lemonada, sans-serif',
                                            marginBottom: 20 / proporcional}}>
                                            Especialidad en frutas
                                        </h2>
                                    </div>
                                    <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                        <p style={{color: 'white', fontSize: 18 / proporcional, fontWeight: 400, lineHeight: `${27 / proporcional}px`, fontFamily: 'Poppins, sans-serif',
                                            marginBottom: 10 / proporcional}}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumen aspeiores, saepe alias dignissimos consectetur ea cum sint tenetur neque cupiditate beatae optio eos. Assumen aspeiores, saepe alias dinissimos.
                                        </p>
                                    </div>
                                    <div className='rounded-pill' style={{width: 200 / proporcional, height: 50 / proporcional, background: boton_order ? 'rgb(255, 180, 34)' : 'rgb(160, 179, 27)',
                                            cursor: 'pointer'}} onMouseOver={() => setBotonOrder(true)} onMouseLeave={() => setBotonOrder(false)}>
                                        <p style={{fontSize: 16 / proporcional, color: 'white', fontWeight: 400, lineHeight: `${50 / proporcional}px`, fontFamily: 'Quicksand',
                                            marginBottom: 0 / proporcional, textAlign: 'center'}}>
                                            Hacer pedido ahora
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='d-flex justify-content-between' style={{width: '48%', height: 600 / proporcional}}>
                            <div style={{width: '48%', height: 600 / proporcional}}>
                                <CardProducto proporcional={proporcional} producto={productos[0]}/>
                            </div>

                            <div style={{width: '48%', height: 600 / proporcional}}>
                                <CardProducto proporcional={proporcional} producto={productos[1]}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
