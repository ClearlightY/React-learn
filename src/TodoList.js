import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './index.css';
import { blue, purple } from 'color-name';

// 定义一个组件
class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [
        // 'learn react',
        // 'learn english'
      ],
      inputValue: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);


  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleItemClick(index) {
    console.log(index);
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
      // list: list
    })
  }
  handleDelete(index) {
    console.log(index);
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
      // list: list
    })
  }
  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        {/* return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>; */ }
        return (
          <TodoItem
            delete={this.handleDelete}
            key={index}
            content={item}
            index={index}
          />
        );
      })
    );
  }

  // 父组件通过属性的形式向子组件传递参数
  // 子组件通过props接受父组件传递过来的参数
  // jsx语法
  render() {
    return (
      <div>
        <div className='div_color'>
          <input value={this.state.inputValue} onChange={this.handleInputChange} />
          <button onClick={this.handleBtnClick} style={{ background: 'red', color: '#fff' }}>add</button>
        </div>
        <ul>
          {this.getTodoItems()}
        </ul>
      </div>);
  }
}


export default TodoList;
