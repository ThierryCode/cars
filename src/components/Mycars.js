import React, {Component} from 'react';
import Cars from './Cars'
class Mycars extends Component {
    render(){
        console.log(this);
        return (
            <div className="App" style={{width:'700px'}}>
                <h1>{this.props.title}</h1>
                <Cars color="red"></Cars>
                <Cars>Mercedes</Cars>
                <Cars color="green">Volkswagen</Cars>
            </div>
            )
            

    }
}
export default Mycars;