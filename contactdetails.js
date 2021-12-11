import { Component } from 'react';

export default class ContactDetails extends Component{
    render(){
        return (
            <div style={{display:'flex',
            justifyContent:'space-around',
            paddingTop:'1rem'}} >
                <h3>call:081039485965</h3>
                <h3>email:diewls@gmail.com</h3>
                <h3>address:sheowa,costa,soe</h3>
            </div>
        )
    }
}