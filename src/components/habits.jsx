import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      { name: "Reading", count: 0 },
      { name: "Running", count: 0 },
      { name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {};
  handleDecrement = (habit) => {};
  handleDelete = (habit) => {};
  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            habit={habit}
            key={habit.name}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
