import { reducer, StateType, TOGGLE_COLLAPSED } from "./reducer";

test('value should be true', () => {
  //data
  const state: StateType = {
    collapsed: false
  }
  const action = {
    type: TOGGLE_COLLAPSED
  }

  //action
  const newState = reducer(state, action)

  //expect
  expect(newState.collapsed).toBe(true)
})

test('value should be false', () => {
  //data
  const state: StateType = {
    collapsed: true
  }
  const action = {
    type: TOGGLE_COLLAPSED
  }

  //action
  const newState = reducer(state, action)

  //expect
  expect(newState.collapsed).toBe(false)
})

test('action type should throw error if has wrong AT', () => {
  //data
  const state: StateType = {
    collapsed: false
  }
  const action = {
    type: 'error'
  }

  //action

  //expect
  expect(() => reducer(state, action)).toThrowError()
})