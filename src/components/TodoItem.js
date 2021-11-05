import React from 'react'

function TodoItem(props) {
  const {
    todoItem,
    handleDelete,
    handleEdited,
    handleCompleted,
  } = props

  return (
    <>
      <div className="todoItem d-flex justify-content-between align-items-center ">
        <div className="text-truncate">{todoItem.text}</div>
        <div className="d-flex">
          <button
            className="editBtn mx-1"
            onClick={() => {
              handleEdited(todoItem.id)
            }}
          >
            Edit
          </button>
          <button
            className="delBtn"
            onClick={() => {
              handleDelete(todoItem.id)
            }}
          >
            X
          </button>

        </div>
      </div>
    </>
  )
}

export default TodoItem
