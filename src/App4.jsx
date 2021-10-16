import Button from "./components/Button";

const row1Buttons = [
    {
      buttonText: 'Nr.1',
    },
    {
      buttonText: 'Nr.2',
    },
 
    
  ];

  const row2Buttons = [
    {
      buttonText: 'Nr.3',
    },
    {
      buttonText: 'Nr.4',
    }
  ];
  
  function App() {
    return (
      <>
        <div>
          {
            row1Buttons.map((btn, i) => <Button buttonText = {btn.buttonText}></Button>)
          }
        </div>
        <div>
          {
            row2Buttons.map((btn, i) => <Button buttonText = {btn.buttonText}></Button>)
          }
        </div>
      </>
    );
  }
  

export default App;