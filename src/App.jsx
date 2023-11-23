/* eslint-disable react/jsx-key */
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import {
  Container,
  ToDoList,
  Input,
  Button,
  ListItem,
  Trash,
  Check,
  Mensage
} from './styles.js'


//SINTAXE JSX - JavaScript com HTML.
//componente inteiro - Sempre vai ter duas partes. 
//EX:

//Código JavaScrip na primeira parte.
function App() {
  const [list, setList] = useState([])
  const [inputTask, setInputTask] = useState('')


  function changeInInput(event) {
    setInputTask(event.target.value)
  }

  function addTask() {
    if (inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }])
    }
  }

  function taskCompleted(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function deleteTask(id) {
    const newList = list.filter((item) => item.id !== id)

    setList(newList)
  }


  return ( // retorna código HTML, sempre retornar somente um Pai.
    <Container>
      <ToDoList>
        <Input className='input-to-task' onChange={changeInInput} placeholder="Tarefas diárias..."></Input>
        <Button onClick={addTask}>Adicionar</Button>

        <ul>
          {
            list.length > 0 ? (
              list.map((item) => (
                <ListItem isFinished={item.finished} key={item.id}>
                  <Check onClick={() => taskCompleted(item.id)} />
                  <li>{item.task}</li>
                  <Trash onClick={() => deleteTask(item.id)} />
                </ListItem>//fragment
              ))
            ) : (
              <Mensage>Não há intens na lista</Mensage>
            )}
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
