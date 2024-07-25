import React from 'react'

import manzanas from '../../assets/image/home/producto_manzana_03.png'
import naranjas from '../../assets/image/home/producto_naranja_08.png'
import uvas from '../../assets/image/home/producto_uvas_01.png'
import fresas from '../../assets/image/home/producto_fresa_07.png'

import CardCategoriaFruta from './card/categoriafruta.jsx'

export default function CategoriasFrutas({proporcional}) {

    const categorias = [
        {id: '0', categoria: 'Manzanas', image: manzanas},
        {id: '1', categoria: 'Naranjas', image: naranjas},
        {id: '2', categoria: 'Uvas', image: uvas},
        {id: '3', categoria: 'Fresas', image: fresas}
    ]

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 80 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, marginBottom: 10 / proporcional}}>
            <div style={{width: '100%', height: 'audo', paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional}}>
                <div style={{width: '100%', height: 'auto', padding: 10 / proporcional}}>
                    <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                        <h2 style={{color: 'rgb(51, 51, 51)', fontFamily: 'Lemonada, sans-serif', fontSize: 36 / proporcional, fontWeight: 700, lineHeight: `${48 / proporcional}px`,
                            marginBottom: 0 / proporcional, textAlign: 'center'}}>
                            Categorías de frutas
                        </h2>
                    </div>
                    <div style={{width: '100%', height: 'auto', marginBottom: 25 / proporcional, paddingTop: 10 / proporcional, paddingBottom: 25 / proporcional, 
                            paddingLeft: 400 / proporcional, paddingRight: 400 / proporcional}}>
                        <p style={{color: 'rgb(51, 51, 51)', fontFamily: 'Poppins, san-serif', fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`,
                            marginBottom: 10 / proporcional, textAlign: 'center'}}>
                            Aenean sodales dictum augue, in faucibus nisi sollicitudin eu. Nulla semper arcu. Nam molestie sem eu quam fermentum a tempus nisi aliquet
                        </p>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '24%', height: 'auto', padding: 15 / proporcional}}>
                            <CardCategoriaFruta proporcional={proporcional} categoria={categorias[0]}/>
                        </div>
                        <div style={{width: '24%', height: 'auto', padding: 15 / proporcional}}>
                            <CardCategoriaFruta proporcional={proporcional} categoria={categorias[1]}/>
                        </div>
                        <div style={{width: '24%', height: 'auto', padding: 15 / proporcional}}>
                            <CardCategoriaFruta proporcional={proporcional} categoria={categorias[2]}/>
                        </div>
                        <div style={{width: '24%', height: 'auto', padding: 15 / proporcional}}>
                            <CardCategoriaFruta proporcional={proporcional} categoria={categorias[3]}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
