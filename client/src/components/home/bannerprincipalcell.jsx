import React, {useState} from 'react'

import banner_00 from '../../assets/image/home/banner_00.png'
import banner_01 from '../../assets/image/home/banner_01.png'

export default function BannerPrincipalCell({proporcional}) {

    const [boton_order, setBotonOrder] = useState(false)

    return (
        <div style={{width: '100%', height: 600 / proporcional}}>
            <div id='carouselbannerhome' className='carousel slide' style={{width: '100%', height: 600 / proporcional}}>
                <div className='carousel-indicators'>
                    <button type='button' data-bs-target='#carouselbannerhome' data-bs-slide='0' className='active' aria-current='true' aria-label='slide 1'/>
                    <button type='button' data-bs-target='#carouselbannerhome' data-bs-slide='1' aria-label='slide 2'/>
                </div>
                <div className='carousel-inner' style={{width: '100%', height: 600 / proporcional}}>
                    <div className='carousel-item active' style={{width: '100%', height: 600 / proporcional}}>
                        <div className='position-relative' style={{width: '100%', height: 600 / proporcional, backgroundImage: `url(${banner_00})`, backgroundPosition: 'center', backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'}}>
                            <div style={{width: '100%', height: 600 / proporcional, background: 'rgba(89, 89, 89, 0.6)'}}/>
                            <div className='position-absolute' style={{width: '60%', height: 'auto', left: 60 / proporcional, top: '35%'}}>
                                <h1 style={{fontSize: 60 / proporcional, color: 'rgb(160, 179, 27)', fontWeight: 700, lineHeight: `${86 / proporcional}px`, fontFamily: 'Lemonada',
                                    marginBottom: 30 / proporcional}}>
                                    Tiempo para <span style={{color: 'white'}}>frutas</span>
                                </h1>
                                <p style={{fontSize: 18 / proporcional, color: 'white', fontWeight: 400, lineHeight: `${28 / proporcional}px`, fontFamily: 'Quicksand',
                                    marginBottom: 30 / proporcional}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed, do etusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum dolor sit amet.
                                </p>
                                <div className='rounded-pill' style={{width: 200 / proporcional, height: 50 / proporcional, background: boton_order ? 'rgb(255, 180, 34)' : 'rgb(160, 179, 27)',
                                         cursor: 'pointer'}} onMouseOver={() => setBotonOrder(true)} onMouseLeave={() => setBotonOrder(false)}>
                                    <p style={{fontSize: 16 / proporcional, color: 'white', fontWeight: 400, lineHeight: `${50 / proporcional}px`, fontFamily: 'Quicksand',
                                        marginBottom: 0 / proporcional, textAlign: 'center'}}>
                                        Hacer pedido ahora
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carousel-item' style={{width: '100%', height: 600 / proporcional}}>
                        <div className='position-relative' style={{width: '100%', height: 600 / proporcional, backgroundImage: `url(${banner_01})`, backgroundPosition: 'center', backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'}}>
                            <div style={{width: '100%', height: 600 / proporcional, background: 'rgba(89, 89, 89, 0.6)'}}/>
                            <div className='position-absolute' style={{width: '60%', height: 'auto', left: 60 / proporcional, top: '35%'}}>
                                <h1 style={{fontSize: 60 / proporcional, color: 'rgb(255, 180, 34)', fontWeight: 700, lineHeight: `${86 / proporcional}px`, fontFamily: 'Lemonada',
                                    marginBottom: 30 / proporcional}}>
                                    Tiempo para <span style={{color: 'white'}}>frutas</span>
                                </h1>
                                <p style={{fontSize: 18 / proporcional, color: 'white', fontWeight: 400, lineHeight: `${28 / proporcional}px`, fontFamily: 'Quicksand',
                                    marginBottom: 30 / proporcional}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed, do etusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum dolor sit amet.
                                </p>
                                <div className='rounded-pill' style={{width: 200 / proporcional, height: 50 / proporcional, background: boton_order ? 'rgb(255, 180, 34)' : 'rgb(160, 179, 27)',
                                         cursor: 'pointer'}} onMouseOver={() => setBotonOrder(true)} onMouseLeave={() => setBotonOrder(false)}>
                                    <p style={{fontSize: 16 / proporcional, color: 'white', fontWeight: 400, lineHeight: `${50 / proporcional}px`, fontFamily: 'Quicksand',
                                        marginBottom: 0 / proporcional, textAlign: 'center'}}>
                                        Hacer pedido ahora
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='carousel-control-prev' type='button' data-bs-target='#carouselbannerhome' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'/>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type='button' data-bs-target='#carouselbannerhome' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'/>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>
        </div>
    )
}
