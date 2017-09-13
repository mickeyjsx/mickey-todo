import React from 'react'
import { NavLink } from 'mickey'
import style from './Footer.less'

const Footer = ({ activeCount, completedCount, clearCompleted }) => (
  <footer className={style.footer}>
    <span className="todo-count">
      <strong>{activeCount}</strong>
      <span>{activeCount === 1 ? ' item' : ' items'}</span>
      <span> left</span>
    </span>
    <ul className="filters">
      <li><NavLink to="/" activeClassName="selected">All</NavLink></li>
      <li><NavLink to="/active" activeClassName="selected">Active</NavLink></li>
      <li><NavLink to="/completed" activeClassName="selected">Completed</NavLink></li>
    </ul>
    {
      completedCount > 0 && <button
        className="clear-completed"
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    }
  </footer>
)

export default Footer
