import { useState } from 'react';
import FieldAnimal from "./components/FieldAnimal";

function App() {

    const [field, setField] = useState([])
    const [farm, setFarm] = useState([])

    const [change, setChange] = useState([]);



    const add = (what) => {
        const fieldCopy = field.slice();
        const farmCopy = farm.slice();

        if (change === "field") {
            fieldCopy.push({animal: what});
            setField(farmCopy);
        }
        else if (change === "farm") {
            farmCopy.push({animal:what});
            setFarm(farmCopy);
        }

    };
    const changeToWich = event => {
        setChange(event.target.value);
    };

  return (
    <>
    <div className="field">
    <div>
    
        {field.map((fieldAnimal, i)=>(
        <FieldAnimal key={i} field={fieldAnimal.field}/>
                ))}
    </div>
    <div>
    {field.map((fieldAnimal, i)=>
        {if(fieldAnimal.farm === 'right') 
            return(<FieldAnimal key={i} field={fieldAnimal.field}/>);
            return '';
        }
    )}
    </div>

        <button onClick={() => add ('cow')}>Add cow</button>
        <button onClick={() => add ('sheep')}>Add sheep</button>
        <button onClick={() => add ('horse')}>Add horse</button>
        <select onChange={event => changeToWich(event)} value={field}>
                <option value={"field"}>First field</option>
                <option value={"farm"}>Second field</option>
        </select>
    </div>
    </>
  );
}

export default App;