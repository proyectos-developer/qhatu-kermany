import React from 'react'

import estadisticas from '../../assets/image/home/estadisticas.png'

export default function EstadisticasTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', marginTop: 50 / proporcional, marginBottom: 10 / proporcional}}>
            <div style={{width: '100%', height: 'auto', backgroundImage: `url(${estadisticas})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                    <div style={{width: '48%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                <span style={{fontSize: 69 / proporcional, fontWeigh: 600, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0, lineHeight: `${69 / proporcional}px`}}>
                                    1900
                                </span>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                <span style={{fontSize: 22 / proporcional, fontWeigh: 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0, lineHeight: `${30 / proporcional}px`}}>
                                    Constitutiva
                                </span>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 16 / proporcional, fontWeigh: 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0, lineHeight: `${24 / proporcional}px`,
                                textAlign: 'center', marginBottom: 10 / proporcional}}>
                                Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>

                    <div style={{width: '48%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                <span style={{fontSize: 69 / proporcional, fontWeigh: 600, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0, lineHeight: `${69 / proporcional}px`}}>
                                    5000
                                </span>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                <span style={{fontSize: 22 / proporcional, fontWeigh: 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0, lineHeight: `${30 / proporcional}px`}}>
                                    Productos
                                </span>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 16 / proporcional, fontWeigh: 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0, lineHeight: `${24 / proporcional}px`,
                                textAlign: 'center', marginBottom: 10 / proporcional}}>
                                Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '48%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                <span style={{fontSize: 69 / proporcional, fontWeigh: 600, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0, lineHeight: `${69 / proporcional}px`}}>
                                    120
                                </span>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                <span style={{fontSize: 22 / proporcional, fontWeigh: 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0, lineHeight: `${30 / proporcional}px`}}>
                                    Años
                                </span>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 16 / proporcional, fontWeigh: 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0, lineHeight: `${24 / proporcional}px`,
                                textAlign: 'center', marginBottom: 10 / proporcional}}>
                                Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>

                    <div style={{width: '48%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                <span style={{fontSize: 69 / proporcional, fontWeigh: 600, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0, lineHeight: `${69 / proporcional}px`}}>
                                    9800
                                </span>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                <span style={{fontSize: 22 / proporcional, fontWeigh: 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0, lineHeight: `${30 / proporcional}px`}}>
                                    Clientes
                                </span>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 16 / proporcional, fontWeigh: 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0, lineHeight: `${24 / proporcional}px`,
                                textAlign: 'center', marginBottom: 10 / proporcional}}>
                                Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
