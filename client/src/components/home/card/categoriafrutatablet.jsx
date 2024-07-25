import React from 'react'

export default function CardCategoriaFrutaTablet({proporcional, categoria}) {

    return (
        <div className='shadow-lg' style={{width: '100%', height: 'auto', borderRadius: 32 / proporcional, paddingTop: 40 / proporcional, paddingBottom: 40 / proporcional,
                paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 172 / proporcional, marginBottom: 15 / proporcional}}>
                    <img src={categoria.image} style={{width: 172 / proporcional, height: 172 / proporcional}}/>
                </div>
                <div style={{width: '100%', height: 'auto'}}>
                    <h3 style={{color: 'rgb(51, 51, 51)', fontFamily: 'Lemonada, sans-serif', fontSize: 18 / proporcional, fontWeight: 700, lineHeight: `${24 / proporcional}px`,
                        marginBottom: 10 / proporcional, textAlign: 'center'}}>
                        {categoria.categoria}
                    </h3>
                </div>
            </div>
        </div>
    )
}
