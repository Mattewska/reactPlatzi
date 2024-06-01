import './CreateTodoButton.css'
import { ReactComponent as Plus } from './../../img/plus_icon.svg'

function CreateTodoButton(){
    return(
        <>
            <figure className='Save-button' 
            onClick={(event)=> {
                console.log(`Clickeaste el boton modal`);
                console.log(event.target);
            }}>
                <Plus alt='plus' className='plus_Icon' /> 
            </figure>
            
        </>
    )
}

export { CreateTodoButton }