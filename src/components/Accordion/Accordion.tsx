import React from 'react';

type AccordionPropsType = {
  title: string,
  collapsed?: boolean
  onClick: () => void
  items: string[]
}

export const Accordion = ({ title, collapsed, onClick, items }: AccordionPropsType) => {
  return (
    <div>
      <AccordionTitle text={ title } onClick={ onClick }/>
      { !collapsed && <AccordionBody items={ items }/> }
    </div>
  )

}

type AccordionTitlePropsType = {
  text: string
  onClick: () => void
}

function AccordionTitle({ text, onClick }: AccordionTitlePropsType) {
  return <h3 onClick={ (e) => onClick() }>{ text }</h3>
}

type AccordionBodyPropsType = {
  items: string[]
}

function AccordionBody({ items }: AccordionBodyPropsType) {
  return (
    <ul>
      { items.map((item, index) => <li key={ index }>{ item }</li>) }
    </ul>
  )
}
