import React from 'react'
import styles from './ToDoItem.module.css'
import Button from '../Button/Button'

export default class ToDoItem extends React.Component {
  constructor(){
    super()
    this.handleDelete = this.handleDelete.bind(this)
    this.handleComplete = this.handleComplete.bind(this)
  }

  handleDelete(){
    this.props.handleDelete(this.props.todo.id)
  }

  handleComplete(){
    this.props.handleComplete(this.props.todo.id)
  }

  render() {
    return (
        <div className={styles.todoItem}>
            <span onClick={this.handleComplete} className={`${this.props.todo.completed ? styles.completed : ''}`}> { this.props.todo.task } </span>
            <button onClick={this.handleDelete}> Delete </button>
        </div>
    )   
  }
}
