import './CreateTodoButton.css'
import { ReactComponent as Plus } from './../../img/plus_icon.svg'

function CreateTodoButton(){
    return(
        <>
            <figure className='Save-button' id='modal'>
                <Plus alt='plus' className='plus_Icon' />
            </figure>
            
        </>
    )
}

export { CreateTodoButton }