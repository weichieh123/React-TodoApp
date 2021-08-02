import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
  const {
    todos,
    handleDelete,
  } = props

  return (
    <>
      <div className="todoItemWrap">
        {todos.map((todoItem, i) => {
          return (
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              handleDelete={handleDelete}
            />
          )
        })}
      </div>
    </>
  )
}

export default TodoList
