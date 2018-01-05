import React, { Component } from 'react';

class Project02 extends Component {

    constructor(){
        super();
        this.state = {
            name: "",
            age: ""
        };
    }

    changeInp(condition, e) {
        if (condition === 'name') {
            this.setState({
                name: e.target.value
            })
        } else if (condition === 'age'){
            this.setState({
                age: e.target.value
            })
        }
    }

    infoSubmit(event){

    }

    render(){
        return (
            <div>
                <label>Unesi ime: </label>
                <input type="text" onChange={this.changeInp.bind(this, 'name')}/>
                <label>Unesi godine: </label>
                <input type="text" onChange={this.changeInp.bind(this, 'age')}/>
                <button onClick={this.infoSubmit.bind(this)}>Click!</button>
                <p>Tvoje ime: {this.state.name}<br/> Godina: {this.state.age}</p>
            </div>
        );
    }
}

export default Project02;