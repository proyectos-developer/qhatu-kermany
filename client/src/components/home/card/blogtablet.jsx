import React, { useState } from 'react'

import perfil from '../../../assets/iconos/blog/perfil_blog.png'
import calendar from '../../../assets/iconos/blog/calendar_blog.png'

export default function CardBlogTablet({proporcional, blog}) {

    const [boton_mas, setBotonMas] = useState(false)

    return (
        <div className='' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional, border: '1px solid rgb(229, 229, 229)', borderRadius: 10 / proporcional,
                background: 'white', zIndex: 99999}}>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 300 / proporcional, marginBottom: 25 / proporcional}}>
                <div className='position-relative' style={{width: '100%', height: 300 / proporcional}}>
                    <img src={blog.image} style={{width: '100%', height: 300 / proporcional, borderTopLeftRadius: 10 / proporcional, borderTopRightRadius: 10 / proporcional}}/>
                </div>
            </div>
            <div className='' style={{width: '100%', height: 'auto', zIndex: 99999, padding: 30 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex' style={{width: 'auto', height: 'auto', marginRight: 6 / proporcional, marginLeft: 6 / proporcional}}>
                        <img src={perfil} style={{width: 24 / proporcional,  height: 24 / proporcional, marginRight: 5 / proporcional, padding: 2 / proporcional}}/>
                        <p style={{fontSize: 16 / proporcional, fontWeigh: 600, color: 'rgb(153, 153, 153)', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, 
                            lineHeight: `${24 / proporcional}px`}}>
                            {blog.perfil}
                        </p>
                    </div>
                    <div style={{width: 2 / proporcional, height: 24 / proporcional, background: 'rgb(153, 153, 153)'}}/>
                    <div className='d-flex' style={{width: 'auto', height: 'auto', marginRight: 6 / proporcional, marginLeft: 6 / proporcional}}>
                        <img src={calendar} style={{width: 24 / proporcional,  height: 24 / proporcional, marginRight: 5 / proporcional, padding: 2 / proporcional}}/>
                        <p style={{fontSize: 16 / proporcional, fontWeigh: 600, color: 'rgb(153, 153, 153)', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, 
                            lineHeight: `${24 / proporcional}px`}}>
                            {blog.fecha}
                        </p>
                    </div>
                </div>
                <div style={{width: '100%', height: 'auto', marginTop: 10 / proporcional, marginBottom: 20 / proporcional}}>
                    <h3 style={{fontSize: 18 / proporcional, fontWeigh: 600, color: 'rgb(51, 51, 51)', fontFamily: 'Lemonada, sans-serif', marginBottom: 0 / proporcional, 
                        lineHeight: `${24 / proporcional}px`, textAlign: 'center'}}>
                        {blog.titulo}
                    </h3>
                </div>
                <div className='' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <p style={{fontSize: 16 / proporcional, fontWeigh: 600, color: 'rgb(85, 85, 85)', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, 
                        lineHeight: `${24 / proporcional}px`, textAlign: 'center'}}>
                        {blog.descripcion}
                    </p>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginTop: 30 / proporcional}}>
                    <div className='rounded-pill' style={{width: 200 / proporcional, height: 46 / proporcional, background: boton_mas ? 'rgb(225, 180, 32)' : 'rgb(160, 179, 27)'}}
                        onMouseOver={() => setBotonMas(true)} onMouseLeave={() => setBotonMas(false)}>
                        <p style={{fontSize: 16 / proporcional, fontWeigh: 600, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, 
                            lineHeight: `${46 / proporcional}px`, textAlign: 'center', cursor: 'pointer'}}>
                            Leer más
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
