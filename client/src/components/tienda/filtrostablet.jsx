import React, { useState } from 'react'

import star_empty from '../../assets/iconos/tienda/star_empty.png'
import star_half from '../../assets/iconos/tienda/star_half.png'
import star_full from '../../assets/iconos/tienda/star_full.png'

export default function FiltrosTablet({proporcional}) {

    const [buscar_productos, setBuscarProductos] = useState('')
    const [ebuscar_productos, setEBuscarProductos] = useState(false)

    const [seleccion_tag, setSeleccionTag] = useState('')

    const [boton_buscar, setBotonBuscar] = useState(false)

    const realizar_busqueda = () => {
        if (buscar_productos === ''){
            setEBuscarProductos(buscar_productos === '' ? true : false)
        }else{
            setEBuscarProductos(false)
            const data_buscar = {
                buscar: buscar_productos
            }
            console.lo (data_buscar)
        }
    }

    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '48%', height: 46 / proporcional, marginBottom: 45 / proporcional}}>
                    <div style={{width: '100%', height: 46 / proporcional}}>
                        <div className='d-flex' style={{width: 380 / proporcional, height: 46 / proporcional}}>
                            <input
                                id='buscar_productos'
                                value={buscar_productos}
                                onChange={(event) => setBuscarProductos(event.target.value)}
                                className='form-control'
                                style={{width: 280 / proporcional, height: 46 / proporcional, borderTopLeftRadius: 23 / proporcional, borderBottomLeftRadius: 23 / proporcional, 
                                        border: ebuscar_productos ? '1px solid red' : '1px solid rgb(229, 229, 229)', fontSize: 16 / proporcional, lineHeight: `${23 / proporcional}px`, color: 'rgb(51, 51, 51)'}}
                                placeholder='Buscar'/>
                            <div style={{width: 100 / proporcional, height: 46 / proporcional, background: boton_buscar ? '#a0b31b' : 'rgb(213, 180, 31)',
                                    borderTopRightRadius: 23 / proporcional, borderBottomRightRadius: 23 / proporcional}}>
                                <p style={{fontSize: 16 / proporcional, fontWeigh: 400, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, 
                                    lineHeight: `${46 / proporcional}px`, textAlign: 'center'}} onMouseOver={() => setBotonBuscar(true)} onMouseLeave={() => setBotonBuscar(false)}
                                    onClick={() => realizar_busqueda()}>
                                    Buscar
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width: '47%', height: 'auto', marginBottom: 45 / proporcional}}>
                    <h3 style={{fontSize: 24 / proporcional, fontWeigh: 700, color: 'rgb(51, 51, 51)', fontFamily: 'Lemonada, sans-serif', marginBottom: 30 / proporcional, 
                        lineHeight: `${28 / proporcional}px`, textAlign: 'left'}}>
                        Categorías
                    </h3>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '100%', height: 23 / proporcional, marginBottom: 15 / proporcional, cursor: 'pointer'}}>
                            <p style={{fontSize: 16 / proporcional, fontWeigh: 400, color: 'rgb(51, 51, 51)', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, 
                                lineHeight: `${23 / proporcional}px`, textAlign: 'left'}}>
                                Berries
                            </p>
                        </div>
                        <div style={{width: '100%', height: 23 / proporcional, marginBottom: 15 / proporcional, cursor: 'pointer'}}>
                            <p style={{fontSize: 16 / proporcional, fontWeigh: 400, color: 'rgb(51, 51, 51)', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, 
                                lineHeight: `${23 / proporcional}px`, textAlign: 'left'}}>
                                Frutas citrícas
                            </p>
                        </div>
                        <div style={{width: '100%', height: 23 / proporcional, marginBottom: 15 / proporcional, cursor: 'pointer'}}>
                            <p style={{fontSize: 16 / proporcional, fontWeigh: 400, color: 'rgb(51, 51, 51)', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, 
                                lineHeight: `${23 / proporcional}px`, textAlign: 'left'}}>
                                Frutas frescas
                            </p>
                        </div>
                        <div style={{width: '100%', height: 23 / proporcional, marginBottom: 15 / proporcional, cursor: 'pointer'}}>
                            <p style={{fontSize: 16 / proporcional, fontWeigh: 400, color: 'rgb(51, 51, 51)', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, 
                                lineHeight: `${23 / proporcional}px`, textAlign: 'left'}}>
                                Melones
                            </p>
                        </div>
                        <div style={{width: '100%', height: 23 / proporcional, marginBottom: 15 / proporcional, cursor: 'pointer'}}>
                            <p style={{fontSize: 16 / proporcional, fontWeigh: 400, color: 'rgb(51, 51, 51)', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, 
                                lineHeight: `${23 / proporcional}px`, textAlign: 'left'}}>
                                Frutas orgánicas
                            </p>
                        </div>
                        <div style={{width: '100%', height: 23 / proporcional, marginBottom: 15 / proporcional, cursor: 'pointer'}}>
                            <p style={{fontSize: 16 / proporcional, fontWeigh: 400, color: 'rgb(51, 51, 51)', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, 
                                lineHeight: `${23 / proporcional}px`, textAlign: 'left'}}>
                                Frutas tropicales
                            </p>
                        </div>
                        <div style={{width: '100%', height: 23 / proporcional, marginBottom: 15 / proporcional, cursor: 'pointer'}}>
                            <p style={{fontSize: 16 / proporcional, fontWeigh: 400, color: 'rgb(51, 51, 51)', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, 
                                lineHeight: `${23 / proporcional}px`, textAlign: 'left'}}>
                                Sin categoría
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '48%', height: 'auto', marginBottom: 45 / proporcional}}>
                    <h3 style={{fontSize: 24 / proporcional, fontWeigh: 700, color: 'rgb(51, 51, 51)', fontFamily: 'Lemonada, sans-serif', marginBottom: 30 / proporcional, 
                        lineHeight: `${28 / proporcional}px`, textAlign: 'left'}}>
                        En venta
                    </h3>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 5 / proporcional, paddingBottom: 4 / proporcional}}>
                            <div className='rounded-circle' style={{width: 80 / proporcional, height: 80 / proporcional, marginRight: 20 / proporcional, border: '1px solid rgb(229, 229, 229)'}}>

                            </div>
                            <div style={{width: 'auto', height: 80 / proporcional}}>
                                <p style={{color: 'rgb(62, 62, 62)', fontSize: 16 / proporcional, fontWeight: 600, lineHeight: `${23 / proporcional}px`, fontFamily: 'Poppins, sans-serif',
                                    marginBottom: 10.5 / proporcional}}>
                                    Fresa
                                </p>
                                <div className='d-flex' style={{width: '100%', height: 13 / proporcional, marginBottom: 10.5 / proporcional}}>
                                    <img src={star_empty} style={{width: 13 / proporcional, height: 13 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={star_empty} style={{width: 13 / proporcional, height: 13 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={star_empty} style={{width: 13 / proporcional, height: 13 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={star_empty} style={{width: 13 / proporcional, height: 13 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={star_empty} style={{width: 13 / proporcional, height: 13 / proporcional, marginRight: 5 / proporcional}}/>
                                </div>
                                <div style={{width: '100%', height: 23 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${23 / proporcional}px`, color: 'rgb(153, 153, 153)', fontWeight: 500, fontFamily: 'Poppins, sans-serif',
                                        marginBottom: 0}}>
                                        $375.00 <span style={{color: '#a0b31b'}}>$353.00</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 5 / proporcional, paddingBottom: 4 / proporcional}}>
                            <div className='rounded-circle' style={{width: 80 / proporcional, height: 80 / proporcional, marginRight: 20 / proporcional, border: '1px solid rgb(229, 229, 229)'}}>

                            </div>
                            <div style={{width: 'auto', height: 80 / proporcional}}>
                                <p style={{color: 'rgb(62, 62, 62)', fontSize: 16 / proporcional, fontWeight: 600, lineHeight: `${23 / proporcional}px`, fontFamily: 'Poppins, sans-serif',
                                    marginBottom: 10.5 / proporcional}}>
                                    Kiwi
                                </p>
                                <div className='d-flex' style={{width: '100%', height: 13 / proporcional, marginBottom: 10.5 / proporcional}}>
                                    <img src={star_empty} style={{width: 13 / proporcional, height: 13 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={star_empty} style={{width: 13 / proporcional, height: 13 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={star_empty} style={{width: 13 / proporcional, height: 13 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={star_empty} style={{width: 13 / proporcional, height: 13 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={star_empty} style={{width: 13 / proporcional, height: 13 / proporcional, marginRight: 5 / proporcional}}/>
                                </div>
                                <div style={{width: '100%', height: 23 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${23 / proporcional}px`, color: 'rgb(153, 153, 153)', fontWeight: 500, fontFamily: 'Poppins, sans-serif',
                                        marginBottom: 0}}>
                                        $278.00 <span style={{color: '#a0b31b'}}>$250.00</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 5 / proporcional, paddingBottom: 4 / proporcional}}>
                            <div className='rounded-circle' style={{width: 80 / proporcional, height: 80 / proporcional, marginRight: 20 / proporcional, border: '1px solid rgb(229, 229, 229)'}}>

                            </div>
                            <div style={{width: 'auto', height: 80 / proporcional}}>
                                <p style={{color: 'rgb(62, 62, 62)', fontSize: 16 / proporcional, fontWeight: 600, lineHeight: `${23 / proporcional}px`, fontFamily: 'Poppins, sans-serif',
                                    marginBottom: 10.5 / proporcional}}>
                                    Manzana verde
                                </p>
                                <div className='d-flex' style={{width: '100%', height: 13 / proporcional, marginBottom: 10.5 / proporcional}}>
                                    <img src={star_empty} style={{width: 13 / proporcional, height: 13 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={star_empty} style={{width: 13 / proporcional, height: 13 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={star_empty} style={{width: 13 / proporcional, height: 13 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={star_empty} style={{width: 13 / proporcional, height: 13 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={star_empty} style={{width: 13 / proporcional, height: 13 / proporcional, marginRight: 5 / proporcional}}/>
                                </div>
                                <div style={{width: '100%', height: 23 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${23 / proporcional}px`, color: 'rgb(153, 153, 153)', fontWeight: 500, fontFamily: 'Poppins, sans-serif',
                                        marginBottom: 0}}>
                                        $279.00 <span style={{color: '#a0b31b'}}>$239.00</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 5 / proporcional, paddingBottom: 4 / proporcional}}>
                            <div className='rounded-circle' style={{width: 80 / proporcional, height: 80 / proporcional, marginRight: 20 / proporcional, border: '1px solid rgb(229, 229, 229)'}}>

                            </div>
                            <div style={{width: 'auto', height: 80 / proporcional}}>
                                <p style={{color: 'rgb(62, 62, 62)', fontSize: 16 / proporcional, fontWeight: 600, lineHeight: `${23 / proporcional}px`, fontFamily: 'Poppins, sans-serif',
                                    marginBottom: 10.5 / proporcional}}>
                                    Sandia
                                </p>
                                <div className='d-flex' style={{width: '100%', height: 13 / proporcional, marginBottom: 10.5 / proporcional}}>
                                    <img src={star_empty} style={{width: 13 / proporcional, height: 13 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={star_empty} style={{width: 13 / proporcional, height: 13 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={star_empty} style={{width: 13 / proporcional, height: 13 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={star_empty} style={{width: 13 / proporcional, height: 13 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={star_empty} style={{width: 13 / proporcional, height: 13 / proporcional, marginRight: 5 / proporcional}}/>
                                </div>
                                <div style={{width: '100%', height: 23 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${23 / proporcional}px`, color: 'rgb(153, 153, 153)', fontWeight: 500, fontFamily: 'Poppins, sans-serif',
                                        marginBottom: 0}}>
                                        $126.00 <span style={{color: '#a0b31b'}}>$44.00</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 5 / proporcional, paddingBottom: 4 / proporcional}}>
                            <div className='rounded-circle' style={{width: 80 / proporcional, height: 80 / proporcional, marginRight: 20 / proporcional, border: '1px solid rgb(229, 229, 229)'}}>

                            </div>
                            <div style={{width: 'auto', height: 80 / proporcional}}>
                                <p style={{color: 'rgb(62, 62, 62)', fontSize: 16 / proporcional, fontWeight: 600, lineHeight: `${23 / proporcional}px`, fontFamily: 'Poppins, sans-serif',
                                    marginBottom: 10.5 / proporcional}}>
                                    Palta
                                </p>
                                <div className='d-flex' style={{width: '100%', height: 13 / proporcional, marginBottom: 10.5 / proporcional}}>
                                    <img src={star_empty} style={{width: 13 / proporcional, height: 13 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={star_empty} style={{width: 13 / proporcional, height: 13 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={star_empty} style={{width: 13 / proporcional, height: 13 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={star_empty} style={{width: 13 / proporcional, height: 13 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={star_empty} style={{width: 13 / proporcional, height: 13 / proporcional, marginRight: 5 / proporcional}}/>
                                </div>
                                <div style={{width: '100%', height: 23 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${23 / proporcional}px`, color: 'rgb(153, 153, 153)', fontWeight: 500, fontFamily: 'Poppins, sans-serif',
                                        marginBottom: 0}}>
                                        $415.00 <span style={{color: '#a0b31b'}}>$352.00</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width: '48%', height: 'auto', marginBottom: 45 / proporcional}}>
                    <h3 style={{fontSize: 24 / proporcional, fontWeigh: 700, color: 'rgb(51, 51, 51)', fontFamily: 'Lemonada, sans-serif', marginBottom: 30 / proporcional, 
                        lineHeight: `${28 / proporcional}px`, textAlign: 'left'}}>
                        Tags de productos
                    </h3>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 5 / proporcional}}>
                            <div className='rounded-pill' style={{width: 'auto', height: 39 / proporcional, padding: 20 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, 
                                background: seleccion_tag === 'bebidas' ? 'rgb(213, 180, 31)' : '#a0b31b'}} onMouseOver={() => setSeleccionTag('bebidas')} onMouseLeave={() => setSeleccionTag('')}>
                                <p style={{fontSize: 16 / proporcional, fontWeigh: 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, 
                                    lineHeight: `${23 / proporcional}px`, textAlign: 'center'}}>
                                    Bebidas
                                </p>
                            </div>
                            <div className='rounded-pill' style={{width: 'auto', height: 39 / proporcional, padding: 20 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, 
                                background: seleccion_tag === 'frape' ? 'rgb(213, 180, 31)' : '#a0b31b'}} onMouseOver={() => setSeleccionTag('frape')} onMouseLeave={() => setSeleccionTag('')}>
                                <p style={{fontSize: 16 / proporcional, fontWeigh: 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, 
                                    lineHeight: `${23 / proporcional}px`, textAlign: 'center'}}>
                                    Frapé
                                </p>
                            </div>
                            <div className='rounded-pill' style={{width: 'auto', height: 39 / proporcional, padding: 20 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, 
                                background: seleccion_tag === 'frescos' ? 'rgb(213, 180, 31)' : '#a0b31b'}} onMouseOver={() => setSeleccionTag('frescos')} onMouseLeave={() => setSeleccionTag('')}>
                                <p style={{fontSize: 16 / proporcional, fontWeigh: 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, 
                                    lineHeight: `${23 / proporcional}px`, textAlign: 'center'}}>
                                    Frescos
                                </p>
                            </div>
                            <div className='rounded-pill' style={{width: 'auto', height: 39 / proporcional, padding: 20 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, 
                                background: seleccion_tag === 'frutas' ? 'rgb(213, 180, 31)' : '#a0b31b'}} onMouseOver={() => setSeleccionTag('frutas')} onMouseLeave={() => setSeleccionTag('')}>
                                <p style={{fontSize: 16 / proporcional, fontWeigh: 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, 
                                    lineHeight: `${23 / proporcional}px`, textAlign: 'center'}}>
                                    Frutas
                                </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 5 / proporcional}}>
                            <div className='rounded-pill' style={{width: 'auto', height: 39 / proporcional, padding: 20 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, 
                                background: seleccion_tag === 'saludable' ? 'rgb(213, 180, 31)' : '#a0b31b'}} onMouseOver={() => setSeleccionTag('saludable')} onMouseLeave={() => setSeleccionTag('')}>
                                <p style={{fontSize: 16 / proporcional, fontWeigh: 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, 
                                    lineHeight: `${23 / proporcional}px`, textAlign: 'center'}}>
                                    Saludable
                                </p>
                            </div>
                            <div className='rounded-pill' style={{width: 'auto', height: 39 / proporcional, padding: 20 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, 
                                background: seleccion_tag === 'jugos' ? 'rgb(213, 180, 31)' : '#a0b31b'}} onMouseOver={() => setSeleccionTag('jugos')} onMouseLeave={() => setSeleccionTag('')}>
                                <p style={{fontSize: 16 / proporcional, fontWeigh: 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, 
                                    lineHeight: `${23 / proporcional}px`, textAlign: 'center'}}>
                                    Jugos
                                </p>
                            </div>
                            <div className='rounded-pill' style={{width: 'auto', height: 39 / proporcional, padding: 20 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, 
                                background: seleccion_tag === 'melones' ? 'rgb(213, 180, 31)' : '#a0b31b'}} onMouseOver={() => setSeleccionTag('melones')} onMouseLeave={() => setSeleccionTag('')}>
                                <p style={{fontSize: 16 / proporcional, fontWeigh: 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, 
                                    lineHeight: `${23 / proporcional}px`, textAlign: 'center'}}>
                                    Melones
                                </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 5 / proporcional}}>
                            <div className='rounded-pill' style={{width: 'auto', height: 39 / proporcional, padding: 20 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, 
                                background: seleccion_tag === 'organico' ? 'rgb(213, 180, 31)' : '#a0b31b'}} onMouseOver={() => setSeleccionTag('organico')} onMouseLeave={() => setSeleccionTag('')}>
                                <p style={{fontSize: 16 / proporcional, fontWeigh: 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, 
                                    lineHeight: `${23 / proporcional}px`, textAlign: 'center'}}>
                                    Organico
                                </p>
                            </div>
                            <div className='rounded-pill' style={{width: 'auto', height: 39 / proporcional, padding: 20 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, 
                                background: seleccion_tag === 'tropical' ? 'rgb(213, 180, 31)' : '#a0b31b'}} onMouseOver={() => setSeleccionTag('tropical')} onMouseLeave={() => setSeleccionTag('')}>
                                <p style={{fontSize: 16 / proporcional, fontWeigh: 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, 
                                    lineHeight: `${23 / proporcional}px`, textAlign: 'center'}}>
                                    Tropical
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
