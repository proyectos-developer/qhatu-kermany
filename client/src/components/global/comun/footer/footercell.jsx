import React, { useState } from 'react'

import image from '../../../../assets/image/footer/footer.png'

import location from '../../../../assets/iconos/footer/location.png'
import phone from '../../../../assets/iconos/footer/phone.png'
import email from '../../../../assets/iconos/footer/email.png'

import facebook from '../../../../assets/iconos/footer/facebook.png'
import instagram from '../../../../assets/iconos/footer/instagram.png'
import twitter from '../../../../assets/iconos/footer/twitter.png'
import linkedin from '../../../../assets/iconos/footer/linkedin.png'
import tiktok from '../../../../assets/iconos/footer/tiktok.png'

export default function FooterTablet({proporcional}) {

    const [seleccion_menu, setSeleccionMenu] = useState('')

    const [suscribirse, setSuscribirse] = useState('')

    const [esuscribirse, setESuscribirse] = useState(false)

    const [boton_suscribirse, setBotonSuscribirse] = useState(false)

    const enviar_suscripcion = () => {
        if (suscribirse === ''){
            setESuscribirse(suscribirse === '' ? true : false)
        }else{
            setESuscribirse(false)
            const data_correo = {
                email: suscribirse
            }
            console.log (data_correo)
        }
    }
        
    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 70 / proporcional, paddingBottom: 45 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional,
                background: 'rgb(160, 179, 27)'}}>
            <div className='' style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                    <div style={{width: '90%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto'}}>
                            <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <h2 style={{fontSize: 36 / proporcional, fontWeight: 700, color: 'white', fontFamily: 'Lemonada, sans-serif', marginBottom: 0, lineHeight: `${48 / proporcional}px`,
                                    marginBottom: 0 / proporcional}}>
                                    QHATU
                                </h2>
                            </div>
                            <div style={{width: '100%', height: 160 / proporcional, marginBottom: 20 / proporcional}}>
                                <img src={image} style={{width: 360 / proporcional, height: 160 / proporcional}}/>
                            </div>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div className='d-flex' style={{width: '100%', height: 30 / proporcional}}>
                                    <img src={location} style={{width: 30 / proporcional, height: 30 / proporcional, padding: 6 / proporcional, marginRight: 5 / proporcional}}/>
                                    <p style={{fontSize: 16 / proporcional, fontWeight: 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0, lineHeight: `${30 / proporcional}px`}}>
                                        Lima, Perú
                                    </p>
                                </div>
                                <div className='d-flex' style={{width: '100%', height: 30 / proporcional}}>
                                    <img src={phone} style={{width: 30 / proporcional, height: 30 / proporcional, padding: 6 / proporcional, marginRight: 5 / proporcional}}/>
                                    <p style={{fontSize: 16 / proporcional, fontWeight: 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0, lineHeight: `${30 / proporcional}px`}}>
                                        (+51) 999-XXXXXX
                                    </p>
                                </div>
                                <div className='d-flex' style={{width: '100%', height: 30 / proporcional}}>
                                    <img src={email} style={{width: 30 / proporcional, height: 30 / proporcional, padding: 6 / proporcional, marginRight: 5 / proporcional}}/>
                                    <p style={{fontSize: 16 / proporcional, fontWeight: 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0, lineHeight: `${30 / proporcional}px`}}>
                                        correo@dominio.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                    <div style={{width: '90%', height: 'auto'}}>
                        <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto'}}>
                            <div style={{width: 'auto', height: 'auto'}}>
                                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <h2 style={{fontSize: 36 / proporcional, fontWeight: 700, color: 'white', fontFamily: 'Lemonada, sans-serif', marginBottom: 0, lineHeight: `${48 / proporcional}px`,
                                        marginBottom: 0 / proporcional}}>
                                        Menú
                                    </h2>
                                </div>
                                <div style={{width: '100%', height: 'auto'}}>
                                    <p style={{fontSize: 16 / proporcional, fontWeight: seleccion_menu === 'inicio' ? 700 : 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 8 / proporcional, 
                                        lineHeight: `${30 / proporcional}px`, cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('inicio')} onMouseLeave={() => setSeleccionMenu('')}>
                                        Inicio
                                    </p>
                                    <p style={{fontSize: 16 / proporcional, fontWeight: seleccion_menu === 'nosotros' ? 700 : 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 8 / proporcional, 
                                        lineHeight: `${30 / proporcional}px`, cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('nosotros')} onMouseLeave={() => setSeleccionMenu('')}>
                                        Nosotros
                                    </p>
                                    <p style={{fontSize: 16 / proporcional, fontWeight: seleccion_menu === 'tienda' ? 700 : 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 8 / proporcional, 
                                        lineHeight: `${30 / proporcional}px`, cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('tienda')} onMouseLeave={() => setSeleccionMenu('')}>
                                        Tienda
                                    </p>
                                    <p style={{fontSize: 16 / proporcional, fontWeight: seleccion_menu === 'blog' ? 700 : 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 8 / proporcional, 
                                        lineHeight: `${30 / proporcional}px`, cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('blog')} onMouseLeave={() => setSeleccionMenu('')}>
                                        Blog
                                    </p>
                                    <p style={{fontSize: 16 / proporcional, fontWeight: seleccion_menu === 'contactanos' ? 700 : 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 8 / proporcional, 
                                        lineHeight: `${30 / proporcional}px`, cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('contactanos')} onMouseLeave={() => setSeleccionMenu('')}>
                                        Contácatnos
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                    <div style={{width: '90%', height: 'auto'}}>
                        <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto'}}>
                            <div style={{width: 'auto', height: 'auto'}}>
                                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <h2 style={{fontSize: 36 / proporcional, fontWeight: 700, color: 'white', fontFamily: 'Lemonada, sans-serif', marginBottom: 0, lineHeight: `${48 / proporcional}px`,
                                        marginBottom: 0 / proporcional}}>
                                        Servicios
                                    </h2>
                                </div>                                
                                <div style={{width: '100%', height: 'auto'}}>
                                    <p style={{fontSize: 16 / proporcional, fontWeight: seleccion_menu === 'compras' ? 700 : 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 8 / proporcional, 
                                        lineHeight: `${30 / proporcional}px`, cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('compras')} onMouseLeave={() => setSeleccionMenu('')}>
                                        Guía de compras
                                    </p>
                                    <p style={{fontSize: 16 / proporcional, fontWeight: seleccion_menu === 'delivery' ? 700 : 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 8 / proporcional, 
                                        lineHeight: `${30 / proporcional}px`, cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('delivery')} onMouseLeave={() => setSeleccionMenu('')}>
                                        Delivery y recojo
                                    </p>
                                    <p style={{fontSize: 16 / proporcional, fontWeight: seleccion_menu === 'reembolso' ? 700 : 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 8 / proporcional, 
                                        lineHeight: `${30 / proporcional}px`, cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('reembolso')} onMouseLeave={() => setSeleccionMenu('')}>
                                        Política de reembolso
                                    </p>
                                    <p style={{fontSize: 16 / proporcional, fontWeight: seleccion_menu === 'documentacion' ? 700 : 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 8 / proporcional, 
                                        lineHeight: `${30 / proporcional}px`, cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('documentacion')} onMouseLeave={() => setSeleccionMenu('')}>
                                        Documentación
                                    </p>
                                    <p style={{fontSize: 16 / proporcional, fontWeight: seleccion_menu === 'terminos' ? 700 : 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 8 / proporcional, 
                                        lineHeight: `${30 / proporcional}px`, cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('terminos')} onMouseLeave={() => setSeleccionMenu('')}>
                                        Términos y condiciones
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                    <div style={{width: '90%', height: 'auto'}}>
                        <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto'}}>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <h2 style={{fontSize: 36 / proporcional, fontWeight: 700, color: 'white', fontFamily: 'Lemonada, sans-serif', marginBottom: 0, lineHeight: `${48 / proporcional}px`,
                                        marginBottom: 0 / proporcional}}>
                                        Noticias
                                    </h2>
                                </div>                                
                                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, fontWeight: 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, lineHeight: `${24 / proporcional}px`}}>
                                        Suscríbete a n uestra newsletter y obtén bonos para la próxima compra
                                    </p>
                                </div>
                                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <div style={{width: '100%', height: 46 / proporcional, marginBottom: 12 / proporcional}}>
                                        <div className='d-flex rounded-pill' style={{width: 380 / proporcional, height: 46 / proporcional}}>
                                            <input 
                                                id='suscribirse'
                                                type='e-mail'
                                                className='form-control'
                                                value={suscribirse}
                                                onChange={(event) => setSuscribirse(event.target.value)}
                                                placeholder='E-mail'
                                                style={{width: 200 / proporcional, height: 46 / proporcional, background: 'white', borderTopLeftRadius: 23 / proporcional,
                                                        borderBottomLeftRadius: 23 / proporcional, fontSize: 16 / proporcional, lineHeight: `${46 / proporcional}px`, color: 'rgb(51, 51, 51)',
                                                        fontWeight: 400, fontFamily: 'Poppins, sans-serif', border: esuscribirse ? '1px solid red' : 'none'}}/>
                                            <div style={{width: 150 / proporcional, height: 46 / proporcional, borderTopRightRadius: 23 / proporcional, borderBottomRightRadius: 23 / proporcional,
                                                    background: boton_suscribirse ? 'rgb(241, 169, 28)' : 'rgb(244, 171, 29)', cursor: 'pointer'}}
                                                    onMouseOver={() => setBotonSuscribirse(true)} onMouseLeave={() => setBotonSuscribirse(false)}>
                                                <p style={{fontSize: 16 / proporcional, fontWeight: 500, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, lineHeight: `${46 / proporcional}px`,
                                                    textAlign: 'center'}}>
                                                    Registrarse
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                                    <a href='https://www.facebook.com' target='_blank' style={{width: 'auto', height: 'auto'}}>
                                        <img src={facebook} style={{width: 48 / proporcional, height: 48 / proporcional, padding: 12 / proporcional}}/>
                                    </a>
                                    <a href='https://www.instagram.com' target='_blank' style={{width: 'auto', height: 'auto'}}>
                                        <img src={instagram} style={{width: 48 / proporcional, height: 48 / proporcional, padding: 12 / proporcional}}/>
                                    </a>
                                    <a href='https://www.twitter.com' target='_blank' style={{width: 'auto', height: 'auto'}}>
                                        <img src={twitter} style={{width: 48 / proporcional, height: 48 / proporcional, padding: 12 / proporcional}}/>
                                    </a>
                                    <a href='https://www.linkedin.com' target='_blank' style={{width: 'auto', height: 'auto'}}>
                                        <img src={linkedin} style={{width: 48 / proporcional, height: 48 / proporcional, padding: 12 / proporcional}}/>
                                    </a>
                                    <a href='https://www.tiktok.com' target='_blank' style={{width: 'auto', height: 'auto'}}>
                                        <img src={tiktok} style={{width: 48 / proporcional, height: 48 / proporcional, padding: 12 / proporcional}}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
