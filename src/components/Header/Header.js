import React from 'react'
import styles from './Header.module.css'

export default class Header extends React.Component {
  render() {
    return (
      <div className={styles.label}>
        <span> { this.props.label } </span>
      </div>
    )
  }
}
