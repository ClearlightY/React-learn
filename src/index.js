import React from 'react';
import ReactDOM from 'react-dom';

// App组件, 大写字母开头
import TodoList from './TodoList';
import JsxGrammar from './react-learn/JsxGrammar';
import Hello from './react-learn/ComponentLearn';
import './react-learn/ClassConstructor.js'

// 创建虚拟DOM
// 虚拟DOM: 用JS对象的形式, 来表示DOM和DOM之间的嵌套关系
// const mydiv = React.createElement('div', { id: 'mydiv', titile: 'div aaa' }, "这是一个div元素")

// 注意: JS文件中, 默认不能写 类似于HTML的标记, 否则打包会失败;
// 可以使用babel来转换, 这些JS中的标签
// 注意: 这种在JS中, 混合写入类似于HTML的语法, 叫做JSX语法; 符合XML规范的JS;
// 注意: JSX语法的本质, 还是在运行的时候, 被转换成了React.createElement形式来执行的;
// const mydiv = <div id = "mydiv" title = "div aaa">这是一个div元素</div>

// 调用render函数渲染
// ReactDOM.render(
//   mydiv,
//   document.getElementById('root')
// );



const dog = {
  name: 'LuLa',
  age: '5',
  hobby: 'play'
}
// -------------------------------------------------



// 调用Jsx语法练习
ReactDOM.render(
  <React.StrictMode>
    {/* JSX基础语法的练习 */}
    {/* <JsxGrammar /> */}

    {/* 备忘录的增加与删除 */}
    {/* <TodoList /> */}

    {/* 直接把组件的名称, 以标签的形式, 丢到页面上即可 */}
    {/* 使用组件, 并为组件传递 props 数据 */}
    {/* <Hello name={dog.name} age={dog.age} hobby={dog.hobby}></Hello> */}
    {/* {<Hello {...dog}></Hello>} */}

    {/* class形式创建的组件 */}
    {/* { <ClassConstructor />} */}

  </React.StrictMode>,
  document.getElementById('root')
);


// ES6的展开运算符
// var o1 = {
//   age: 18,
//   address: 'Beijing',
//   phone: '8888'
// }

// var o2 = {
//   name: 'jack',
//   ...o1
// }

// console.log(o2)