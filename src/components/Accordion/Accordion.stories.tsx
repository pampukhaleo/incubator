import type { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Accordion } from './Accordion';
import React, { useState } from 'react';

export default {
  title: 'Accordion',
  component: Accordion,
};

const onClickCallback = action('OnClick')

export const CollapsedAccordion = () => {
  return <Accordion title={ 'Collapsed Accordion' } collapsed={ true } onClick={onClickCallback}/>
}

export const OpenedAccordion = () => {
  return <Accordion title={ 'Opened Accordion' } collapsed={ false } onClick={onClickCallback}/>
}

export const ToggleAccordion = () => {
  const [collapsed, setCollapsed] = useState(false);

  return <Accordion title={ 'Toggle Accordion' }
                    collapsed={ collapsed }
                    onClick={() => setCollapsed(!collapsed)}/>
}
