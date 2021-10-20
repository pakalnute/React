import { useState } from 'react';
import FieldAnimal from "./components/FieldAnimal";

function App() {

    const [field, setField] = useState([])
    const [farm, setFarm] = useState('left')

    const chooseFarm = (f) => {
        setFarm(f);
    }



    const add = (what) => {
        const fieldCopy = field.slice();
        fieldCopy.push({
            animal:what,
            farm:farm
        });
        setField(fieldCopy);
    }

  return (
    <>
    <div className="content">
    <div className="left-field">
    
        {field.map((fieldAnimal, i)=>
            {if(fieldAnimal.farm === 'left') 
                return(<FieldAnimal key={i} field={fieldAnimal.field}/>);
                return '';
            }
        )}
    </div>
    <div className="right-field">
    
    {field.map((fieldAnimal, i)=>
        {if(fieldAnimal.farm === 'right') 
            return(<FieldAnimal key={i} field={fieldAnimal.field}/>);
            return '';
        }
    )}
    </div>

    <div className="navigation">
        <button onClick={() => chooseFarm('left')}>Left</button>
        <button onClick={() => chooseFarm('right')}>Right</button>            
        <button onClick={() => add ('cow')}>Add cow</button>
        <button onClick={() => add ('sheep')}>Add sheep</button>
        <button onClick={() => add ('horse')}>Add horse</button>
    </div>
    </div>
    </>
  );
}

export default App;