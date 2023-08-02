import React, { useState } from 'react';

type RatingPropsType = {

}

function UncontrolledRating({}: RatingPropsType) {

  const [value, setValue] = useState(4);

  return (
    <div>
      <Star selected={value > 0}/>
      <Star selected={value > 1}/>
      <Star selected={value > 2}/>
      <Star selected={value > 3}/>
      <Star selected={value > 4}/>
    </div>
  )
}

type StarPropsType = {
  selected: boolean
}

function Star({selected}: StarPropsType) {
  if (selected) {
    return <span><b>star</b> </span>
  }
  return <span>star </span>
}

export default UncontrolledRating
