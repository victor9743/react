import react from "react";

export default function campos(){

    return(
        <div style={campo}>
            <div style={campoInt}>
                <input style={inputCampo} type="text" placeholder="Usuário"></input><br/>
            </div>
            <div style={campoInt}>
                <input style={inputCampo} type="password" placeholder="senha"></input>
            </div>
            <button style={button}>Logar</button>
        </div>
       
    )

  
}

const campo ={
    
    textAlign:'center',
    
    padding:'20px'

}

const campoInt ={
    display: 'flex',
    marginTop: '80px',
    justifyContent : 'center',
    alignItems:'center'
}
const inputCampo ={
    border:'1px solid red',
    width: '500px',
    padding: '10px',
    borderRadius: '10px'


}
const button ={
    width: '200px',
    marginTop: '50px',
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '15px',
    border: '1px solid red',
    color: 'red'

}