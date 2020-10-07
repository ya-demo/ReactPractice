import React, { useState, useEffect, useRef } from 'react';


const TodoInput = ({addItem}) => {
    const ref = useRef()
    const [text, setText] = useState('')

    useEffect(()=>{
        ref.current.focus();
    },[])

    const onChangeText = e => {
        setText(e.target.value)
    }
    const onSubmit = e =>{
        e.preventDefault();
        addItem(text);
        setText('');
    }
    
    return (
        <form onSubmit={onSubmit}>
            <input ref={ref} type='text' value={text} onChange={onChangeText}></input>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default TodoInput;