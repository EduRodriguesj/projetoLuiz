import React from 'react';
import './home.css';
import Infantil from '../img/infantil.jpg';
import Fundamental from '../img/fundamental.jpg';
import Maternal from '../img/maternal.jpg';





function Ensino(){

    return(
        <>
    <div className="container">
    <div className="linha">
        <section>
            <div className="coluna col4">
                <h2>Ensino Infantil</h2>
                <img src={Infantil} />
                <p> is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and scrambled
                </p>
            </div>

            <div className="coluna col4">
                <h2>Ensino Fundamental</h2>
                <img src={Fundamental} />
                <p> is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and scrambled
                </p>
            </div>

            <div className="coluna col4">
                <h2>Ensino Medio</h2>
                <img src={Maternal} />
                <p> is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and scrambled
                </p>
            </div>

        

        </section>
    </div>
    </div>
    </>
    );
}

export default Ensino;