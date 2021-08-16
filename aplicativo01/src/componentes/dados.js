import React from "react";
import '../App.css'

export default function dados(props){

    const n1=20;
    const n2 = 10;

    const styleCSS = {

        color: "green",
        fontSize: '2em',
        padding: '10px'
    }
    return(

        <section className='caixa'>
            <p style={{color: 'red', padding:'10px', fontSize: '40px'}}>Dado 1:{ props.dado1 }</p>
            <p style={styleCSS}>Dado 2:{ props.dado2 }</p>
            <p className='texto'>Dado 3:{ props.dado3 }</p>
            <p>{'A soma de '+ n1 + ' com ' + n2 + ' é igual ' + props.soma(n1,n2)}</p>
            <p>{'A Subtração de '+ n1 + ' com ' + n2 + ' é igual ' + props.sub(n1,n2)}</p>
            <p>{'A Multiplicação de '+ n1 + ' com ' + n2 + ' é igual ' + props.multiplic(n1,n2)}</p>
            <p>{'A Divisão de '+ n1 + ' com ' + n2 + ' é igual ' + props.div(n1,n2)}</p>

        </section>

    )

}