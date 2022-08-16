import React from 'react'
import styles from './Button.module.css'

export default class Button extends React.Component {
  render() {
    return (
      <div className={styles.button} onClick={this.props.handler}>
        { this.props.label }
      </div>
    )
  }
}
