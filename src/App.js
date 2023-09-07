import React, { useState } from 'react';
import './App.css';

function App() {
  const numbers = Array.from({ length: 24 }, (_, i) => i + 1);
  const [weight, setWeight] = useState('')
  const [time, setTime] = useState(1)
  const [bottles, setBottles] = useState('')
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(0)

  function Calculate(e) {
    e.preventDefault();
  
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - (burning * time)
  
    let bloodAlcohol;
    if (gender === 'male') {
      bloodAlcohol = gramsLeft / (weight * 0.7)
    } else {
      bloodAlcohol = gramsLeft / (weight * 0.6)
    }
  
    setResult(Math.max(bloodAlcohol, 0))
  }

  return (
    <div id="container">
      <h2>Calculating alcohol blood level</h2>
      <form onSubmit={Calculate}>
        <div>
          <label>Weight</label>
          <input type="number" value={weight} required onChange={e => setWeight(e.target.value)} />
        </div>
        <div>
          <label>Bottles</label>
          <select value={bottles} onChange={e => setBottles(e.target.value)}>
            {
              numbers.map(bottle => (
                <option value={bottle}>{bottle} bottles</option>
              ))
            }
          </select>
        </div>
        <div>
          <label>Time</label>
          <select value={time} onChange={e => setTime(e.target.value)}>
            {
              numbers.map(time => (
                <option value={time}>{time} hours</option>
              ))
            }
          </select>
        </div>
        <div>
          <label><strong>Gender</strong></label><br/>
          <label>Male</label>
          <input type="radio" id="male" name="gender" defaultChecked onChange={e => setGender(e.target.value)}/><br/>
          <label>Female</label>
          <input type="radio" id="female" name="gender" onChange={e => setGender(e.target.value)}/>
        </div>
        <div>
          <output>{result.toFixed(2)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
