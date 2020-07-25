import React from 'react';
import './home.css';
import Bradesco from '../img/bradesco.png';
import Saraiva from '../img/saraiva.jpg';
import Usp from '../img/usp.png';
import Educacao from '../img/educacao.jpg';
import Emtu from '../img/emtu.png';
import Itau from '../img/itau.png';





function Parceiros(){

    return(
        <>

    <div className="linha">
        <section>
         

            <div className="coluna col4">
                
                <img src={Saraiva} />
                
              
            </div>

            <div className="coluna col4">
               
                <img src={Usp} />

            </div>

            <div className="coluna col4">
                
                <img src={Educacao} />

            </div>

            <div className="coluna col4">
                
                <img src={Bradesco} />

            </div>

            <div className="coluna col4">
                
                <img src={Itau} />

            </div>

            <div className="coluna col4">
                
                <img src={Emtu} />

            </div>

    
        </section>
    </div>
    </>
    );
}

export default Parceiros;