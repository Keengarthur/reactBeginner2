import './App.css';
import Header from './heaader'
import { Component } from 'react';
import Form from './signin'
import Home from './home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ContactDetails from './contactdetails';


import images from './data';
import Admin from './admin'
let body = document.body
let i = 0

class App extends Component {
  constructor(props){
    super(props)

  this.state={
    home:false,
    form:true,
    signInPeople:''
  }
  this.setPeopleState = this.setPeopleState.bind(this)

  }

  setPeopleState(person){
    if(person!='' || person!=[]){
       this.setState({signInPeople:person})

    }
    if (person ===[]){
      this.setState({signInPeople:''})
    }

  }

   componentDidMount(){
    this.changebackground()

  }
  componentWillUnmount(){
    clearInterval(this.interve)
  }
  interval(){
     i++
    if (i>=images.length){
      i = 0
    }
   
    body.style.backgroundImage = `url(${images[i]})`
     
    

  }
  changebackground(){
    // body.style.backgroundImage = `url(${images.image1})`
    this.interve = setInterval(() => {
        this.interval()}, 10000);
      
  }

 
  render(){
    let {signInPeople} =  this.state
    return <main>
    <ContactDetails/>
     <Header display={this.state}
     setPeople = {(person)=>this.setPeopleState(person)}
      unmountInterval={()=>this.componentWillUnmount()}
      mountInterval={()=>this.changebackground()}/>
    
     

    </main>
  }
}
export default App;
