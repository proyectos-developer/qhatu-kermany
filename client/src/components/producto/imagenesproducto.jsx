import React from 'react'

import image_principal from '../../assets/image/home/producto_manzana_03.png'
import image_0 from '../../assets/image/home/producto_palta_04.png'
import image_1 from '../../assets/image/home/producto_naranja_08.png'
import image_2 from '../../assets/image/home/producto_papaya_06.png'
import image_3 from '../../assets/image/home/producto_uvas_01.png'

import left from '../../assets/iconos/producto/left_black.png'
import right from '../../assets/iconos/producto/right_black.png'

export default function ImagenesProductos({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <div style={{width: 650 / proporcional, height: 650 / proporcional, border: '1px solid rgb(229, 229, 229)', borderRadius: 30 / proporcional}}>
                    <img src={image_principal} style={{width: 648 / proporcional, height: 648 / proporcional, padding: 150 / proporcional}}/>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-center' style={{width: 650 / proporcional, paddingTop: 5 / proporcional, height: 100 / proporcional}}>
                    <div style={{width: 125 / proporcional, height: 95 / proporcional}}>
                        <img src={left} style={{width: 95 / proporcional, height: 95 / proporcional, padding: 37.5 / proporcional, cursor: 'pointer'}}/>
                    </div>
                    <div style={{width: 100 / proporcional, height: 95 / proporcional, border: '1px solid rgb(160, 179, 27)', borderRadius: 10 / proporcional,
                            maginLeft: 2.5 / proporcional, marginRight: 2.5 / proporcional}}>
                        <img src={image_0} style={{width: 98 / proporcional, height: 93 / proporcional, padding: 20 / proporcional}}/>
                    </div>
                    <div style={{width: 100 / proporcional, height: 95 / proporcional, border: '1px solid rgb(229, 229, 229)', borderRadius: 10 / proporcional,
                            maginLeft: 2.5 / proporcional, marginRight: 2.5 / proporcional}}>
                        <img src={image_1} style={{width: 98 / proporcional, height: 93 / proporcional, padding: 20 / proporcional}}/>
                    </div>
                    <div style={{width: 100 / proporcional, height: 95 / proporcional, border: '1px solid rgb(229, 229, 229)', borderRadius: 10 / proporcional,
                            maginLeft: 2.5 / proporcional, marginRight: 2.5 / proporcional}}>
                        <img src={image_2} style={{width: 98 / proporcional, height: 93 / proporcional, padding: 20 / proporcional}}/>
                    </div>
                    <div style={{width: 100 / proporcional, height: 95 / proporcional, border: '1px solid rgb(229, 229, 229)', borderRadius: 10 / proporcional,
                            maginLeft: 2.5 / proporcional, marginRight: 2.5 / proporcional}}>
                        <img src={image_3} style={{width: 98 / proporcional, height: 93 / proporcional, padding: 20 / proporcional}}/>
                    </div>
                    <div style={{width: 125 / proporcional, height: 95 / proporcional}}>
                        <img src={right} style={{width: 95 / proporcional, height: 95 / proporcional, padding: 37.5 / proporcional, cursor: 'pointer'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
