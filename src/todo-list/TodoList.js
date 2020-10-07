import React, { useState } from 'react';
import TodoInput from './TodoInput';

const TodoList = () => {
    
    const [items, setItems] = useState([])
    const addItem = (text) => {
        setItems([...items, { id: Date.now(), text }])
    }
    const removeItem = (id) =>{
        setItems(items.filter(item => (item.id !== id)))
    }
    return (
        <div>
            <TodoInput addItem={addItem} />
            <ul>
                {items.map(item => (
                    <li key={item.id} onClick={()=>removeItem(item.id)}>{item.text}</li>
                    // <TodoItem key={item.id}>{item.text}</TodoItem>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;