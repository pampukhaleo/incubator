import React, { useReducer, useState } from 'react';

type AccordionPropsType = {
  title: string
}

type ActionType = {
  type: string
}

const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED'

const reducer = (state: boolean, action: ActionType) => {
  switch (action.type) {
    case TOGGLE_COLLAPSED:
      return !state
    default:
      throw new Error('Bad action type')
  }
}

export const UncontrolledAccordion = ({ title }: AccordionPropsType) => {

  // const [collapsed, setCollapsed] = useState(false);
  const [collapsed, dispatch] = useReducer(reducer, false);

  // const toggleCollapsed = () => setCollapsed(!collapsed)

  return (
    <div>
      <AccordionTitle text={ title }
                      toggleCollapsed={ () => dispatch({
                        type: TOGGLE_COLLAPSED
                      }) }/>
      { !collapsed && <AccordionBody/> }
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
