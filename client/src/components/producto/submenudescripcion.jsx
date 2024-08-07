import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { set_sub_menu_producto } from '../../redux/actions/data'

export default function SubMenuDescripcion ({proporcional}) {

    const dispatch = useDispatch()

    const [opcion_menu, setOpcionMenu] = useState('descripcion')
    const [seleccion_menu, setSeleccionMenu] = useState('')

    return (
        <div className='d-flex' style={{width: '100%', height: 45 / proporcional, marginBottom: 35 / proporcional}}>
            <div className='rounded-pill' style={{width: 'auto', height: 45 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, marginRight: 5 / proporcional,
                    background: opcion_menu === 'descripcion' || seleccion_menu === 'descripcion' ?  'rgb(255, 180, 34)' : 'rgb(160, 179, 27)', cursor: 'pointer'}} 
                    onMouseOver={() => setSeleccionMenu ('descripcion')} onMouseLeave={() => setSeleccionMenu('')} 
                    onClick={() => {setOpcionMenu('descripcion'); dispatch(set_sub_menu_producto('descripcion'))}}>
                <p style={{color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: 16 / proporcional, lineHeight: `${45 / proporcional}px`, marginBottom: 0 / proporcional,
                        fontWeight: 500}}>
                    Descipción
                </p>
            </div>

            <div className='rounded-pill' style={{width: 'auto', height: 45 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, marginRight: 5 / proporcional,
                    background: opcion_menu === 'comentarios' || seleccion_menu === 'comentarios' ?  'rgb(255, 180, 34)' : 'rgb(160, 179, 27)', cursor: 'pointer'}} 
                    onMouseOver={() => setSeleccionMenu ('comentarios')} onMouseLeave={() => setSeleccionMenu('')} 
                    onClick={() => {setOpcionMenu('comentarios'); dispatch(set_sub_menu_producto('comentarios'))}}>
                <p style={{color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: 16 / proporcional, lineHeight: `${45 / proporcional}px`, marginBottom: 0 / proporcional,
                        fontWeight: 500}}>
                    Comentarios (2)
                </p>
            </div>

            <div className='rounded-pill' style={{width: 'auto', height: 45 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, marginRight: 5 / proporcional,
                    background: opcion_menu === 'vendedor' || seleccion_menu === 'vendedor' ?  'rgb(255, 180, 34)' : 'rgb(160, 179, 27)', cursor: 'pointer'}} 
                    onMouseOver={() => setSeleccionMenu ('vendedor')} onMouseLeave={() => setSeleccionMenu('')} 
                    onClick={() => {setOpcionMenu('vendedor'); dispatch(set_sub_menu_producto('vendedor'))}}>
                <p style={{color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: 16 / proporcional, lineHeight: `${45 / proporcional}px`, marginBottom: 0 / proporcional,
                        fontWeight: 500}}>
                    Información vendedor
                </p>
            </div>

            <div className='rounded-pill' style={{width: 'auto', height: 45 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, marginRight: 5 / proporcional,
                    background: opcion_menu === 'productos' || seleccion_menu === 'productos' ?  'rgb(255, 180, 34)' : 'rgb(160, 179, 27)', cursor: 'pointer'}} 
                    onMouseOver={() => setSeleccionMenu ('productos')} onMouseLeave={() => setSeleccionMenu('')} 
                    onClick={() => {setOpcionMenu('productos'); dispatch(set_sub_menu_producto('productos'))}}>
                <p style={{color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: 16 / proporcional, lineHeight: `${45 / proporcional}px`, marginBottom: 0 / proporcional,
                        fontWeight: 500}}>
                    Más productos
                </p>
            </div>
        </div>
    )
}
