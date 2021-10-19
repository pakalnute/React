import { useState } from "react";

function SelectInput() {

    const [value, setValue] = useState('');

    const change = e => {
        setValue(e.target.value);
    }


    return(
        <div className= 'sq'>
            <select onChange={change} value={value}>
                <option value={1}>circle</option>
                <option value={2}>square</option>
                <option value={3}>vertical line</option>
                <option value={4}>horizontal line</option>
            </select>

        </div>
    );
}
export default SelectInput;