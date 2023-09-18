import { action } from '@storybook/addon-actions';
import { Select } from './Select';
import React, { useState } from 'react';

export default {
  title: 'Select',
  component: Select,
};

const onClickCallBack = action('onClick')

export const BaseExample = () => {
  const [value, setValue] = useState<string>('1');

  return <Select value={ value }
                 onChange={ setValue }
                 itemsForSelect={
                   [
                     { title: 'Kyiv', value: '1' },
                     { title: 'Lviv', value: '2' },
                     { title: 'Kharkiv', value: '3' },
                   ]
                 }/>
}

export const NoValue = () => {
  const [value, setValue] = useState(null);

  return <Select value={ value }
                 onChange={ setValue }
                 itemsForSelect={
                   [
                     { title: 'Kyiv', value: '1' },
                     { title: 'Lviv', value: '2' },
                     { title: 'Kharkiv', value: '3' },
                   ]
                 }/>
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
