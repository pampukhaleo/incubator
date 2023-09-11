import { action } from '@storybook/addon-actions';
import { Accordion } from './Accordion';
import React, { useState } from 'react';

export default {
  title: 'Accordion',
  component: Accordion,
};

const onClickCallBack = action('onClick')

export const CollapsedAccordion = () => {
  return <Accordion title={ 'Collapsed Select' }
                    collapsed={ true }
                    onClick={ onClickCallBack }
                    items={ ['Leo', 'Anastasia', 'Frank'] }/>
}

export const OpenedAccordion = () => {
  return <Accordion title={ 'Opened Select' }
                    collapsed={ false }
                    onClick={ onClickCallBack }
                    items={ ['Leo', 'Anastasia', 'Frank'] }/>
}

export const ToggleAccordion = () => {
  const [collapsed, setCollapsed] = useState(false);

  return <Accordion title={ 'Toggle Select' }
                    collapsed={ collapsed }
                    onClick={ () => setCollapsed(!collapsed) }
                    items={ ['Leo', 'Anastasia', 'Frank'] }/>
}
