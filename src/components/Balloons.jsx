import { Component } from 'react';
import "../App.scss";

class Balloons extends Component  {
    
    constructor({text}) {
        super();
        this.text = text;
        this.state = {
            pop: false,
            color: '#' + Math.floor(Math.random() * 16777215).toString(16),
            number: this.number,
            text: this.text
   
        }
    }

    componentDidMount() {
    }


    click = () => {
        if (this.state.pop === false) {
            this.setState({
                pop: true,
            })
        }

    }

    render() {
        if (this.state.pop === false) {
            return (
                <div className='balloons' onClick={this.click} style={{ backgroundColor: this.state.color, number:this.number}}>
                    <div className='text'>{this.state.text}</div>
                    </div>
            )
        } else {
            return (
                <div onClick={this.click}></div>
            )
        }
    }

}

export default Balloons;