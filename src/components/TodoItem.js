import React from 'react'

function TodoItem(props) {
  const {
    todoItem,
    handleDelete,
  } = props

  return (
    <>
      <div className="todoItem d-flex justify-content-between align-items-center ">
        <div className="text-truncate">{todoItem.text}</div>
        <button
          className="delBtn"
          onClick={() => {
            handleDelete(todoItem.id)
          }}
        >
          X
        </button>
      </div>
    </>
  )
}

export default TodoItem
