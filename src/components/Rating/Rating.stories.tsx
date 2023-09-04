import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import { Rating, RatingValueType } from './Rating';

export default {
  title: 'Rating',
  component: Rating,
};

const onClickCallback = action('OnClick')

export const ZeroStars = () => <Rating value={0} onClick={ onClickCallback }/>
export const OneStar = () => <Rating value={1} onClick={ onClickCallback }/>
export const TwoStars = () => <Rating value={2} onClick={ onClickCallback }/>
export const ThreeStars = () => <Rating value={3} onClick={ onClickCallback }/>
export const FourStars = () => <Rating value={4} onClick={ onClickCallback }/>
export const FiveStars = () => <Rating value={5} onClick={ onClickCallback }/>
export const ChangeRating = () => {
  const [rating, setRating] = useState<RatingValueType>(0);

  return <Rating value={rating} onClick={ setRating }/>
}
