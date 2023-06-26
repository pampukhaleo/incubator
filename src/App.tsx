import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      This is APP component
      <Rating />
      <Accordion />
    </div>
  );
}

function Rating() {
  return (
    <div>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  )
}

function Star() {
  return <div>Star</div>
}

function Accordion() {
  return (
    <div>
      <AccordionTitle />
      <AccordionBody />
    </div>
  )
}

function AccordionTitle() {
  return <h3>Menu</h3>
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}
export default App;
