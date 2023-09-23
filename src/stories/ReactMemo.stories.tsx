import React, { useState } from 'react';

export default {
  title: 'React.memo demonstration',
};

const Counter = ({ value }: { value: number }) => {
  return <div>{ value }</div>
}
const UsersSecret = ({ users }: { users: string[] }) => {
  console.log('USERS')
  return (
    <div>
      { users.map((user) => (
        <div>
          { user }
        </div>
      )) }
    </div>
  )
}
const Users = React.memo(UsersSecret)

export const Container = () => {
  const [users, setUsers] = useState(['Leo', 'Mike'])
  const [counter, setCounter] = useState(0)

  return <div>
    <button onClick={() => setCounter(counter+1)}>+</button>
    <Counter value={ counter }/>
    <Users users={ users }/>
  </div>
}