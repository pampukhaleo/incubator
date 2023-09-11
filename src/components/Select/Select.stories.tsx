import { action } from '@storybook/addon-actions';
import { Select } from './Select';
import React, { useState } from 'react';

export default {
  title: 'Select',
  component: Select,
};

const onClickCallBack = action('onClick')

export const ToggleSelect = () => {
  return <Select itemsForSelect={ [
    { title: '1 item', id: 1 },
    { title: '2 item', id: 2 },
    { title: '3 item', id: 3 },
  ] }/>
}

// export const OpenedAccordion = () => {
//   return <Select title={ 'Opened Select' } collapsed={ false } onClick={ onClickCallBack }/>
// }
//
// export const ToggleAccordion = () => {
//   const [collapsed, setCollapsed] = useState(false);
//
//   return <Select title={ 'Toggle Select' }
//                  collapsed={ collapsed }
//                  onClick={ () => setCollapsed(!collapsed) }/>
// }
