import React, {Component} from 'react';
import './App.css';
import fire from './config/fire';
import Login from './Components/Login/login';
import Home from './Components/Home/home';

class App extends Component{

  state={
    user:{}
  }
  constructor(props){
    super(props);
  }
  
  componentDidMount(){
    this.authListener();
  }

  authListener(){
    //Comprobamos si el usuario se ha logeado con lo siguiente
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        //Usuario logeado
        this.setState({user});
      }else{
        //Usuario NO logeado
        this.setState({user:null})
      }
    });
  }


  render(){
    return(
      <div className="App">
        {/* Si el usuario esta logeado avanzo al Home sino voy al login */ }
        {this.state.user ? (<Home />) : (<Login/>)}
      </div>
    );
  }
}

export default App;
