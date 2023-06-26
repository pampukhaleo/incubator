import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

function App() {
  const [collapsed, setCollapsed] = useState(false)
  const toggleCollapsed = () => setCollapsed(value => !value)
  return (
    <div>
      <input type="text"/>
      <input type="password"/>
      <input type="date"/>
      <PageTitle title={'This is APP component'}/>
      Article 1
      <Rating value={3}/>
      <Accordion title={'Menu'} collapsed={collapsed} toggleCollapsed={toggleCollapsed}/>
      <Accordion title={'Images'} collapsed={collapsed} toggleCollapsed={toggleCollapsed}/>
      Article 2
      <Rating value={4}/>
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle({title}: PageTitlePropsType) {
  return <h1>{title}</h1>
}

export default App;
