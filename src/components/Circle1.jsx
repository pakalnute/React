import { useState } from "react";

function Circle1(props) {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const addOne = () => {
        setCounter1(counter1 + 1);
    }

    const addMany = () => {
        setCounter2(counter2 + counter1);
    }

    const set0 = () => {
        setCounter1(0);
        setCounter2(0);
    }

    return (
        <div className="content">
            <div className="circle1" style={{background: 'yellow',}}>
                <span>{counter1}</span>
                <button onClick={addOne}>Padidinti 1</button>
                
            </div>
            

            <div className="circle1" style={{background: 'green',}}>
                    <span>{counter2}</span>
                <button onClick={addMany}>Pridėti iš 1</button>
                
            </div>
            <button onClick={set0}>Reset All</button>

        </div>
    )
};

export default Circle1;