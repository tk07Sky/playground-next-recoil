import { ChangeEvent, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../../store/todo'

const TodoInput = () => {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  const addTodo = () => {
    if (!inputValue) return
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        title: inputValue,
      },
    ])
    setInputValue('')
  }
  return (
    <div>
      <input type="text" value={inputValue} onChange={onChangeInput} />
      <button onClick={addTodo}>add</button>
    </div>
  )
}

let id = 0
function getId() {
  return id++
}

export default TodoInput
