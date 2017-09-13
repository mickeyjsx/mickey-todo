import React from 'react'
import style from './Header.less'

export default class Header extends React.Component {
  componentDidMount() {
    this.input.focus()
  }

  handleNewTodoKeyDown = (e) => {
    if (e.keyCode !== 13) {
      return
    }

    e.preventDefault()

    const val = this.input.value.trim()
    if (val) {
      this.props.add(val)
      this.input.value = ''
    }
  }

  toggleAll = (e) => {
    const checked = e.target.checked
    this.props.toggleAll(checked)
  }

  render() {
    return (
      <header className={style.header}>
        <input
          type="text"
          placeholder="What needs to be done?"
          ref={(elem) => { this.input = elem }}
          onKeyDown={this.handleNewTodoKeyDown}
        />
        {
          this.props.totalCount > 0 && <input
            type="checkbox"
            onChange={this.toggleAll}
            checked={this.props.activeCount === 0}
          />
        }
      </header>
    )
  }
}

