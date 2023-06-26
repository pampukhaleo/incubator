import React from "react";

type AccordionPropsType = {
  title: string,
  collapsed: boolean,
  toggleCollapsed: any
}

function Accordion({title, collapsed, toggleCollapsed}: AccordionPropsType) {
  if (collapsed) {
    return (
      <div>
        <AccordionTitle text={title} toggleCollapsed={toggleCollapsed}/>
        <AccordionBody />
      </div>
    )
  }
  return <AccordionTitle text={title} toggleCollapsed={toggleCollapsed}/>
}

type AccordionTitlePropsType = {
  text: string,
  toggleCollapsed: any
}
function AccordionTitle({text, toggleCollapsed}: AccordionTitlePropsType) {
  // console.log(toggleCollapsed)
  // const changeCollapse = () => {
  //   if (text === "Images") {
  //     return toggleCollapsed()
  //   }
  //   return null
  // }
  return <h3 onClick={toggleCollapsed}>{text}</h3>
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
