import './App.css';
import {useState} from "react";
import ToDoForm from "./components/ToDoForm";
import ListItem from "./components/ListItem";

function App() {
    const [toDoList, setToDoList] = useState([]);

    const addNewItem = (userInput) => {
        if(userInput) {
            const newTask = {
                id : Math.random().toString(36).substr(2,9),
                task : userInput,
                complete : false
            }
            setToDoList([...toDoList, newTask])
        }
    }

    const handleToggle = (id) => {
        setToDoList([
            ...toDoList.map((todo) => todo.id === id ? {...todo, complete : !todo.complete} : {...todo})
        ])
    }

  return (
      <div>
        <ToDoForm addNewItem={addNewItem}/>
          <p>task : {toDoList.length}</p>
          {toDoList.map((todo) => {
              return (
                  <ListItem
                      todo={todo}
                      key={todo.id}
                      handleToggle={handleToggle}
                  />
              )
          })

          }
      </div>

  );
}

export default App;
