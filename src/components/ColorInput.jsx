import { useState } from "react";


function ColorInput() {

    const [value, setValue] = useState([false, true, false, true])

    const change = i => {
        const valueCopy = value.slice();
        valueCopy[i] = !valueCopy[i]
        setValue(valueCopy);
    }

    return (
        <>
            <div className="sq">
                <select onChange={() => change(0)} type="colorinput" checked={value}>
                <option value={1}>yellow</option>
                <option value={2}>red</option>
                <option value={3}>black</option>
                <option value={4}>green</option> </select>
            </div>
        </>
    )
}

export default ColorInput;