import React,{useState} from 'react'
import Mudar from './componentes/mudar'
/*
import Menutopo from './componentes/topo'
import Corpo from './componentes/corpo'
import Dados from './componentes/dados'
import Rodape from './componentes/rodape'
import Relogio from './componentes/relogio'

import Numero from './componentes/numero'
*/


export default function App(){

  
    
  return(
    <>
 
      

      
    </>
 
  
  )
}




  /*


  const carros =['carro 1','carro 2', 'carro 3']
  const listaCarros = carros.map(
    // c= retorna o item do array
    // i= retorna o indice do array
    (c,i)=> <li key={i}>{i}-{c}</li>
  )

     <ul>
      {listaCarros}
    </ul>




    const cancelar=(obj)=>{
      return obj.preventDefault();
    }

  const [log, setLog]=useState(false);


  const comprimento =()=>{
    const hora = new Date().getHours();

    if(hora=>0 && hora <13){

      return <p>Bom dia</p>
    }
    else if(hora>=13 && hora<18){

      return <p>Boa Tarde</p>

    }else{
      return <p>Boa Noite</p>
    }
  }

  
    {comprimento()}
    {log?'Usuário Logado':'Usuário não Logado'}<br/>
    <button onClick={()=>setLog(!log)}>{!log?'Logar':'Deslogar'}</button>

    <hr />
    <Mudar />
      
      <br/><a href='http://www.google.com.br' target='_blank' onClick={(e)=>cancelar(e)}>

        Google

      </a>



      const [num, setNum]= useState(0);

      <p>Valor do state em App: {num}</p>
      <Numero numero={num} setNum={setNum}/>
  

    const hello = ()=>{ return "hello wolrd"}
  const nome = ()=>{ return "victor" }
  const sobrenome = "costa"

  const somar =(n1, n2)=>{

    return n1 + n2
  }
  const subtrair =(n1, n2)=>{
    return n1 -n2
  }
  const mult =(n1, n2)=>{
    return n1 * n2
  }

  const dividir =(n1,n2)=>{
    return n1 / n2
  }
  function teste(){
    return 1+1
  }
  const msg = "Hello Wolrd";
  
        <p>{teste()}</p>

      <h1>{msg}</h1>

         <div>  
        <Relogio />
        <hr/>
        <Menutopo />
        <hr/>
        <Corpo />
        <hr/>

        <Dados dado1={hello()} dado2={nome()} dado3={sobrenome} soma= {somar} sub= {subtrair} multiplic={mult} div={dividir}/>

        <hr/>
        <Rodape />
        
    

    </div>

  */