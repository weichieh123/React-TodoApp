import React from 'react'
import TodoItem from './TodoItem'
import TodoItemEditForm from './TodoItemEditForm'

function TodoList(props) {
  const {
    todos,
    handleDelete,
    handleCompleted,
    handleEdited,
    handleEditedSave,
  } = props

  const noItems = <div className="noItems">目前尚無定義工作事項！</div>

  return (
    <>
      <div className="todoItemWrap">
        {todos.length
          ? todos.map((todoItem, i) => {
              return todoItem.edited ? (
                <TodoItemEditForm
                  key={todoItem.id}
                  handleEdited={handleEdited}
                  todoItem={todoItem}
                  handleEditedSave={handleEditedSave}
                />
              ) : (
                <TodoItem
                  key={todoItem.id}
                  todoItem={todoItem}
                  handleDelete={handleDelete}
                  handleEdited={handleEdited}
                  handleCompleted={handleCompleted}
                />
              )
            })
          : ''}
      </div>
      {todos.length ? '' : noItems}
    </>
  )
}

export default TodoList
