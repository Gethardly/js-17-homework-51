import React, {useState} from 'react';
import './App.css';
import Circle from "./Circle/Circle";

function App() {

  const mixLoop = () => {

    let myArr: number[] = [];

    for (let i = 0; i < 5; i++) {
      let randomNumber: number = Math.floor(Math.random() * (36 - 5 + 1) + 5);
      for (let j = 0; j < 5; j++) {
        if (randomNumber === myArr[j]) {
          randomNumber = Math.floor(Math.random() * (36 - 5 + 1) + 5);
        }
      }
      myArr.push(randomNumber);
    }
    myArr.sort((a,b) => a -b);

    return myArr
  };

  const [randNumb, setNumber] = useState(mixLoop());

  const changeNumbers = () => {
    setNumber(mixLoop());
  };

  return (
    <div className="App">
      <Circle randomNumber={randNumb[0]}>
      </Circle>
      <Circle randomNumber={randNumb[1]}>
      </Circle>
      <Circle randomNumber={randNumb[2]}>
      </Circle>
      <Circle randomNumber={randNumb[3]}>
      </Circle>
      <Circle randomNumber={randNumb[4]}>
      </Circle>

      <div>
        <button onClick={changeNumbers}>New numbers</button>
      </div>
    </div>
  );
}

export default App;
