import React, { SetStateAction, useState } from 'react';

type ItemsForSelectPT = {
  title: string
  id: number
}

type SelectPropsType = {
  itemsForSelect: ItemsForSelectPT[]
}

export const Select = ({ itemsForSelect }: SelectPropsType) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [storedItem, setStoredItem] = useState<ItemsForSelectPT | undefined>(itemsForSelect[0]);

  const filteredItems = (id: number) => {
    const result = itemsForSelect.find(el => el.id === id)
    setStoredItem(result)
    setCollapsed(false)
  }

  return (
    <>
      <div onClick={ () => {
        setCollapsed(true)
      } }>
        { storedItem?.title }
      </div>
      {
        collapsed &&
        <ul>
          { itemsForSelect.map(item => {
            return <li key={ item.id } onClick={ () => filteredItems(item.id) }>{ item.title }</li>
          }) }
        </ul>
      }
    </>
  )
}
