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
      text: 'Vue Router'
    },
    {
      id: 2,
      text: '學會Node.js，API不求人！讓你自在地遊走在前、後端程式語言與資訊安全'
    },
  ])

  // 【 1-input框新增功能 】
  // const handleAddNew = (e) => {
  //   if (e.key === 'Enter') {
  //     const newTodoItem = {
  //       id: +new Date(),
  //       text: e.target.value
  //     }

  //     const newTodos = [newTodoItem, ...todos]
  //     setTodos(newTodos)
  //     setTodoInput('')
  //   }
  // }
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
      />
      </div>
    </>
  )
}

export default TodoApp
