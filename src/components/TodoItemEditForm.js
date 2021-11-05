import React, { useState } from 'react'

function TodoItemEditForm(props) {
  const { handleEdited, todoItem, handleEditedSave } = props

  // 用傳入props中的todoItem.text當初始化值
  const [input, setInput] = useState(todoItem.text)

  return (
    <>
      <div className="todoItem d-flex justify-content-between align-items-center ">
        <div className="text-truncate">
          <input
            className="form-control "
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
            }}
            maxLength='20'
            autoFocus
          />
        </div>
        <div className="d-flex">
          <button
            className="saveBtn"
            onClick={() => {
              // 兩個傳入參數，第一個是要修改的項目id，第二個是修改的新文字字串
              handleEditedSave(todoItem.id, input)
            }}
          >
            儲存
          </button>
          <button
            className="cancelBtn"
            onClick={() => {
              // 不做任何事情，只是切換todoItem.edited的值，退出編輯模式
              handleEdited(todoItem.id)
            }}
          >
            取消
          </button>
        </div>
      </div>
    </>
  )
}

export default TodoItemEditForm
