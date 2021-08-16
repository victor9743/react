import React, {useState} from 'react'
import img1 from './imgs/transferir.jpg'
import img2 from './imgs/img2.jpg'

export default function Mudar(){

  const [mudar, setMudar] = useState(false);

    
  return(
    <>
      <img src={mudar?img1:img2} />

      <button onClick={()=>setMudar(!mudar)}>{mudar?'desligar':'Ligar'}</button>
      

      
    </>
 
  
  )
}