import React from 'react'
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue, todo, setTodo}){

    return (
        <>
            <input placeholder="cortar cebolla" className='input' value={searchValue}
            onChange={
                (event) => {
                    setSearchValue(event.target.value);
                }
            }
            ></input>
        </>
    )
}

export { TodoSearch }