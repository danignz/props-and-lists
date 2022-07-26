import './App.css';
import React, { useState } from 'react';
import animalData from './data.json';
import Card from './components/Card';

function App() {
  const [animals, setAnimals] = useState(animalData);

  const handleSortByLife = () => {
    const ordered = [...animals].sort((a, b) => a.lifeExpectancy - b.lifeExpectancy)
    setAnimals(ordered);
  }

  const handleFilterDogs = () => {
    const filtered = animals.filter(elem => elem.type === "dog");
    setAnimals(filtered);
  }

  return (
    <div className="App">
      <h1>Adopt me plz 🐾</h1>
      <button onClick={handleSortByLife} className="action-btn">Sort by life expectancy</button>
      <button onClick={handleFilterDogs} className="action-btn">See only dogs</button>
      {animals.map(elem => {
        return <Card key={elem._id} animal={elem}/>
      })}
    </div>
  );
}

export default App;