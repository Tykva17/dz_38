
function ListItem({todo , handleToggle}){
    return (
        <div key={todo.id} className={todo.complete ? 'list_item strike' : 'list_item'} onClick={() => handleToggle(todo.id)}>
            <div className={todo.complete ? 'item-text strike' : 'item-text'}>
                {todo.task}
            </div>
        </div>
    )
}

export default ListItem;