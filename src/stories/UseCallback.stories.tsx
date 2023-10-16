import React, { useCallback, useMemo, useState } from 'react';

export default {
  title: 'UseCallback demonstration',
};

const Counter = ({ value }: { value: number }) => {
  return <div>{ value }</div>
}

const BooksSecret = ({ books, addBook }: { books: string[], addBook: () => void }) => {
  console.log('BooksSecret')
  return (
    <div>
      <button onClick={ addBook }>Add book</button>
      { books.map((book, index) => (
        <div key={ index }>
          { book }
        </div>
      )) }
    </div>
  )
}

const Books = React.memo(BooksSecret)

export const Container = () => {
  console.log('Container')
  const [books, setBooks] = useState(['React', 'Angular'])
  const [counter, setCounter] = useState(0)

  const newArray = useMemo(() => {
    return books.filter(book => book.toLowerCase().indexOf('a') > -1)
  }, [books])

  const addBook = useCallback(() => {
    console.log(books)
    const newBook = [...books, 'Typescript ' + new Date().getTime()]
    setBooks(newBook)
  }, [books])

  return <div>
    <button onClick={ () => setCounter(counter + 1) }>+</button>
    <Counter value={ counter }/>
    <Books books={ newArray } addBook={ addBook }/>
  </div>
}