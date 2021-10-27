
import { useState, useEffect, useRef } from "react";
import FieldAnimal from "./components/FieldAnimal";
import idGenerator from "./Common/idGenerator";

function App() {

    const [field, setField] = useState([]);

    const [fieldNumber, setFieldNumber] = useState(1);

    const [weight, setWeight] = useState('');

    const [fieldType, setFieldType] = useState('cow');

    const [date, setDate] = useState('');

    const allAnimals = useRef(0);
    const types = useRef({ cow: 0, sheep: 0, horse: 0 });
    const total = useRef(0);

    const handleWeight = event => {
        setWeight(event.target.value);
    }

    const handleDate = event => {
        setDate(event.target.value);
    }

    const selectFieldType = event => {
        setFieldType(event.target.value);
    }

    const stats = (fieldCopy) => {
        allAnimals.current = fieldCopy.length;
        types.current = {cow: 0, sheep: 0, horse: 0 };
        total.current = 0;
        fieldCopy.forEach(a => {
            types.current[a.animal]++;
            total.current += parseFloat(a.weight);
        })
    }

    const add = () => {

        const fieldCopy = field.slice();

        fieldCopy.push({
            date: date,
            id: idGenerator(),
            animal: fieldType,
            weight: weight,
            field: parseInt(fieldNumber)
        });

        setField(fieldCopy);
        stats(fieldCopy);
        localStorage.setItem('animals', JSON.stringify(fieldCopy));
        console.log(fieldCopy);
    }

    const selectField = event => {
        setFieldNumber(event.target.value);
    }
    const goHome = (id) => {
        const fieldCopy = field.slice();
        const ind = fieldCopy.findIndex(e => e.id === id);
        fieldCopy.splice(ind, 1);
        setField(fieldCopy);
        stats(fieldCopy);
        localStorage.setItem('animals', JSON.stringify(fieldCopy));
    }
    const groupGoHome = (group) => {
        const fieldCopy = field.slice();
        while (true) {
            const ind = fieldCopy.findIndex(e => e.animal === group);
            if (ind < 0) {
                break;
            }
            fieldCopy.splice(ind, 1);
        }
        setField(fieldCopy);
        stats(fieldCopy);
        localStorage.setItem('animals', JSON.stringify(fieldCopy));
    }


    const addWeight = (id, w) => {
        const fieldCopy = field.slice();
        const i = fieldCopy.findIndex(e => e.id === id);
        fieldCopy[i].weight = parseFloat(w);
        setField(fieldCopy);
        localStorage.setItem('animals', JSON.stringify(fieldCopy));
    }

    const addDate = (id, d) => {
        const fieldCopy = field.slice();
        const i = fieldCopy.findIndex(e => e.id === id);
        fieldCopy[i].date = d;
        setField(fieldCopy);
        localStorage.setItem('animals', JSON.stringify(fieldCopy));
    }


    useEffect(() => {
        const animalsfromStorage = localStorage.getItem('animals');
        if (null !== animalsfromStorage) {
            setField(JSON.parse(animalsfromStorage));
            stats(JSON.parse(animalsfromStorage));
        }
    }, []);


    return (
        <>
            <h1>FARM CRUD</h1>
            <div className='statistcis'>
                <h2>Statistics:</h2>
                <div className='stats'>
                    All animals: {allAnimals.current}
                </div>
                <div className='stats'>
                    Total: {total.current}
                </div>
                <div className='stats'>
                    Cows: {types.current.cow}
                </div>
                <div className='stats'>
                    Sheeps: {types.current.sheep}
                </div>
                <div className='stats'> 
                    Horses: {types.current.horse}
                </div>
                <div className='buttons-holder'>
                    <button onClick={() => groupGoHome('cow')}>Home cow</button>
                    <button onClick={() => groupGoHome('sheep')}>Home sheep</button>
                    <button onClick={() => groupGoHome('horse')}>Home horse</button>
                </div>
            </div>
            <div className='field'>
                <div className='field_part'>

                    {field.map((fieldAnimal, i) => <FieldAnimal key={i} field={1} fieldAnimal={fieldAnimal} goHome={goHome} addWeight={addWeight} addDate={addDate}></FieldAnimal>)}
                </div>
                <div className='field_part'>

                    {field.map((fieldAnimal, i) => <FieldAnimal key={i} field={2} fieldAnimal={fieldAnimal} goHome={goHome} addWeight={addWeight} addDate={addDate}></FieldAnimal>)}
                </div>
                <div className='field_part'>

                    {field.map((fieldAnimal, i) => <FieldAnimal key={i} field={3} fieldAnimal={fieldAnimal} goHome={goHome} addWeight={addWeight} addDate={addDate}></FieldAnimal>)}
                </div>
            </div>
            <div className='new'>
                <h3>Create new animal</h3>
                <span>Field Number</span>
                <select value={fieldNumber} onChange={selectField}>
                    <option value={1}>Field One</option>
                    <option value={2}>Field Two</option>
                    <option value={3}>Field Three</option>
                </select>
                <span>Animal type</span>
                <select value={fieldType} onChange={selectFieldType}>
                    <option value={'cow'}>Cow</option>
                    <option value={'sheep'}>Sheep</option>
                    <option value={'horse'}>Horse</option>
                </select>
                <span>Animal weight</span>
                <input type="text" onChange={handleWeight} value={weight} />
                <button onClick={add}>Add animal</button>
                <span>Last feed time</span>
                <input className='date' type="date" onChange={handleDate} value={date} />
            </div>
            <div className='buttons-holder'>
                <button onClick={() => groupGoHome('cow')}>Home cow</button>
                <button onClick={() => groupGoHome('sheep')}>Home sheep</button>
                <button onClick={() => groupGoHome('horse')}>Home horse</button>
            </div>
        </>
    );
}
export default App;