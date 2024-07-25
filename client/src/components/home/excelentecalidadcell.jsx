import React from 'react'

import excelencia from '../../assets/image/home/excelente.png'

export default function ExcelenteCalidadCel({proporcional}) {

    return (
        <div style={{width: '100%', height: 450 / proporcional, marginTop: 60 / proporcional}}>
            <div style={{width: '100%', height: 450 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional,
                paddingTop: 150 / proporcional, paddingBottom: 150 / proporcional, backgroundImage: `url(${excelencia})`, backgroundPosition: 'center', 
                backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className='' style={{width: '100%', height: 150 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                    <div className='position-relative' style={{width: '100%', height: 150 / proporcional}}>
                        <div className='position-absolute top-50 start-50 translate-middle' style={{width: '100%', height: 'auto'}}>
                            <h2 style={{fontSize: 36 / proporcional, fontWeigh: 700, color: 'white', fontFamily: 'Lemonada, sans-serif', marginBottom: 0, lineHeight: `${50 / proporcional}px`,
                                textAlign: 'center', marginBottom: 0 / proporcional}}>
                                Una fruta de excelente calidad
                            </h2>
                            <p style={{fontSize: 16 / proporcional, fontWeigh: 700, color: 'white', fontFamily: 'Lemonada, sans-serif', marginBottom: 0, lineHeight: `${24 / proporcional}px`,
                                textAlign: 'center', marginBottom: 0 / proporcional}}>
                                Lorem Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
