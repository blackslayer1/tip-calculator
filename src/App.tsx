import './App.scss';
import React, { useState } from 'react';
import person from './icons/person.png';
import dollar from './icons/dollar.png';

function App() {

  const [tip, setTip] = useState<number | string>(0);

  const isInputEmpty = () => {
    var inputs = document.querySelectorAll('.inputContainer input');
    
    for (const input of inputs)
        if ((input as HTMLInputElement).value === '') return true;
    
    return false;
}


const showError = () => {
  let errorBox = document.getElementById('errorBox')!;
  let container = document.getElementById('container')!;
  errorBox.style.position="relative";
  errorBox.style.visibility="visible";
  container.style.height="530px";
}

const hideError = () => {
  let errorBox = document.getElementById('errorBox')!;
  let container = document.getElementById('container')!;
  errorBox.style.visibility="hidden";
  container.style.height="400px";
  errorBox.style.position="absolute";
}

  const calculate = () => {
    let modal = document.querySelector(".modal")!;
    let service = (document.getElementById('service') as HTMLInputElement);
    let input = (document.getElementById('input')! as HTMLInputElement);
    let bill = parseInt((document.getElementById('bill')! as HTMLInputElement).value);

      if(isInputEmpty() || service.value === '' || parseInt(input.value) <= 0){
        showError();
      } else {
        hideError();
        if(input.value === '1'){
          switch(service.value){
            case '1':
            setTip((bill*10)/100);
            break;
            case '2':
            setTip((bill*15)/100);
            break;
            case '3':
            setTip((bill*20)/100);
            break;
            case '4':
            setTip((bill*25)/100);
            break;
            case '5':
            setTip((bill*30)/100);
            break;
          }
        } else {
          switch(service.value){
            case '1':
            setTip('$' + ((bill*10)/100)/parseInt(input.value) + ' Each Person');
            break;
            case '2':
            setTip('$' + ((bill*15)/100)/parseInt(input.value) + ' Each Person');
            break;
            case '3':
            setTip('$' + ((bill*20)/100)/parseInt(input.value) + ' Each Person');
            break;
            case '4':
            setTip('$' + ((bill*25)/100)/parseInt(input.value) + ' Each Person');
            break;
            case '5':
            setTip('$' + ((bill*30)/100)/parseInt(input.value) + ' Each Person');
            break;
          }
        }
        modal.classList.toggle("show-modal");
      }
  }

  return (
    <div className="App">
    <div style={{height: "400px", width: "45%"}} id="container" className="container">
    <header>TIP CALCULATOR</header>
    <div className="errorBox" id="errorBox">
      <p>Bill Amount Cannot Be Blank</p>
      <p>Number Of Users Must Be Greater Than Zero</p>
      <p>You Must Select A Service</p>
    </div>
    <div className="inputContainer">
    <div>
    <label>How Much Was Your Bill?</label>
    <br/>
    <div className="dollar">
    <img src={dollar}/>
    </div>
    <input id="bill" type="number" min="0"></input>
    </div>
    <br/>
    <div>
    <label>How Many People Sharing The Bill?</label>
    <br/>
    <div className="person">
    <img src={person}/>
    </div>
    <input type="number" min="1" id="input"></input>
    </div>
    <div>
    <br/>
    <label>How Was Your Service?</label>
    <br/>
    <select id="service" style={{outlineColor: "#336799"}}>
    <option value="">Choose</option>
    <option value="1">Poor</option>
    <option value="2">Fair</option>
    <option value="3">Good</option>
    <option value="4">Very Good</option>
    <option value="5">Excellent</option>
    </select>
    </div>
    </div>
    <div className="buttonContainer">
    <button onClick={calculate}>Calculate</button>
    </div>
    </div>
<div className="modal">
    <div className="modal-content">
        <span className="close-button" onClick={()=>{document.querySelector(".modal")!.classList.remove("show-modal")}}>&times;</span>
        <h1>Tip Total</h1>
        <h3>{tip}</h3>
    </div>
</div>
    </div>
  );
}

export default App;
