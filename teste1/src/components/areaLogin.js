import react from "react";
import Campos from './campos'

export default function areaLogin(){

    return(

        <section style={area}>

            <div style={area2}>
                <Campos />
              
            </div>    
    
        

        </section>

    )
}

const area ={

    display: 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    height: '550px',
    marginTop: '80px',
    

}
const area2={

    backgroundColor : 'white',
    width: '50%',
    height:'390px',
    borderRadius: '15px'


}