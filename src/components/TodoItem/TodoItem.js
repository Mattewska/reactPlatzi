import './TodoItem.css'
import './../../img/check_icon.svg'
import { ReactComponent as Check } from './../../img/check_icon.svg'
import { ReactComponent as Close } from './../../img/close_icon.svg'

function TodoItem(props){
    return(
        <>
            <ul className="item-window">
                <figure>
                    <Check alt='plus' className={`checkItem ${props.completed && 'checkItem-Active'}`} />
                </figure>
                <li className={`${props.completed && 'todoCompleted'}`}>{props.tarea}</li>
                <Close alt='close' className='close-item'/>
            </ul>
        </>
    )
}

export { TodoItem }