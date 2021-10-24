import { useState } from "react";
import GroupAnimal from "./components/GroupAnimal";

function App() {
    // PIRMAS LAUKAS
    const [fieldFirst, setFieldFirst] = useState([]);

    // ANTRAS LAUKAS
    const [fieldSecond, setFieldSecond] = useState([]);

    // LAUKO PASIRINKIMAS
    const [change, setChange] = useState("first");


    // SALYGA
    const add = (what) => {
        // padarome STATE HOOKO KOPIJA kad butu galima keisti busena
        const fieldFirstCopy = fieldFirst.slice();
        const fieldSecondCopy = fieldSecond.slice();

        // jeigu onChange metu state bus first reikia prideti gyvuna i first optiona
        if (change === "first") {
            fieldFirstCopy.push({ animal: what });
            // atiduodam kopija
            setFieldFirst(fieldFirstCopy);
        }
        // jeigu onChange metu state bus second reikia prideti gyvuna i second optiona
        else if (change === "second") {
            fieldSecondCopy.push({ animal: what });
            // atiduodam kopija
            setFieldSecond(fieldSecondCopy);
        }
    };
    // select funkcija
    const changeToWhich = event => {
        setChange(event.target.value);
    };

    return (
        <div className="field">
            <div>
                {/* sukuriamas komponentas GroupAnimal */}
                {/* renderinamas pirmas laukas */}
                {fieldFirst.map((fieldAnimal, i) => (
                    <GroupAnimal key={i} fieldAnimal={fieldAnimal}></GroupAnimal>
                ))}
            </div>
            <div>
                {/* sukuriamas komponentas GroupAnimal */}
                {/* renderinamas antras laukas */}
                {fieldSecond.map((fieldAnimal, i) => (
                    <GroupAnimal key={i} fieldAnimal={fieldAnimal}></GroupAnimal>
                ))}
            </div>
            {/* mygtuko paspaudimo metu pridedam tam tikra gyvuna */}
            <button onClick={() => add("cow")}>Add cow</button>
            <button onClick={() => add("sheep")}>Add sheep</button>
            <button onClick={() => add("horse")}>Add horse</button>
            {/* selecto keitimo metu islukstenama funkcija su eventu, priklausomai nuo pasirinkimo bus pateikta reiksme */}
            <select onChange={event => changeToWhich(event)} value={fieldFirst}>
                <option value={"first"}>First field</option>
                <option value={"second"}>Second field</option>
            </select>
        </div>
    );
}

export default App;