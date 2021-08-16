import React from "react";

// recebe os valore recebidos pelos parametros
export default function numero(props){

    return(
        <>
            <p>Valor do state em Número: {props.numero}</p>
            <button onClick={()=>props.setNum(props.numero+1)}> +1 </button>        
        </>
    )
}