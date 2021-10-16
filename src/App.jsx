import BlueSquare from "./components/BlueSquare";
import RedCircle from "./components/RedCircle";

function App() {

    return (
        <div>
            <BlueSquare buttonText={'S P A U S T I'}/>
            <BlueSquare buttonText={'S T U M T I'}/>
            <RedCircle color={'red'} buttonText={'S P A U S T I'}/>
            <RedCircle color={'yellow'} buttonText={'K E L T I'}/>
        </div>
    );
}

export default App;
