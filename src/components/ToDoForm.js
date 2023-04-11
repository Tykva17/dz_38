import { useState } from "react";


function ToDoForm({addNewItem}){
    const [inputValue, setInputValue] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        addNewItem(inputValue)
        setInputValue('');
    }
    const handleChange = (e) => {
        setInputValue(e.currentTarget.value)
    }

    return (

        <form onSubmit={handleSubmit} className='enter_item_box'>
            <input type="text"
                    value={inputValue}
                   onChange={handleChange}
            />
            <button>save</button>
        </form>

    )
}

export default ToDoForm;