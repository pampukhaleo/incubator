import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import { OnOff } from './components/OnOff/OnOff';

function App() {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const toggleCollapsed = () => setCollapsed(value => !value)
  return (
    <div>
      <input type="text"/>
      <input type="password"/>
      <input type="date"/>
      <PageTitle title={'This is APP component'}/>
      Article 1
      <Rating value={3}/>
      <Accordion title={'Menu'} collapsed={collapsed} />
      <Accordion title={'Images'} collapsed={collapsed} />
      Article 2
      <Rating value={4}/>
      <OnOff />
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
