import React from 'react';
import './home.css';
import Home from './home';
import { Link } from 'react-router-dom';





function Login(){

    return(
        <>
  
        <div className="linha">
        
            <section className="col4">
                
                <h1 className="h3 mb-3 font-weight-normal">Insira seus dados</h1>
                <label for="inputEmail" className="sr-only">Email</label>
                <input type="email" id="inputEmail" className="col-12 form-control mb-2" placeholder="Email address" required autofocus></input>
                <label for="inputPassword" className="sr-only">Senha</label>
                <input type="password" id="inputPassword" className="col-12 form-control mb-2" placeholder="Password" required></input>
                <Link to="/home"><button className="col-12 btn btn-lg btn-primary btn-block" type="submit">Logar</button></Link>
                
            </section>
        </div>
   
    </>
    );
}

export default Login;