import React, { useState } from 'react';

type AccordionPropsType = {
 title: string
}

function UncontrolledAccordion({title}: AccordionPropsType) {

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => setCollapsed(!collapsed)

  return (
      <div>
        <AccordionTitle text={title} toggleCollapsed={toggleCollapsed} />
        { !collapsed && <AccordionBody /> }
      </div>
    )

}

type AccordionTitlePropsType = {
  text: string
  toggleCollapsed: () => void
}
function AccordionTitle({text, toggleCollapsed}: AccordionTitlePropsType) {
  const onClickHandle = () => {
    toggleCollapsed()
  }

  return <h3 onClick={onClickHandle}>{text}</h3>
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

export default UncontrolledAccordion
