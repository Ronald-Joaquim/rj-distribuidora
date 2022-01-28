import Form from 'pages/Form';
import React from 'react';
import './styles.css';


function Navbar(){
    
    return(
        <header>
            <nav className="container">
                <div className="rj-nav-content">
                    <h1>RJ-DISTRIBUIDORA</h1>
                    <div className="rj-add">
                        <button className="rj-add">NOVO ITEM</button>
                    </div>
                </div>
            </nav>
        </header>
    );
}


export default Navbar;