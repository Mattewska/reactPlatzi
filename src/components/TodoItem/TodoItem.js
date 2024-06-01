import React from 'react'
import './TodoItem.css'
import './../../img/check_icon.svg'
import { ReactComponent as Check } from './../../img/check_icon.svg'
import { ReactComponent as Close } from './../../img/close_icon.svg'

function TodoItem({todo, completed}){
    return(
        <>
            <ul className="item-window">
                <figure>
                    <Check alt='plus' className={`checkItem ${completed && 'checkItem-Active'}`} />
                </figure>
                <li className={`${completed && 'todoCompleted'}`}>{todo}</li>
                <Close alt='close' className='close-item'/>
            </ul>
        </>
    )
}

export { TodoItem }