import React, {Component} from 'react';
import fire from '../../config/fire';
import './home.css'

export default class Home extends Component{
    
    logout(){
        //Cierre de sesion
        fire.auth().signOut();
    }
    render(){
        return(
            <div>
                <div className="rectanguloHome">
                    <h1>Entras en el Home</h1>
                    <h3>Gracias Gabri por tu comprensión <br></br>
                        y preocupación</h3>
                    <button onClick={this,this.logout}>Cerrar Sesion</button>
                </div>
            </div>
        )
    }
}