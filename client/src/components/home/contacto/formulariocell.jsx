import React, {useState} from 'react'

export default function FormularioCell({proporcional}) {

    const [nombres, setNombres] = useState ('')
    const [email, setEmail] = useState ('')
    const [mensaje, setMensaje] = useState('')

    const [enombres, setENombres] = useState (false)
    const [eemail, setEEmail] = useState (false)
    const [emensaje, setEMensaje] = useState(false)

    const [boton_mensaje, setBotonMensaje] = useState(false)

    const enviar_mensaje = () => {
        if (nombres === '' || email === '' || mensaje === ''){
            setENombres(nombres === '' ? true : false)
            setEEmail(nombres === '' ? true : false)
            setEMensaje(nombres === '' ? true : false)
        }else{
            setENombres(false)
            setEEmail(false)
            setEMensaje(false)
            const data_mesnaje = {
                nombres: nombres,
                email: email,
                mensaje: mensaje
            }
            console.log (data_mesnaje)
        }
    }


    return (
        <div style={{width: '100%', height: 'auto', padding: 15 / proporcional}}>
            <div style={{width: '100%', height: 70 / proporcional, marginBottom: 20 / proporcional}}>
                <div style={{width: '100%', height: 50 / proporcional, marginBottom: 20 / proporcional}}>
                    <h2 style={{fontSize: 36 / proporcional, fontWeigh: 700, color: 'rgb(51, 51, 51)', fontFamily: 'Lemonada, sans-serif', marginBottom: 0, lineHeight: `${50 / proporcional}px`,
                        marginBottom: 0 / proporcional}}>
                        Dinos tu mensaje
                    </h2>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 'auto'}}>
                    <div className='' style={{width: '100%', height: 'auto', marginBottom: 12 / proporcional}}>
                        <div style={{width: '100%', height: 60 / proporcional}}>
                            <input 
                                id='nombres'
                                type='default'
                                className='form-control rounded'
                                value={nombres}
                                onChange={(event) => setNombres(event.target.value)}
                                placeholder='Ingresar sus nombres'
                                style={{width: '100%', height: 60 / proporcional, border: enombres ? '1px solid red' : '1px solid rgb(229, 229, 229)', color: 'rgb(51, 51, 51)', fontSize: 16 / proporcional, 
                                    lineHeight: `${60 / proporcional}px`, fontFamily: 'Poppins, sans-serif'}}/>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', height: 'auto', marginBottom: 12 / proporcional}}>
                        <div style={{width: '100%', height: 60 / proporcional}}>
                            <input 
                                id='email'
                                type='e-mail'
                                className='form-control rounded'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder='Ingresar sus correo electrónico'
                                style={{width: '100%', height: 60 / proporcional, border: eemail ? '1px solid red' : '1px solid rgb(229, 229, 229)', color: 'rgb(51, 51, 51)', fontSize: 16 / proporcional, 
                                    lineHeight: `${60 / proporcional}px`, fontFamily: 'Poppins, sans-serif'}}/>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', height: 230 / proporcional, marginBottom: 7 / proporcional}}>
                        <textarea
                            type='default'
                            className='form-control rounded'
                            id='mensaje'
                            value={mensaje}
                            onChange={(event) => setMensaje(event.target.value)}
                            placeholder='Tu mensaje'
                            style={{width: '100%', height: 230 / proporcional, border: emensaje ? '1px solid red' : '1px solid rgb(229, 229, 229)', color: 'rgb(51, 51, 51)', fontSize: 16 / proporcional, 
                                lineHeight: `${20 / proporcional}px`, fontFamily: 'Poppins, sans-serif'}}/>
                    </div>
                    <div className='' style={{width: '100%', height: 46 / proporcional, marginBottom: 7 / proporcional}}>
                        <div className='rounded-pill' 
                            style={{width: 200 / proporcional, height: 46 / proporcional, background: boton_mensaje ? 'rgb(225, 180, 32)' : 'rgb(160, 179, 27)', cursor: 'pointer'}}
                                onMouseOver={() => setBotonMensaje(true)} onMouseLeave={() => setBotonMensaje(false)}>
                            <p style={{fontSize: 16 / proporcional, fontWeigh: 600, color: 'white', fontFamily: 'Poppins, sans-serif', marginBottom: 0 / proporcional, 
                                lineHeight: `${46 / proporcional}px`, textAlign: 'center', cursor: 'pointer'}}>
                                Enviar mensaje
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
