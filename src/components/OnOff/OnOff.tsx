import React from 'react';
import '../UncontrolledOnOff/uncontrolledOnOff.css'

type OnOffPropTypes = {
  on: boolean
  onClick: () => void
}

export const OnOff = ({ on, onClick }: OnOffPropTypes) => {

  return (
    <div>
      <button className={ `btn ${ on && 'green' }` }
              onClick={ onClick }
              disabled={ on }>On
      </button>
      <button className={ `btn ${ !on && 'red' }` }
              onClick={ onClick }
              disabled={ !on }>Off
      </button>
      <div className={ `circle green ${ !on && 'red' }` }></div>
    </div>
  )
}

