import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

export default App;

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);
  console.log(tip, 'aa11')

  function handleReset() {
    setBill("");
    setPercentage1("");
    setPercentage2("");
  }
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSetPercentage={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSetPercentage={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  )
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type='number'
        value={bill}
        placeholder='bill Value'
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  )
}

function SelectPercentage({ percentage, onSetPercentage, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSetPercentage(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  )
}

function Output({ bill, tip }) {
  return (
    <div>
      <h3>You pay ${bill + tip} (${bill} + ${tip} tip)</h3>
    </div>
  )
}

function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}