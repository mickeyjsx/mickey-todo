import React from 'react'
import style from './Main.less'

const Main = ({ todos, toggle, remove, update, startEdit, endEdit }) => (
  <div className={style.main} >
    <ul>
      {
        todos.map(item => (
          item.editing
            ? <li key={item.id} className="editing">
              <input
                type="text"
                key={item.id}
                defaultValue={item.text}
                autoFocus // eslint-disable-line
                onKeyDown={(e) => {
                  if (e.keyCode === 27) {
                    endEdit(item.id)
                  }

                  if (e.keyCode === 13) {
                    const text = e.target.value.trim()
                    if (text) {
                      update({ text, id: item.id })
                    } else {
                      remove(item.id)
                    }
                    endEdit(item.id)
                  }
                }}
                onBlur={(e) => {
                  const text = e.target.value.trim()
                  if (text) {
                    update({ text, id: item.id })
                  } else {
                    remove(item.id)
                  }
                  endEdit(item.id)
                }}
              />
            </li>
            : <li key={item.id} className={item.completed ? 'completed' : ''}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggle(item.id)}
              />
              <span onDoubleClick={() => startEdit(item.id)}>{item.text}</span>
              <button onClick={() => remove(item.id)} />
            </li>
        ))
      }
    </ul>
  </div>
)

export default Main
