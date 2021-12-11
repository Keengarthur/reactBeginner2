import React from "react";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import { Component } from "react";

export class Home extends Component{
    render(){
        return <h2>welocm</h2>
    }
}


export const About =()=>{
    return <>
    <h1>welcome to about</h1>
    </>
}