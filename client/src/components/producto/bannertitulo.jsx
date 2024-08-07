import React from 'react'

import image from '../../assets/image/producto/producto.png'

import right from '../../assets/iconos/tienda/right_white.png'
import { useNavigate } from 'react-router-dom'

export default function BannerTitulo({proporcional}) {

    const navigate = useNavigate()
        
    return (
        <div style={{width: '100%', height: 450 / proporcional, paddingTop: 150 / proporcional, paddingBottom: 150 / proporcional, backgroundImage: `url(${image})`,
            backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <h2 style={{fontSize: 36 / proporcional, lineHeight: `${48 / proporcional}px`, marginBottom: 0, color: 'white', fontWeight: 700, fontFamily: 'Lemonada, sans-serif',
                        textAlign: 'center', cursor: 'default'}}>
                        Producto
                    </h2>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 24 / proporcional}}>
                    <div className='d-flex' style={{width: 'auto', height: 24 / proporcional}}>
                        <span style={{color: 'white', fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontFamily: 'Poppins, sans-serif', marginBottom: 0, 
                            fontWeight: 400, cursor: 'pointer'}} onClick={() => navigate ('/')}>
                            Inicio
                        </span>
                        <img src={right} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 4 / proporcional}}/>
                        <span style={{color: 'white', fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontFamily: 'Poppins, sans-serif', marginBottom: 0, 
                            fontWeight: 400, cursor: 'pointer'}}>
                            Categoría
                        </span>
                        <img src={right} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 4 / proporcional}}/>
                        <span style={{color: 'white', fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontFamily: 'Poppins, sans-serif', marginBottom: 0, 
                            fontWeight: 400, cursor: 'pointer'}}>
                            Producto
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
