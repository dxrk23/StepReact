import React from 'react'
import styles from './Input.module.css'

export default class Input extends React.Component {
  constructor(){
    super()
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e){
    this.props.handler(e.target.value)
  }

  render() {
    return (
      <input 
        className={styles.input} 
        placeholder={this.props.placeholder}
        onChange={this.handleInput} 
      />
    )
  }
}
