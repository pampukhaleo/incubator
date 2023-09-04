import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import { OnOff } from './OnOff';

export default {
  title: 'OnOff',
  component: OnOff,
};

const onClickCallBack = action('onClick')

export const On = () => <OnOff on={ true } onClick={ onClickCallBack }/>
export const Off = () => <OnOff on={ false } onClick={ onClickCallBack }/>
export const OnOffToggle = () => {
  const [on, setOn] = useState(false);

  return <OnOff on={ on } onClick={ () => setOn(!on) }/>
}

