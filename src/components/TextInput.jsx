import { useState } from "react";

function TextInput() {

    const [value, setValue] = useState('');

    const change = e => {
        setValue(e.target.value);
    }


    return(
        <div className= 'blue-square'>
            <input onChange={change} type="text" value={value} />

        </div>
    );
}
export default TextInput;