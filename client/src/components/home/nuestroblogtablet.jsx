import React from 'react'

import blog_00 from '../../assets/image/home/blog_00.png'
import blog_01 from '../../assets/image/home/blog_01.png'
import blog_02 from '../../assets/image/home/blog_02.png'
import blog_03 from '../../assets/image/home/blog_03.png'

import CardBlogTablet from './card/blogtablet.jsx'

export default function NestroBlogTablet({proporcional}) {

    const blog = [
        {id: '0', image: blog_00, titulo: 'Regalos geniales para el día de la madre para 2024', descripcion: 'Cauris turpis nunc, blandit et, volutpat moestie, porta ut lighula. Praesent nonummy',
                perfil: 'admin', fecha: 'Oct 13, 2023'},
        {id: '1', image: blog_01, titulo: 'Regalos geniales para el día de la madre para 2024', descripcion: 'Cauris turpis nunc, blandit et, volutpat moestie, porta ut lighula. Praesent nonummy',
                perfil: 'admin', fecha: 'Oct 14, 2023'},
        {id: '2', image: blog_02, titulo: 'Regalos geniales para el día de la madre para 2024', descripcion: 'Cauris turpis nunc, blandit et, volutpat moestie, porta ut lighula. Praesent nonummy',
                perfil: 'admin', fecha: 'Nov 13, 2023'},
        {id: '3', image: blog_03, titulo: 'Regalos geniales para el día de la madre para 2024', descripcion: 'Cauris turpis nunc, blandit et, volutpat moestie, porta ut lighula. Praesent nonummy',
                perfil: 'admin', fecha: 'Dic 13, 2023'}
    ]

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 80 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                <div style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                        <h2 style={{fontSize: 36 / proporcional, fontWeigh: 700, color: 'rgb(51, 51, 51)', fontFamily: 'Lemonada, sans-serif', marginBottom: 0, lineHeight: `${48 / proporcional}px`,
                            textAlign: 'center', marginBottom: 0 / proporcional}}>
                            Nuestro Blog
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
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '48%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                            <CardBlogTablet proporcional={proporcional} blog={blog[0]}/>
                        </div>
                        <div style={{width: '48%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                            <CardBlogTablet proporcional={proporcional} blog={blog[1]}/>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '48%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                            <CardBlogTablet proporcional={proporcional} blog={blog[2]}/>
                        </div>
                        <div style={{width: '48%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                            <CardBlogTablet proporcional={proporcional} blog={blog[3]}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
