import React, { Component } from 'react';
import firebase from './firebase'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  componentDidMount(){
    const messaging = firebase.messaging()
    messaging.requestPermission().then(()=>{
      return messaging.getToken()
    }).then(token=>{
      console.log('Token : ',token)
      document.getElementById('token').innerHTML = token;
    }).catch((err)=>{
      console.log(err);
      
    })

  }
  render(){
    return(
      <div>
        <p>Teste </p>
        <p id='token'></p>
      </div>
    )
  }
}