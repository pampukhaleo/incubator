import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import { Rating, RatingValueType } from './components/Rating/Rating';
import { OnOff } from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating';

function App() {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);

  const toggleCollapsed = () => setCollapsed(value => !value)

  return (
    <div>
      <input type="text"/>
      <input type="password"/>
      <input type="date"/>
      <PageTitle title={ 'This is APP component' }/>
      Article 1
      {/*<Rating value={3}/>*/ }
      {/*<Accordion title={'Menu'} collapsed={collapsed} />*/ }
      {/*<Accordion title={'Images'} collapsed={collapsed} />*/ }
      <UncontrolledAccordion title={ 'Menu' }/>
      Article 2
      <Rating value={ ratingValue } onClick={setRatingValue}/>
      {/*<UncontrolledRating />*/ }
      <OnOff/>
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle({ title }: PageTitlePropsType) {
  return <h1>{ title }</h1>
}

export default App;
