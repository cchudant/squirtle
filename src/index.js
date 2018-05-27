import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: ['learn React!']
    }
  }

  handleAdd(todo) {
    const { todos } = this.state
    todos.push(todo)
    this.setState({ todos })
  }

  handleDelete(i) {
    const { todos } = this.state
    todos.splice(i, 1)
    this.setState({ todos })
  }

  render() {
    return (
      <div>
        <p>My TodoList</p>
        <TodoList todos={this.state.todos} onDelete={i => this.handleDelete(i)} />
        <TodoInput onAdd={todo => this.handleAdd(todo)} />
      </div>
    )
  }
}

function TodoList(props) {
  const todos = props.todos.map((todo, i) => (
    <li key={todo} className="todoItem" onClick={() => props.onDelete(i)}>{todo}</li>
  ))

  return <ol>{todos}</ol>
}

class TodoInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    this.props.onAdd(this.state.value)
    this.setState({ value: '' })
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <span>Add new: </span>
        <input
          value={this.state.value}
          onChange={event => this.handleChange(event)}
        />
        <input type="submit" value="Add" />
      </form>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
