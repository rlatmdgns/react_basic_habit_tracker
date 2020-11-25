import React, { PureComponent } from 'react'

export default class Habit extends PureComponent {
  
  handleIncrement = (event) => {
    this.props.onIncrement(this.props.habit);
  }
  handleDecrement = (event) => {
    this.props.onDecrement(this.props.habit);
  }

  handleDelete = () =>{
    this.props.onDelete(this.props.habit)
  }
  render() {
    
    // console.log(this.props.habit.name);
    // const habitName = this.props.habit.name;
    const {name, count} = this.props.habit
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete" onClick={this.handleDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    )
  }
}
