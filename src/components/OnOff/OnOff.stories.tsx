import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import { OnOff } from './OnOff';

export default {
  title: 'OnOff',
  component: OnOff,
};

const onClickCallback = action('OnClick')

export const On = () => <OnOff on={true} onClick={ onClickCallback }/>
export const Off = () => <OnOff on={false} onClick={ onClickCallback }/>
export const OnOffToggle = () => {
  const [on, setOn] = useState(false);

  return <OnOff on={on} onClick={ () => setOn(!on) }/>
}

