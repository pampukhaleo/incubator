import React, { useState } from 'react';

type AccordionPropsType = {
 title: string
}

function UncontrolledAccordion({title}: AccordionPropsType) {

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => setCollapsed(value => !value)

  return (
      <div>
        <AccordionTitle text={title} />
        { !collapsed && <AccordionBody /> }
        <button onClick={toggleCollapsed}>Toggle</button>
      </div>
    )

}

type AccordionTitlePropsType = {
  text: string
}
function AccordionTitle({text}: AccordionTitlePropsType) {
  // console.log(toggleCollapsed)
  // const changeCollapse = () => {
  //   if (text === "Images") {
  //     return toggleCollapsed()
  //   }
  //   return null
  // }
  return <h3>{text}</h3>
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
