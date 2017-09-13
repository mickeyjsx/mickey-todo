import React from 'react'
import { connect, injectActions } from 'mickey'
import Main from '../components/Main'
import Header from '../components/Header'
import Footer from '../components/Footer'

@injectActions
@connect(({ todos }) => {
  const totalCount = todos.length
  const activeCount = todos.reduce(
    (memo, todo) => (todo.completed ? memo : memo + 1),
    0,
  )
  const completedCount = totalCount - activeCount
  return { todos: todos.filter(todo => todo.completed), totalCount, activeCount, completedCount }
})
export default class Completed extends React.Component {
  render() {
    const { actions, todos, totalCount, activeCount, completedCount } = this.props
    return (
      <div>
        <Header
          totalCount={totalCount}
          activeCount={activeCount}
          add={actions.todos.add}
          toggleAll={actions.todos.toggleAll}
        />
        {
          todos.length > 0 && <Main
            todos={todos}
            remove={actions.todos.remove}
            update={actions.todos.update}
            toggle={actions.todos.toggle}
            startEdit={actions.todos.startEdit}
            endEdit={actions.todos.endEdit}
          />
        }
        {
          totalCount > 0 && <Footer
            activeCount={activeCount}
            completedCount={completedCount}
            clearCompleted={actions.todos.clearCompleted}
          />
        }
      </div>
    )
  }
}
