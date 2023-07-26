import React from "react";

type AccordionPropsType = {
  title: string,
  collapsed?: boolean
}

function Accordion({title, collapsed}: AccordionPropsType) {

    return (
      <div>
        <AccordionTitle text={title} />
        { !collapsed && <AccordionBody /> }
      </div>
    )

}

type AccordionTitlePropsType = {
  text: string
}
function AccordionTitle({text, }: AccordionTitlePropsType) {
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

export default Accordion
