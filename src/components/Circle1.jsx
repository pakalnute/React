import { useState } from "react";

function Circle1({buttonText, circleColor}) {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const increaseCounter = (which) => {
        if (which === 0) {
            setCounter1(0);
            setCounter2(0);
        } else {
            which === 1 ? setCounter1(counter1 + 1) : setCounter2(counter1 + counter2);
        }
    }

    return (
        <div className="content">
            <div className="circle1" style={{
                background: 'yellow',
            }}>
                <p>{counter1}</p>
            </div>
            <button onClick={() => increaseCounter(1)}>Padidinti 1</button>

            <div className="circle1" style={{
                background: 'yellow',
            }}>
                <p>{counter2}</p>
            </div>
            <button onClick={() => increaseCounter(2)}>Pridėti iš 1-o</button>
            <button onClick={() => increaseCounter(0)}>Reset All</button>

        </div>
    )
};

export default Circle1;