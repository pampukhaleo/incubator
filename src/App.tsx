import React, { useState } from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { Rating, RatingValueType } from './components/Rating/Rating';
import { OnOff } from './components/OnOff/OnOff';
import { Select } from './components/Select/Select';

function App() {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  const [items, setItems] = useState<Array<string>>(['Leo', 'Anastasia', 'Frank']);

  const toggleCollapsed = () => setCollapsed(value => !value)

  return (
    <div>
      <input type="text"/>
      <input type="password"/>
      <input type="date"/>
      <PageTitle title={ 'This is APP component' }/>
      Article 1
      {/*<Rating value={3}/>*/ }
      <Accordion title={ 'Menu' }
                 collapsed={ collapsed }
                 onClick={ toggleCollapsed }
                 items={ items }/>
      {/*<UncontrolledAccordion title={ 'Menu' }/>*/ }
      Article 2
      <Rating value={ ratingValue } onClick={ setRatingValue }/>
      {/*<UncontrolledRating />*/ }
      <OnOff on={ !collapsed } onClick={ toggleCollapsed }/>
      {/*<UncontrolledOnOff/>*/ }
      <Select itemsForSelect={
        [
          { title: '1 item', id: 1 },
          { title: '2 item', id: 2 },
          { title: '3 item', id: 3 },
        ]
      }/>
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
