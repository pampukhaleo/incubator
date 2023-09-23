import React, { useReducer } from 'react';
import { reducer, TOGGLE_COLLAPSED } from "./reducer";

type AccordionPropsType = {
  title: string
}

export const UncontrolledAccordion = ({ title }: AccordionPropsType) => {

  // const [collapsed, setCollapsed] = useState(false);
  const [state, dispatch] = useReducer(reducer, { collapsed: false });

  // const toggleCollapsed = () => setCollapsed(!collapsed)
  return (
    <div>
      <AccordionTitle text={ title }
                      toggleCollapsed={ () => dispatch({
                        type: TOGGLE_COLLAPSED
                      }) }/>
      { !state.collapsed && <AccordionBody/> }
    </div>
  )
}

type AccordionTitlePropsType = {
  text: string
  toggleCollapsed: () => void
}

function AccordionTitle({ text, toggleCollapsed }: AccordionTitlePropsType) {
  const onClickHandle = () => {
    toggleCollapsed()
  }

  return <h3 onClick={ onClickHandle }>{ text }</h3>
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
