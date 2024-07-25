import React from 'react'

import manzanas from '../../assets/image/home/producto_manzana_03.png'
import naranjas from '../../assets/image/home/producto_naranja_08.png'
import uvas from '../../assets/image/home/producto_uvas_01.png'
import fresas from '../../assets/image/home/producto_fresa_07.png'

import CardCategoriaFrutaCell from './card/categoriafrutacell.jsx'

export default function CategoriasFrutasCell({proporcional}) {

    const categorias = [
        {id: '0', categoria: 'Manzanas', image: manzanas},
        {id: '1', categoria: 'Naranjas', image: naranjas},
        {id: '2', categoria: 'Uvas', image: uvas},
        {id: '3', categoria: 'Fresas', image: fresas}
    ]

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 80 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional}}>
            <div style={{width: '100%', height: 'audo', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                <div style={{width: '100%', height: 'auto', padding: 10 / proporcional}}>
                    <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                        <h2 style={{color: 'rgb(51, 51, 51)', fontFamily: 'Lemonada, sans-serif', fontSize: 36 / proporcional, fontWeight: 700, lineHeight: `${48 / proporcional}px`,
                            marginBottom: 0 / proporcional, textAlign: 'center'}}>
                            Categorías de frutas
                        </h2>
                    </div>
                    <div style={{width: '100%', height: 'auto', marginBottom: 25 / proporcional, paddingTop: 10 / proporcional, paddingBottom: 25 / proporcional, 
                            paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                        <p style={{color: 'rgb(51, 51, 51)', fontFamily: 'Poppins, san-serif', fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`,
                            marginBottom: 10 / proporcional, textAlign: 'center'}}>
                            Aenean sodales dictum augue, in faucibus nisi sollicitudin eu. Nulla semper arcu. Nam molestie sem eu quam fermentum a tempus nisi aliquet
                        </p>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                        <div style={{width: '90%', height: 'auto', padding: 15 / proporcional}}>
                            <CardCategoriaFrutaCell proporcional={proporcional} categoria={categorias[0]}/>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                        <div style={{width: '90%', height: 'auto', padding: 15 / proporcional}}>
                            <CardCategoriaFrutaCell proporcional={proporcional} categoria={categorias[1]}/>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                        <div style={{width: '90%', height: 'auto', padding: 15 / proporcional}}>
                            <CardCategoriaFrutaCell proporcional={proporcional} categoria={categorias[2]}/>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '90%', height: 'auto', padding: 15 / proporcional}}>
                            <CardCategoriaFrutaCell proporcional={proporcional} categoria={categorias[3]}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
