import React from "react";
function TodoCounter({total, completed}){

    const [state, useState] = React.useState('')
    return (
        <>
            <h2>Has completado {completed} de {total} tareas</h2>
        </>
    )
}

export { TodoCounter };