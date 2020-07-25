import React from 'react';
import './home.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Escola from './Escola';
import Parceiros from './Parceiros';
import Ensino from './Ensino';
import Login from './login';


function Main(){

    return(
        <>
     
        <BrowserRouter>
        
        <div className="header">
            <div className="linha">
                <header>
                    <div className="coluna col4">
                        
                        <h1 className="logo"><h3 className="logo">Escola</h3>Cesar Ferreira</h1>
                    </div>
                    <div className="coluna col4">
                        <nav>
                        <ul className="menu inline sem-marcador">
                                    <li><a><Link to="/escola">escola</Link></a></li>
                                    <li><a><Link to="/ensino/">ensino</Link></a></li>
                                    <li><a><Link to="/parceiros/">parceiros</Link></a></li>
                                </ul>
                        </nav>
                    </div>
                </header>
            </div> 
        </div>

        <main>
                <div className="content"> 
                    <Route path="/" exact component={Login}/>
                </div>

                <div className="content"> 
                    <Route path="/escola/" exact component={Escola}/>
                </div>

                <div className="content"> 
                    <Route path="/parceiros/" exact component={Parceiros}/>
                </div>

                <div className="content"> 
                    <Route path="/ensino/" exact component={Ensino}/>
                </div>
        </main>

        <div className="footer">
            <div className="linha">
                <footer>
                    <div className="coluna col12">
                        <span>&copy; 2020 - GRUPO ESCOLA</span>
                    </div>
                </footer>
            </div>
        </div>
        </BrowserRouter>
      
        </>
    );
}

export default Main;