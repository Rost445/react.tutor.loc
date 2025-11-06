import React, { Component } from 'react';

export default class NewComponent extends Component {
    state = {
        name: 'Rost',
        age: 25,
        phone: '+380660198521',
        skills: ['react','vue','laravel']
    }

    handleClick=(e=>{
        console.log('Кнопка натиснута!');
    })
    render() {
        return (
            <div >
               {/* <h1 style={{ fontSize: '3rem' }}>New Component Class</h1> */}
               <h1 className="text-3xl font-bold">New Component Class</h1>


                <ul>
                    <li>name: {this.state.name}</li>
                    <li>age: {this.state.age}</li>
                    <li>phone: {this.state.phone}</li>
                    <li>skills: {this.state.skills.join(', ')}</li>
                </ul>
                <button type="button" onClick={this.handleClick}>Натиснути тут</button>
            </div>
        );
    }
}
