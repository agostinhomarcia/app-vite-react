import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Container, ContainerList, Input, Button, ImageRocket, ImageTrash, ListItem, H3} from './styles'

import Rocket from './img/rocket.svg'
import Trash from './img/trash.svg'
import Check from './img/check.svg'


function App() {
  const [myList, setMyList] = useState([])
  const [myTask, setMyTask] = useState('')
  
    

  function inputChanged(event) {
    
    setMyTask(event.target.value)
    
    
  }
  function clickedButton() {
    if(myTask){
      setMyList([... myList, {id: uuidv4(), task: myTask, finished: false}])
    }
  
  }

  function finishTask(id){
    const newList = myList.map(item => (
      item.id === id ? {...item, finished: !item.finished} : item
    ))

    setMyList(newList)

  }
  function deleteItem(id){
    const newList = myList.filter(item => item.id !== id)


    setMyList(newList)
  }

  return (
    <>
    
      <Container >
        
        <ContainerList>
        <Input type="text" onChange={inputChanged} placeholder="O que tenho que fazer" />
        <Button onClick={clickedButton}>Adicionar</Button>

        <ul>
          {
            myList.length > 0 ? (

            myList.map(item => (
              <ListItem isFinished ={item.finished} key={item.id} >
              <ImageRocket src={Rocket} onClick={()=> finishTask(item.id)} />
              <li >{item.task}</li>
              <ImageTrash src={Trash} onClick={()=> deleteItem(item.id)}/>
            </ListItem>
            ))
            ) : (
                <H3> <img src={Check}/> Não há itens na Lista</H3>
            )}
        </ul>
        </ContainerList>
      </Container>
    </>
  )
}

export default App
