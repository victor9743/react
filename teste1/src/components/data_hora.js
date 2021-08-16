import react from "react";

export default function data_hora(){

    return(
        <div style={superior}>
            <strong style={descricao}>{'Fortaleza '+ new Date().toLocaleDateString() + ' '}{ new Date().toLocaleTimeString()}</strong>
        </div>        
    )
}

const superior = {

    backgroundColor : "white",
    color: '#ff8c8c',
    padding: '30px',
    textAlign: 'right',

}
const descricao ={
    fontSize: '20px'
}