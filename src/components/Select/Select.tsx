import React, { useState } from 'react';
import s from './select.module.css'

type ItemsForSelectPT = {
  title: string
  value: string
}

type SelectPropsType = {
  itemsForSelect: ItemsForSelectPT[]
  value: string | null
  onChange: (value: any) => void
}

export const Select = ({ itemsForSelect, value, onChange }: SelectPropsType) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [hovered, setHovered] = useState(value);

  const selectedItem = itemsForSelect.find(el => el.value === value)

  const toggleCollapsed = () => setCollapsed(!collapsed)

  const onItemClick = (value: string) => {
    toggleCollapsed()
    onChange(value)
  }

  return (
    <>
      <div className={ s.select } onClick={ () => {
        setCollapsed(true)
      } }>
        { selectedItem ? selectedItem.title : 'Nothing Selected' }
      </div>
      {
        collapsed &&
        <ul className={ s.items }>
          { itemsForSelect.map(item => {
            return <li key={ item.value }
                       className={ hovered === item.value ? s.hovered : '' }
                       onClick={ () => onItemClick(item.value) }
                       onMouseEnter={ () => setHovered(item.value) }
            >{ item.title }</li>
          }) }
        </ul>
      }
    </>
  )
}
