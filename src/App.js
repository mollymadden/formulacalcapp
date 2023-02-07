import React, { useState } from "react";

const App = () => {
  const [tinWeight, setTinWeight] = useState(0);
  const [scoopWeight, setScoopWeight] = useState(0);
  const [singleServeVolume, setSingleServeVolume] = useState(0);
  const [babyIntake, setBabyIntake] = useState(0);
  const [unitSystem, setUnitSystem] = useState("metric");
  const [result, setResult] = useState(0);
  const [days, setDays] = useState(0);

  const calculateResult = () => {
    let tinWeightInGrams;
    let scoopWeightInGrams;
    let singleServeVolumeInML;
    if (unitSystem === "metric") {
      tinWeightInGrams = tinWeight;
      scoopWeightInGrams = scoopWeight;
      singleServeVolumeInML = singleServeVolume;
    } else {
      tinWeightInGrams = tinWeight * 28.35;
      scoopWeightInGrams = scoopWeight * 28.35;
      singleServeVolumeInML = singleServeVolume * 29.5735;
    }
    const formulaAmount = tinWeightInGrams / scoopWeightInGrams * singleServeVolumeInML;
    setResult(formulaAmount);
    setDays(formulaAmount / babyIntake);
  };

  return (
    <div className="container">
      <h1>Baby Formula Calculator</h1>
      <div>
        <label>Unit System: </label>
        <select value={unitSystem} onChange={e => setUnitSystem(e.target.value)}>
          <option value="metric">Metric</option>
          <option value="us">US</option>
        </select>
      </div>
      <div>
        <label>Net weight of tin: </label>
        <input
          type="number"
          value={tinWeight}
          onChange={e => setTinWeight(parseFloat(e.target.value))}
        />
        {unitSystem === 'metric' ? ' grams' : ' oz'}
      </div>
      <div>
        <label>Weight of single scoop:</label>
        <input
          type="number"
          value={scoopWeight}
          onChange={e => setScoopWeight(parseFloat(e.target.value))}
        />
        {unitSystem === 'metric' ? ' grams' : ' oz'}
      </div>
      <div>
        <label>Volume of single prepared serve: </label>
        <input
          type="number"
          value={singleServeVolume}
          onChange={e => setSingleServeVolume(parseFloat(e.target.value))}
        />
        {unitSystem === 'metric' ? ' mls' : ' fl oz'}
      </div>
      <div>
        <label>Baby's average daily intake: </label>
        <input
          type="number"
          value={babyIntake}
          onChange={e => setBabyIntake(parseFloat(e.target.value))}
        />
        {unitSystem === 'metric' ? ' mls' : ' fl oz'}
      </div>
      <button onClick={calculateResult}>Calculate</button>
      <div>
        <label>One tin will prepare: </label>
        <span>{unitSystem === 'metric' ? result.toFixed(0) / 1000 : result * 29.5735} {unitSystem === 'metric' ? ' liters' : ' fl oz'}</span>
      </div>
      <div>
        <label>Days one tin will last: </label>
        <span>{days.toFixed(1)} days</span>
      </div>
    </div>
  );
};

export default App;

