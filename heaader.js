import React from 'react'
import logo from './logo.svg'
import {Home,About} from './home'
import { Component } from 'react'

import images from './data';
import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom'
import Form from './signin'

let body = document.body

     
class Header extends React.Component {
   constructor(props){
       super(props)
       
       const {display:{home,form}} = this.props
       this.state={
          home ,
          form
       }
       this.openHome= this.openHome.bind(this)
   }
   

openHome(e){
    let  {display:{home,form}} = this.props

    e.preventDefault()
    if(e.target.classList.contains('open-home')){
        this.setState({home:true,
            form:false})

        this.props.unmountInterval()
        body.style.backgroundImage = `linear-gradient(
                    rgba(226, 221, 221,0.3),rgba(226, 221, 221,0.3))`
        


    }
    else{
         this.setState({home:false,form:true})

         this.props.mountInterval()

    }
 
}

   
    render(){
        const {home,form} = this.state
        const {setPeople} = this.props
    return <>
       
    <nav className='nav'>
    <img src={logo} className='logo'/>

        <a href='#' className='open-home' onClick={e=>this.openHome(e)}>Home</a>
        <a href='' className='open-home' onClick={e=>this.openHome(e)}>About</a>         
        <a href='' className='open-home' onClick={e=>this.openHome(e)}>News</a>        
        <a href='' className='open-sign' onClick={e=>this.openHome(e)}>SignIn</a>
    </nav> 

    
    {home && <Home/> }
    {home && <About/>}
    {form &&<Form setPeople = {(person)=>setPeople(person)}/>}
    </>   

    }
    
    
}



export default Header