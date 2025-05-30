import React, { useState } from 'react';
import './list.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

function TodoApp() {
  const [todoItems, setTodoItems] = useState([]);
  const [inputText, setInputText] = useState('');

  const addTodoItem = () => {
    if (inputText.trim()) {
      setTodoItems([...todoItems, { text: inputText, done: false }]);
      setInputText('');
    }
  };

  const removeTodoItem = (indexToRemove) => {
    const updatedItems = todoItems.filter((_, i) => i !== indexToRemove);
    setTodoItems(updatedItems);
  };

  const toggleDoneStatus = (indexToToggle) => {
    const updatedItems = todoItems.map((item, i) =>
      i === indexToToggle ? { ...item, done: !item.done } : item
    );
    setTodoItems(updatedItems);
  };

  return (
    <div className="todo-container">
      <div className="todo-box">
        <h1>TO DO LIST</h1>
        <div className="todo-input-area">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter a task"
          />
          <button onClick={addTodoItem}>Add Task</button>
        </div>

        <div className="todo-list">
          {todoItems.map((item, index) => (
            <div
              className="todo-item"
              key={index}
              onMouseEnter={(e) => e.currentTarget.classList.add('hover')}
              onMouseLeave={(e) => e.currentTarget.classList.remove('hover')}
            >
              <input
                type="checkbox"
                checked={item.done}
                onChange={() => toggleDoneStatus(index)}
              />
              <span className={item.done ? 'todo-done' : ''}>{item.text}</span>
              <button
                className="todo-delete-btn"
                onClick={() => removeTodoItem(index)}
              >
                <FontAwesomeIcon icon={faTrashAlt} className="trash-icon" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
