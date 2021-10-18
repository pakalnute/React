// import Balloons from "./components/Balloons";

// function App() {

//     return (
//         <div>
//             <Balloons text={'1'}/>
//             <Balloons text={'2'}/>
//             <Balloons text={'3'}/>
//             <Balloons text={'4'}/>
//             <Balloons text={'5'}/>
//             <Balloons text={'6'}/>
//             <Balloons text={'7'}/>
//             <Balloons text={'8'}/>
//             <Balloons text={'9'}/>
//             <Balloons text={'10'}/>
//         </div>
//     );
// }
// export default App;

import { Component } from "react";
import Balloons from "./components/Balloons";

class App extends Component {
    constructor(props) {
        super();
        this.state= {
            count: 0
        };
    }

    score = () => {
        this.setState ({
            count: this.state.count +1
        });
    };

    render() {
        return (
            <div>
                <h1>Suma:{this.state.count}</h1>
                <Balloons score={this.score} text={'1'}/>
                <Balloons score={this.score} text={'2'}/>
                <Balloons score={this.score} text={'3'}/>
                <Balloons score={this.score} text={'4'}/>
                <Balloons score={this.score} text={'5'}/>
                <Balloons score={this.score} text={'6'}/>
                <Balloons score={this.score} text={'7'}/>
                <Balloons score={this.score} text={'8'}/>
                <Balloons score={this.score} text={'9'}/>
                <Balloons score={this.score} text={'10'}/>
            </div>
        );
    }
}
export default App;