import React, {Component} from 'react';
import fire from '../../config/fire';

import './login.css'



export default class Login extends Component{

    //Logica para el login
    user = React.createRef();
    password = React.createRef();

    constructor(props) {
        super(props);
        //esto es necesario para que el this funciones en el callback
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
    }

    login(e){
        e.preventDefault();
        var myUser = this.user.current.value;
        var myPassword = this.password.current.value;

        fire
            .auth()
            .signInWithEmailAndPassword(myUser, myPassword)
            .then(u => {})
            .catch(function(error){
                alert(error);
            });

        alert('Login realizado con exito')
    }

    //Logica para la creacion de usuarios
    signup(e) {
        e.preventDefault();
        var myUser = this.user.current.value;
        var myPassword = this.password.current.value;

        fire
            .auth()
            .createUserWithEmailAndPassword(myUser, myPassword)
            .then(u => {})
            .catch(function(error){
                alert(error);
            });
            

            
    }  

    //Elementos del Html
    render(){
        return (
            <div>
                <div className="rectanguloLogin">
                    <h1> Mi Espectacular y fantabuloso Login </h1>
                    <form className="formularioLogin">
                        <div className="contenedorCorreo">
                            <label>Correo electronico: </label>
                            <input
                                type = "email"
                                name = "email"
                                ref={this.user}
                            ></input>
                        </div>
                        <div className="contenedorPassword">
                            <label>Password: </label>
                            <input
                                type = "password"
                                name = "password"
                                ref={this.password}
                            ></input>
                        </div>
                        <div className="botonesLogin">
                            <button className="botonLogin" type="submit" onClick={this.login}>
                                Login
                            </button>
                            <button onClick ={this.signup}> Registrarse</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        );
    }
    
}