import uuid from 'uuid/v1'
import { REHYDRATE } from 'redux-persist/constants'

export default {
  namespace: 'todos',
  state: [],
  enhancers: [
    reducer => (state, action) => {
      const { type, payload } = action
      if (type === REHYDRATE) {
        const todos = payload.todos || []
        return [
          ...state,
          ...todos,
        ]
      }
      return reducer(state, action)
    },
  ],

  add: (state, text) => [
    ...state,
    {
      id: uuid(),
      text,
      completed: false,
    },
  ],

  update: (state, { text, id }) => state.map(todo => (todo.id === id ? { ...todo, text } : todo)),

  remove: (state, id) => state.filter(todo => todo.id !== id),

  startEdit: (state, id) => state.map(todo => (
    todo.id === id ? { ...todo, editing: true } : todo
  )),

  endEdit: (state, id) => state.map(todo => (
    todo.id === id ? { ...todo, editing: false } : todo
  )),

  toggle: (state, id) => state.map(todo =>
    (todo.id === id ? { ...todo, completed: !todo.completed } : todo),
  ),

  toggleAll: (state, completed) => state.map(todo => ({
    ...todo,
    completed,
  })),

  clearCompleted: state => state.filter(todo => !todo.completed),
}
