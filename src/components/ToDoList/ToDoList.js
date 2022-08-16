import React from 'react'
import Header from '../Header/Header'
import Separator from '../Separator/Separator'
import ToDoItem from '../ToDoItem/ToDoItem'
import Button from '../Button/Button'
import Input from '../Input/Input'


import styles from './ToDoList.module.css'
import data from '../../todos.json'

export default class ToDoList extends React.Component {
  constructor(props){
    super(props)
    this.tempToDo = ''
    this.addNewToDo = this.addNewToDo.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleComplete = this.handleComplete.bind(this)


    this.state = {
      todos: data.todos
    }
  }

  handleInput(data){
    this.tempToDo = data;
    console.log(this.tempToDo)
  }

  handleDelete(id) {
    this.setState(
      {
        todos: this.state.todos.filter((item) => {
          return item.id !== id
        })
      }
    )
  }

  handleComplete(id){
    this.setState({
      todos: this.state.todos.map((item) => {
        return id === item.id ? {...item, completed: !item.completed} : item
      })
    })
  }

  addNewToDo(){
    const newToDo = {
      id: this.state.todos.length + 1,
      task : this.tempToDo,
      completed : false,
    }

    this.setState({
      todos: [
        ...this.state.todos,
        newToDo
      ]
    })
  }
  
  render() {
    return (
      <main className={styles.todoListMain}>
        <Header label="My TODO List" />
        <Separator />

        {
          this.state.todos.map((todo) => {
            return <ToDoItem todo={todo} key={todo.id} handleDelete={this.handleDelete} handleComplete={this.handleComplete} />
          })
        }

        <Separator />
        <Button 
          label="Add ToDo" 
          className={styles.input} 
          handler={this.addNewToDo}
        />
        <Input 
          placeholder="Type ToDo"
          handler={this.handleInput}  
        />
      </main>
    )
  }
}
