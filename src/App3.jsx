/*import Circle from "./components/Circle";


  function App() {
    return (
      <div>
          <Circle color={'red'} circleNumber={'1'}/>
          <Circle color={'black'} circleNumber={'2'}/>
          <Circle color={'pink'} circleNumber={'3'}/>
          <Circle color={'yellow'} circleNumber={'4'}/>
          <Circle color={'purple'} circleNumber={'5'}/>
          <Circle color={'grey'} circleNumber={'6'}/>
          <Circle color={'green'} circleNumber={'7'}/>
          <Circle color={'brown'} circleNumber={'8'}/>
      </div>
    );
  }
export default App;*/
// import './App.css';

import Circle from './components/Circle';
// import Simple from './Components/Simple';

// const a = 5;
// const b = 6;

const data = [
  {
    ls: '0px',
    circleColor: 'red',
    circleNumber: 1
  },
    {
    ls: '0px',
    circleColor: 'orange',
    circleNumber: 2
  },
    {
    ls: '0px',
    circleColor: 'pink',
    circleNumber: 3
  },
    {
    ls: '0px',
    circleColor: 'yellow',
    circleNumber: 4
  },
  {
    ls: '0px',
    circleColor: 'purple',
    circleNumber: 5
  },
    {
    ls: '0px',
    circleColor: 'grey',
    circleNumber: 6
  },
    {
    ls: '0px',
    circleColor: 'green',
    circleNumber: 7
  },
    {
    ls: '0px',
    circleColor: 'brown',
    circleNumber: 8
  }
];


function App() {

  return (
    <>
    {data.map((circle, index) => <Circle key={index} circleColor={circle.circleColor} ls={circle.ls} circleNumber={circle.circleNumber} />)}
    </>
  );

}

export default App;