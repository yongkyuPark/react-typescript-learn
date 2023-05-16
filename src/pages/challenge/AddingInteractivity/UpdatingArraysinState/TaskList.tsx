import React, { useState } from 'react';

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

interface TaskProps {
  todo: Todo;
  onChange: (updatedTodo: Todo) => void;
  onDelete: (todoId: number) => void;
}

interface TaskListProps {
  todos: Todo[];
  onChangeTodo: (updatedTodo: Todo) => void;
  onDeleteTodo: (todoId: number) => void;
}

const Task: React.FC<TaskProps> = ({ todo, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;

  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({
            ...todo,
            done: e.target.checked,
          });
        }}
      />
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </label>
  );
};

const TaskList: React.FC<TaskListProps> = ({ todos, onChangeTodo, onDeleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
