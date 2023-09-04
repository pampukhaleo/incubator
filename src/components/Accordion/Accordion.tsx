import React from 'react';

type AccordionPropsType = {
  title: string,
  collapsed?: boolean
  onClick: () => void
}

function Accordion({ title, collapsed, onClick }: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle text={ title } onClick={ onClick }/>
      { !collapsed && <AccordionBody/> }
    </div>
  )

}

type AccordionTitlePropsType = {
  text: string
  onClick: () => void
}

function AccordionTitle({ text, onClick }: AccordionTitlePropsType) {
  return <h3 onClick={ onClick }>{ text }</h3>
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

export default Accordion
