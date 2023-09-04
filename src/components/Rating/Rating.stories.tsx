import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import { Rating, RatingValueType } from './Rating';

export default {
  title: 'Rating',
  component: Rating,
};

const onClickCallBack = action('Rating Value')

export const ZeroStars = () => <Rating value={ 0 } onClick={ onClickCallBack }/>
export const OneStar = () => <Rating value={ 1 } onClick={ onClickCallBack }/>
export const TwoStars = () => <Rating value={ 2 } onClick={ onClickCallBack }/>
export const ThreeStars = () => <Rating value={ 3 } onClick={ onClickCallBack }/>
export const FourStars = () => <Rating value={ 4 } onClick={ onClickCallBack }/>
export const FiveStars = () => <Rating value={ 5 } onClick={ onClickCallBack }/>
export const ChangeRating = () => {
  const [rating, setRating] = useState<RatingValueType>(0);

  return <Rating value={ rating } onClick={ setRating }/>
}
