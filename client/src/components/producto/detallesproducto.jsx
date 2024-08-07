import React, { useState } from 'react'

import star_full from '../../assets/iconos/tienda/star_full.png'
import star_half from '../../assets/iconos/tienda/star_half.png'
import star_empty from '../../assets/iconos/tienda/star_empty.png'

import compartir from '../../assets/iconos/producto/refresh_white.png'
import favoritos from '../../assets/iconos/producto/favorito_white.png'

import up from '../../assets/iconos/producto/up_black.png'
import down from '../../assets/iconos/producto/down_black.png'

export default function DetallesProducto({proporcional}) {

    const [cantidad, setCantidad] = useState(1)

    const [boton_carrito, setBotonCarrito] = useState(false)
    const [boton_compartir, setBotonCompartir] = useState(false)
    const [boton_favorito, setBotonFavorito] = useState(false)

    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 80 / proporcional, paddingRight: 80 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <h2 style={{fontSize: 36 / proporcional, fontFamily: 'Lemonada, sans-serif', fontWeight: 700, lineHeight: `${40 / proporcional}px`, marginBottom: 30 / proporcional, 
                    color: 'rgb(51, 51, 51)'}}>
                    Manzana verde
                </h2>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${23 / proporcional}px`, marginBottom: 10 / proporcional, color: '#77a464', fontFamily: 'Poppins, sans-serif',
                    fontWeight: 500}}>
                    $405.00
                </p>
                <div className='d-flex' style={{width: '100%', height: 42 / proporcional, marginBottom: 16 / proporcional}}>
                    <div className='d-flex' style={{width: 'auto', height: 32 / proporcional, marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}>
                        <img src={star_full} style={{width: 32 / proporcional, height: 32 / proporcional, padding: 9 / proporcional}}/>
                        <img src={star_full} style={{width: 32 / proporcional, height: 32 / proporcional, padding: 9 / proporcional}}/>
                        <img src={star_full} style={{width: 32 / proporcional, height: 32 / proporcional, padding: 9 / proporcional}}/>
                        <img src={star_full} style={{width: 32 / proporcional, height: 32 / proporcional, padding: 9 / proporcional}}/>
                        <img src={star_full} style={{width: 32 / proporcional, height: 32 / proporcional, padding: 9 / proporcional}}/>
                    </div>
                    <p style={{color: 'rgb(153, 153, 153)', cursor: 'pointer', fontFamily: 'Poppins, sans-serif', fontSize: 14 / proporcional, fontWeight: 400, marginBottom: 0,
                            lineHeight: `${32 / proporcional}px`}}>(2 comentarios de clientes)</p>
                </div>
                <div style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '100%', height: 'auto', marginTop: 30 / proporcional, marginBottom: 43 / proporcional}}>
                        <p style={{color: 'rgb(51, 51, 51)', fontFamily: 'Poppins, sans-serif', fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 10 / proporcional,
                                fontWeight: 400}}>
                            Lorem ipsum dolor sit amet, consectetur addipiscing elit. Duis tincidunt condimentum felis, et tempor neque rhoncus ac. Proin elementum, felis id placerat dapibus, purus ipsum lobortis tellus, ut vehicula nisl metus eget arcu.
                        </p>
                    </div>
                </div>
                <div style={{width: '100%', height: 46 / proporcional, marginBottom: 45 / proporcional}}>
                    <div className='d-flex' style={{width: '100%', height: 'auot'}}>
                        <div className='d-flex rounded-pill' style={{width: 150 / proporcional, height: 46 / proporcional, border: '1px solid rgb(229, 229, 229)', marginRight: 8 / proporcional}}>
                            <img src={down} style={{width: 44 / proporcional, height: 44 / proporcional, padding: 14 / proporcional, cursor: 'pointer'}}
                                onClick={() => setCantidad (cantidad === 1 ? 1 : cantidad - 1)}/>
                            <input
                                id='cantidad'
                                type='number'
                                className='form-control border-0'
                                value={cantidad}
                                onChange={(event) => setCantidad(event.target.value)}
                                style={{width: 56 / proporcional, height: 42 / proporcional, fontSize: 16 / proporcional, color: 'rgb(51, 51, 51)', fontFamily: 'Poppins, sans-serif',
                                        textAlign: 'center'}}
                                placeholder='1'/>
                            <img src={up} style={{width: 44 / proporcional, height: 44 / proporcional, padding: 14 / proporcional, cursor: 'pointer'}}
                                onClick={() => setCantidad (cantidad + 1)}/>
                        </div>
                        <div className='rounded-pill' style={{width: 160 / proporcional, height: 46 / proporcional, background: boton_carrito ? 'rgb(255, 180, 34)' : 'rgb(160, 179, 27)', 
                            marginRight: 8 / proporcional, cursor: 'pointer'}} onMouseOver={() => setBotonCarrito(true)} onMouseLeave={() => setBotonCarrito(false)}>
                            <p style={{fontSize: 16 / proporcional, fontFamily: 'Poppins, sans-serif', color: 'white', marginBottom: 0, lineHeight: `${46 / proporcional}px`,
                                fontWeight: 500, textAlign: 'center'}}>
                                Agregar carrito
                            </p>
                        </div>
                        <div className='rounded-circle' style={{width: 46 / proporcional, height: 46 / proporcional, cursor: 'pointer', marginRight: 8 / proporcional,
                            background: boton_compartir ? 'rgb(160, 179, 27) ' : 'rgb(255, 180, 34)'}} onMouseOver={() => setBotonCompartir(true)} onMouseLeave={() => setBotonCompartir(false)}>
                            <img src={compartir} style={{width: 46 / proporcional, height: 46 / proporcional, padding: 13 / proporcional}}/>
                        </div>
                        <div className='rounded-circle' style={{width: 46 / proporcional, height: 46 / proporcional, cursor: 'pointer',
                            background: boton_favorito ? 'rgb(160, 179, 27) ' : 'rgb(255, 180, 34)'}} onMouseOver={() => setBotonFavorito(true)} onMouseLeave={() => setBotonFavorito(false)}>
                            <img src={favoritos} style={{width: 46 / proporcional, height: 46 / proporcional, padding: 13 / proporcional}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
