import React, { useState } from 'react'
import TodoAddForm from './TodoAddForm'
import TodoList from './TodoList'

function TodoApp() {
  const [todoInput, setTodoInput] = useState('')

  // 【 0-待辨事項每個的物件值】
  // todo = {id:number, text:string}
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Vue Router',
      completed: true,
      edited: false,
    },
    {
      id: 2,
      text: '學會Node.js，API不求人！讓你自在地遊走在前、後端程式語言與資訊安全',
      completed: false,
      edited: false,
    },
  ])

  // 【 1-input框新增功能 】
  const handleAddBtn = (e) => {
    e.preventDefault()
    console.log('todoInput',todoInput)
    console.log('todos len',todos.length)
      const newTodoItem = {
        id: +new Date(),
        text: todoInput
      }

      const newTodos = [newTodoItem, ...todos]
      setTodos(newTodos)
      setTodoInput('')
  }


  // 【 2-刪除功能 】
  const handleDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id)
    setTodos(newTodos)
  }

  // 【 3-勾選完成功能 】
  const handleCompleted = (id) => {
    const newTodos = [...todos]

    const index = newTodos.findIndex(
      (item) => item.id === id
    )

    if (index !== -1) {
      newTodos[index].completed = !newTodos[index].completed
      setTodos(newTodos)
    }
  }
  // 【 4-1-編輯功能 】
  // 先由目前的todos拷貝出一個新的陣列
  // 利用id值找到對應的todo項目的索引值，用findIndex的作法
  // 如果有找到就切換edited的true/false
  // 設定回狀態值
  const handleEdited = (id) => {

    const newTodos = [...todos]
    const index = newTodos.findIndex(
      (item) => item.id === id
    )

    if (index !== -1) {
      newTodos[index].edited = !newTodos[index].edited
      setTodos(newTodos)
    }
  }

  // 【 4-2-儲存功能 】
  // 先由目前的todos拷貝出一個新的陣列
  // 利用id值找到對應的todo項目的索引值，用findIndex的作法
  // 如果有找到的話，把該項目的文字屬性改成新的
  // 設定回原本的todos
  // 儲存完之後，切換到原本的清單頁面狀態
  const handleEditedSave = (id, text) => {
    const newTodos = [...todos]
    const index = newTodos.findIndex(
      (item) => item.id === id
    )

    if (index !== -1) {
      newTodos[index].text = text
      setTodos(newTodos)
      handleEdited(id)
    }
  }

 

  return (
    <>
    <h1 className="my-3">今日工作清單</h1>
      {/* 可控的表單元素，value對應到狀態，onChange對應到設定狀態 */}
      <div className="wrap mx-auto">
      <TodoAddForm
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        // handleAddNew={handleAddNew}
        handleAddBtn={handleAddBtn}
      />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleCompleted={handleCompleted}
        handleEdited={handleEdited}
        handleEditedSave={handleEditedSave}
      />
      </div>
    </>
  )
}

export default TodoApp
