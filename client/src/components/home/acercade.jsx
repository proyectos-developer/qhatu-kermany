import React, {useState} from 'react'

import nosotros from '../../assets/image/home/nosotros.png'

export default function AcercaDe({proporcional}) {

    const [boton_mas, setBotonMas] = useState(false)

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 65 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '48%', height: 'auto'}}>
                        <div className='position-relative' style={{width: '100%', height: '100%'}}>
                            <div className='position-absolute top-50 start-50 translate-middle' style={{width: '100%', height: 'auto'}}>
                                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <h2 style={{color: 'rgb(51, 51, 51)', fontFamily: 'Lemonada, sans-serif', fontSize: 36 / proporcional, fontWeigh: 700, lineHeight: `${48 / proporcional}px`,
                                        marginBottom: 0}}>
                                        Acerca de Tienda de frutas
                                    </h2>
                                </div>
                                <div style={{width: '100%', height: 'auto', paddingTop: 30 / proporcional, paddingBottom: 30 / proporcional, marginBottom: 10 / proporcional}}>
                                    <p style={{color: 'rgb(85, 85, 85)', fontFamily: 'Poppins, sans-serif', fontSize: 16 / proporcional, fontWeigh: 500, lineHeight: `${24 / proporcional}px`,
                                        marginBottom: 0}}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumen aspeiores, saepe alias dignissimos consectetur ea cum sint tenetur neque cupiditate beatae optio eos. Assumen aspeiores, saepe alias dinissimos.
                                    </p>
                                </div>
                                <div style={{width: '100%', height: 'auto'}}>
                                    <div className='rounded-pill' style={{width: 200 / proporcional, height: 50 / proporcional, background: boton_mas ? 'rgb(185, 179, 29)' : 'rgb(160, 179, 27)',
                                            cursor: 'pointer'}}
                                        onMouseOver={() => setBotonMas(true)} onMouseLeave={() => setBotonMas(false)}>
                                        <p style={{color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: 16 / proporcional, fontWeigh: 500, lineHeight: `${50 / proporcional}px`,
                                            marginBottom: 0, textAlign: 'center'}}>
                                            Leer más
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '48%', height: '100%'}}>
                        <img src={nosotros} style={{width: '90%', height: '100%', borderRadius: 32 / proporcional}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
