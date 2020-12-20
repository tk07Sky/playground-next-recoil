import { useRecoilValue } from 'recoil'
import { todoListState } from '../../store/todo'

const TodoList = () => {
  const todoList = useRecoilValue(todoListState)
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

export default TodoList
