import React from 'react'
import GithubBadge from './GithubBadge'
import style from './Layout.less'

const Layout = ({ children }) => {
  const child = React.Children.only(children)
  return (
    <div className={style.app}>
      <GithubBadge />
      <header className={style.header}>
        <h1>todos</h1>
      </header>
      <section className={style.main}>{child}</section>
      <footer className={style.footer}>
        <p>Double-click to edit a todo</p>
        <p>Created by <a href="https://github.com/mickeyjsx/mickey" target="_blank" rel="noopener noreferrer">Mickey</a></p>
        <p>See <a href="http://todomvc.com" target="_blank" rel="noopener noreferrer">TodoMVC</a></p>
      </footer>
    </div>
  )
}

export default Layout
