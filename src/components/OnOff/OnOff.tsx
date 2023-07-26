import React from 'react';
import './onOff.css'

type OnOffPropTypes = {
  collapsed: boolean,
  toggleCollapsed: () => void
}

export const OnOff = ({ collapsed, toggleCollapsed }: OnOffPropTypes) => {
  return (
    <div>
      <button className={ `btn ${ collapsed && 'green' }` }
              onClick={ toggleCollapsed }
              disabled={ !collapsed }>On
      </button>
      <button className={ `btn ${ !collapsed && 'red' }` }
              onClick={ toggleCollapsed }
              disabled={ collapsed }>Off
      </button>
      <div className={ `circle green ${ !collapsed && 'red' }` }></div>
    </div>
  )
}

