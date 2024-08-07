import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import star_full from '../../assets/iconos/tienda/star_full.png'
import star_half from '../../assets/iconos/tienda/star_half.png'
import star_empty from '../../assets/iconos/tienda/star_empty.png'

import manzana from '../../assets/image/home/producto_manzana_03.png'
import fresa from '../../assets/image/home/producto_fresa_07.png'
import kiwi from '../../assets/image/home/producto_kiwi_00.png'
import naranja from '../../assets/image/home/producto_naranja_05.png'
import palta from '../../assets/image/home/producto_palta_04.png'
import papaya from '../../assets/image/home/producto_papaya_06.png'

import CardProducto from '../tienda/card/producto'

export default function DataAdicional ({proporcional}) {

    const [recordarme, setRecordarme] = useState(false)

    const [nombres, setNombres] = useState('')
    const [correo, setCorreo] = useState('')
    const [comentarios, setComentarios] = useState('')

    const [enombres, setENombres] = useState(false)
    const [ecorreo, setECorreo] = useState(false)
    const [ecomentarios, setEComentarios] = useState(false)

    const [boton_comentar, setBotonComentar] = useState(false)

    const {sub_menu_producto} = useSelector(({data_actions}) => data_actions)

    const productos = [
        {id: '0', image: manzana, producto: 'Manzanas', precio_maximo: 405, precio_minimo: 0, oferta: 0, descuento: 0, calificaciones: 2, estrellas: 5},
        {id: '1', image: fresa, producto: 'Fresas', precio_maximo: 279, precio_minimo: 0, oferta: 239, descuento: 14, calificaciones: 0, estrellas: 0},
        {id: '2', image: kiwi, producto: 'Kiwi', precio_maximo: 312, precio_minimo: 112, oferta: 0, descuento: 0, calificaciones: 2, estrellas: 5},
        {id: '3', image: naranja, producto: 'Naranjas', precio_maximo: 488, precio_minimo: 0, oferta: 401, descuento: 18, calificaciones: 0, estrellas: 0},
        {id: '4', image: palta, producto: 'Paltas', precio_maximo: 276, precio_minimo: 0, oferta: 250, descuento: 10, calificaciones: 0, estrellas: 0},
        {id: '5', image: papaya, producto: 'Papayas', precio_maximo: 318, precio_minimo: 0, oferta: 0, descuento: 0, calificaciones: 0, estrellas: 0},
    ]

    return (
        <div style={{width: '100%', height: 'auto', marginBottom: 35 / proporcional}}>
            {
                sub_menu_producto === 'descripcion' ? (
                    <div style={{width: '100%', height: 'auto'}}>
                        <p style={{fontSize: 16 / proporcional, fontFamily: 'Poppins sans-serif', color: 'rgb(51, 51, 51)', lineHeight: `${24 / proporcional}px`, marginBottom: 10 / proporcional}}>
                            Donec pede justo, fringilla vel, aliquet nec, vulpu tate eget. Sed quia consequuntur magni dolores. Id eges tas massa sem et elit. Donec pede justo, fringilla vel, aliquet nec, vulpu tate eget. Sed quia consequuntur magni dolores. Id eges tas massa sem et elit.
                        </p>
                        <p style={{fontSize: 16 / proporcional, fontFamily: 'Poppins sans-serif', color: 'rgb(51, 51, 51)', lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional}}>
                            Qenean commodo ligula eget dolor. Aenean massa. Cumt sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla onsequat mas quis enim. Donec pede justo, fringilla vel, aliquet nec, vulpu tate eget. Sed quia consequuntur magni dolores. Id eges tas massa sem et elit. Viva mus semper cursus libero.
                        </p>
                    </div>
                ) : sub_menu_producto === 'comentarios' ? (
                    <div style={{width: '100%', height: 'auto'}}>
                        <h2 style={{fontSize: 22 / proporcional, fontWeight: 700, lineHeight: `${26 / proporcional}px`, fontFamily: 'Lemonada, sans-serif', marginTop: 20 / proporcional,
                            marginBottom: 32 / proporcional, color: 'rgb(51, 51, 51)'}}>
                            2 Comentarios para Manzanas verdes
                        </h2>
                        <div style={{width: '100%', height: 'auto', marginBottom: 40 / proporcional}}>
                            <div style={{width: '100%', height: 90 / proporcional, borderBottom: '1px solid #e5e5e5', paddingBottom: 30 / proporcional, marginBottom: 34 / proporcional}}>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 60 / proporcional}}>
                                    <div className='d-flex' style={{width: 'auto', height: 60 / proporcional}}>
                                        <div className='rounded-circle' style={{width: 60 / proporcional, height: 60 / proporcional, border: '1px solid rgb(229, 229, 229)',
                                                marginRight: 40 / proporcional}}/>
                                        <div style={{width: 'auto', height: 60 / proporcional}}>
                                            <p style={{fontSize: 14 / proporcional, fontFamily: 'Poppins, sans-serif', color: 'rgb(153, 153, 153)', lineHeight: `${23 / proporcional}px`,
                                                marginBottom: 13 / proporcional, fontWeight: 500}}>
                                                <strong style={{color: '#333333'}}>admin</strong>
                                                <span> - </span>
                                                Nov 10, 2023
                                            </p>
                                            <div style={{width: 'auto', height: 'auto'}}>
                                                <p style={{fontSize: 16 / proporcional, fontFamily: 'Poppins, sans-serif', color: 'rgb(51, 51, 51)', lineHeight: `${23 / proporcional}px`,
                                                    marginBottom: 0, fontWeight: 500}}>
                                                    Buen producto
                                                </p>    
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: 'auto', height: 24 / proporcional}}>
                                        <img src={star_full} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 6 / proporcional}}/>
                                        <img src={star_full} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 6 / proporcional}}/>
                                        <img src={star_full} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 6 / proporcional}}/>
                                        <img src={star_full} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 6 / proporcional}}/>
                                        <img src={star_full} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 6 / proporcional}}/>
                                    </div>
                                </div>
                            </div>
                            <div style={{width: '100%', height: 90 / proporcional, paddingBottom: 30 / proporcional, marginBottom: 34 / proporcional}}>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 60 / proporcional}}>
                                    <div className='d-flex' style={{width: 'auto', height: 60 / proporcional}}>
                                        <div className='rounded-circle' style={{width: 60 / proporcional, height: 60 / proporcional, border: '1px solid rgb(229, 229, 229)',
                                                marginRight: 40 / proporcional}}/>
                                        <div style={{width: 'auto', height: 60 / proporcional}}>
                                            <p style={{fontSize: 14 / proporcional, fontFamily: 'Poppins, sans-serif', color: 'rgb(153, 153, 153)', lineHeight: `${23 / proporcional}px`,
                                                marginBottom: 13 / proporcional, fontWeight: 500}}>
                                                <strong style={{color: '#333333'}}>admin</strong>
                                                <span> - </span>
                                                Oct 10, 2023
                                            </p>
                                            <div style={{width: 'auto', height: 'auto'}}>
                                                <p style={{fontSize: 16 / proporcional, fontFamily: 'Poppins, sans-serif', color: 'rgb(51, 51, 51)', lineHeight: `${23 / proporcional}px`,
                                                    marginBottom: 0, fontWeight: 500}}>
                                                    Excelente producto
                                                </p>    
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: 'auto', height: 24 / proporcional}}>
                                        <img src={star_full} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 6 / proporcional}}/>
                                        <img src={star_full} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 6 / proporcional}}/>
                                        <img src={star_full} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 6 / proporcional}}/>
                                        <img src={star_full} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 6 / proporcional}}/>
                                        <img src={star_empty} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 6 / proporcional}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 30 / proporcional, fontWeight: 700, lineHeight: `${32 / proporcional}px`, marginBottom: 32 / proporcional, fontFamily: 'Poppins, sans-serif',
                                color: 'rgb(51, 51, 51)'}}>
                                Agregar un comentario
                            </p>
                            <div style={{width: '100%', height: 'auto'}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${23 / proporcional}px`, marginBottom: 10 / proporcional, fontFamily: 'Poppins, sans-serif', 
                                    color: 'rgb(51, 51, 51)', fontWeight: 500}}>
                                    Su dirección de correo electrónico no será publicada. <span style={{cursor: 'pointer'}}>Los campos obligatorios están marcados * </span>
                                </p>
                                <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${23 / proporcional}px`, marginBottom: 10 / proporcional, fontFamily: 'Poppins, sans-serif', 
                                        color: 'rgb(51, 51, 51)', fontWeight: 500}}>
                                        Guarde mi nombre, correo electrónico y sitio web en este navegador para la próxima vez que comente.
                                    </p>
                                </div>
                                <div style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <label style={{color: 'rgb(51, 51, 51)', fontFamily: 'Poppins, sans-serfif', fontSize: 16 / proporcional, fontWeight: 500, lineHeight: `${23 / proporcional}px`,
                                        marginBottom: 5 / proporcional}}>Nombres *</label>
                                    <input 
                                        id='nombres'
                                        type='default'
                                        className='form-control rounded-pill'
                                        value={nombres}
                                        onChange={(event) => setNombres(event.target.value)}
                                        style={{width: '100%', height: 50 / proporcional, border: enombres ? '1px solid red' : '1px solid rgb(229, 229, 229)', fontSize: 16 / proporcional, lineHeight: `${46 / proporcional}px`,
                                            fontWeight: 400, fontFamily: 'Poppins, sans-serif'}}/>
                                </div>
                                <div className='d-flex' style={{width: '100%', height: 50 / proporcional, marginBottom: 10 / proporcional}}>
                                    <label style={{color: 'rgb(51, 51, 51)', fontFamily: 'Poppins, sans-serfif', fontSize: 16 / proporcional, fontWeight: 500, lineHeight: `${50 / proporcional}px`,
                                        marginBottom: 0 / proporcional}}>Email *</label>
                                    <input 
                                        id='correo'
                                        type='e-mail'
                                        className='form-control rounded-pill'
                                        value={correo}
                                        onChange={(event) => setCorreo(event.target.value)}
                                        style={{width: 275 / proporcional, height: 50 / proporcional, border: ecorreo ? '1px solid red' : '1px solid rgb(229, 229, 229)', fontSize: 16 / proporcional, lineHeight: `${46 / proporcional}px`,
                                            fontWeight: 400, fontFamily: 'Poppins, sans-serif', marginLeft: 5 / proporcional}}/>
                                </div>
                                <div style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <label style={{color: 'rgb(51, 51, 51)', fontFamily: 'Poppins, sans-serif', fontSize: 16 / proporcional, fontWeight: 500, lineHeight: `${23 / proporcional}px`,
                                        marginBottom: 5 / proporcional}}>Tu calificación *</label>    
                                    <div style={{width: '100%', height: 24 / proporcional, marginBottom: 4 / proporcional}}>
                                        <img src={star_empty} style={{width: 24 / proporcional, height: 24 / proporcional, cursor: 'pointer', padding: 4 / proporcional}}/>
                                        <img src={star_empty} style={{width: 24 / proporcional, height: 24 / proporcional, cursor: 'pointer', padding: 4 / proporcional}}/>
                                        <img src={star_empty} style={{width: 24 / proporcional, height: 24 / proporcional, cursor: 'pointer', padding: 4 / proporcional}}/>
                                        <img src={star_empty} style={{width: 24 / proporcional, height: 24 / proporcional, cursor: 'pointer', padding: 4 / proporcional}}/>
                                        <img src={star_empty} style={{width: 24 / proporcional, height: 24 / proporcional, cursor: 'pointer', padding: 4 / proporcional}}/>
                                    </div>
                                </div>
                                <div style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <label style={{color: 'rgb(51, 51, 51)', fontFamily: 'Poppins, sans-serif', fontSize: 16 / proporcional, fontWeight: 500, lineHeight: `${23 / proporcional}px`,
                                        marginBottom: 5 / proporcional}}>Tus comentarios *</label>    
                                    <textarea 
                                        id='comentarios'
                                        type='e-mail'
                                        className='form-control rounded'
                                        value={comentarios}
                                        onChange={(event) => setComentarios(event.target.value)}
                                        style={{width: '100%', height: 106 / proporcional, border: ecomentarios ? '1px solid red' : '1px solid rgb(229, 229, 229)', fontSize: 16 / proporcional, lineHeight: `${23 / proporcional}px`,
                                            fontWeight: 400, fontFamily: 'Poppins, sans-serif'}}/>
                                </div>
                                <div className='rounded-pill' style={{width: 250 / proporcional, height: 50 / proporcional, paddingLeft: 30 / proporcional, paddingRight: 30 / proporcional, 
                                    background: boton_comentar ? 'rgb(206, 179, 30)' : 'rgb(160, 179, 27)', cursor: 'pointer'}}
                                    onMouseOver={() => setBotonComentar(true)} onMouseLeave={() => setBotonComentar(false)}>
                                    <p style={{color: 'rgb(51, 51, 51)', fontFamily: 'Poppins, sans-serif', fontSize: 16 / proporcional, fontWeight: 500, lineHeight: `${50 / proporcional}px`,
                                        textAlign: 'center', color: 'white'}}>Enviar comentarios</p>    
                                </div>
                            </div>
                        </div>
                    </div>
                ) : sub_menu_producto === 'vendedor' ? (
                    <div style={{width: '100%', height: 'auto'}}>
                        <p style={{color: 'rgb(51, 51, 51)', fontFamily: 'Poppins, sans-serif', fontSize: 16 / proporcional, fontWeight: 500, lineHeight: `${23 / proporcional}px`,
                            color: 'rgb(51, 51, 51)'}}>Dirección:</p>    
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                            <div style={{width: 'auto', height: 'auto'}}>
                                <p style={{color: 'rgb(51, 51, 51)', fontFamily: 'Poppins, sans-serif', fontSize: 16 / proporcional, fontWeight: 500, lineHeight: `${23 / proporcional}px`,
                                    textAlign: 'center', color: 'rgb(51, 51, 51)'}}>4.50 calificación de 2 reseñas</p>    
                            </div>
                            <div className='d-flex justify-content-end' style={{width: 'auto', height: 24 / proporcional}}>
                                <img src={star_full} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 6 / proporcional}}/>
                                <img src={star_full} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 6 / proporcional}}/>
                                <img src={star_full} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 6 / proporcional}}/>
                                <img src={star_full} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 6 / proporcional}}/>
                                <img src={star_full} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 6 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                ) : sub_menu_producto === 'productos' ? (
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                            <div style={{width: '32%', height: 'auto'}}>
                                <CardProducto proporcional={proporcional} producto={productos[0]}/>
                            </div>
                            <div style={{width: '32%', height: 'auto'}}>
                                <CardProducto proporcional={proporcional} producto={productos[1]}/>
                            </div>
                            <div style={{width: '32%', height: 'auto'}}>
                                <CardProducto proporcional={proporcional} producto={productos[2]}/>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                            <div style={{width: '32%', height: 'auto'}}>
                                <CardProducto proporcional={proporcional} producto={productos[0]}/>
                            </div>
                            <div style={{width: '32%', height: 'auto'}}>
                                <CardProducto proporcional={proporcional} producto={productos[1]}/>
                            </div>
                            <div style={{width: '32%', height: 'auto'}}>
                                <CardProducto proporcional={proporcional} producto={productos[2]}/>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}
