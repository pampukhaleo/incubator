import React, { useState } from 'react';

type RatingPropsType = {

}

function UncontrolledRating({}: RatingPropsType) {

  const [value, setValue] = useState(0);

  const changeValue = (value: number) => {
    setValue(value)
  }

  return (
    <div>
      <Star selected={value > 0} changeValue={changeValue} starNumber={1}/>
      <Star selected={value > 1} changeValue={changeValue} starNumber={2}/>
      <Star selected={value > 2} changeValue={changeValue} starNumber={3}/>
      <Star selected={value > 3} changeValue={changeValue} starNumber={4}/>
      <Star selected={value > 4} changeValue={changeValue} starNumber={5}/>
    </div>
  )
}

type StarPropsType = {
  changeValue: (value: number) => void
  selected: boolean
  starNumber: number
}

function Star({selected, changeValue, starNumber}: StarPropsType) {
  const onClickHandler = (starNumber: number) => {
    changeValue(starNumber)
  }

  return selected
    ? <span onClick={() => onClickHandler(starNumber)}><b>star</b></span>
    : <span onClick={() => onClickHandler(starNumber)}>star</span>
}

export default UncontrolledRating
