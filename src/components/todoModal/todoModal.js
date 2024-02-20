import { TodoSearch } from './../TodoSearch/TodoSearch'
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton'; 
import './todoModal.css'

function TodoModal(){

    let modal = document.getElementById('modalWindow');
    console.log(modal)

    // function showModal(){
    //     modal.className = 'modal'
    // }

    return (
        <>
            <modal className={``} id='modalWindow'>
                <div>
                    <TodoSearch />
                    <button>Guardar</button>
                </div>
            </modal>
        </>
    )
}

export { TodoModal }