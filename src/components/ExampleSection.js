import React from 'react'
import "../App.css";
import "./BelowFold.css";
import Cards from './Cards';

function ExampleSection() {
  return (
    <div className="belowFold">
      <div id='example' className="example-text">
        <h1>what do we do</h1>
        <p>
          Chimney give lights chimney chimney santa holly, gold tree december
          celebrate angel. Holiday Christmas tree chimney celebration bells
          eggnog Santa holly. Gold santa tree gold Christmas holiday celebrate
          angel goodwill, fireplace stocking angel partridge. Give candy cane
          love icicle scarf scarf tree celebrate noel.</p>
      </div>
      <Cards />
    </div>
    
  );
}

export default ExampleSection;
