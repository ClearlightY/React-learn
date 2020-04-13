import React from 'react';
import ReactDOM from 'react-dom';

// App组件, 大写字母开头
import TodoList from './TodoList';
import JsxGrammar from './react-learn/JsxGrammar';
import Hello from './react-learn/ComponentLearn';
import './react-learn/ClassConstructor.js';
import BasicTest from './react-learn/BasicTest'

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

    { <BasicTest />}
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

// “reusable component”
// function rect(props) {

//   const { ctx, fromX, fromY, toX, toY, color } = props;
//   var headlen = 10; //自定义箭头线的长度
//   var theta = 30; //自定义箭头线与直线的夹角，个人觉得45°刚刚好
//   var arrowX, arrowY; //箭头线终点坐标
//   // 计算各角度和对应的箭头终点坐标
//   var angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI;
//   var angle1 = (angle + theta) * Math.PI / 180;
//   var angle2 = (angle - theta) * Math.PI / 180;
//   var topX = headlen * Math.cos(angle1);
//   var topY = headlen * Math.sin(angle1);
//   var botX = headlen * Math.cos(angle2);
//   var botY = headlen * Math.sin(angle2);
//   ctx.beginPath();
//   //画直线
//   ctx.moveTo(fromX, fromY);
//   ctx.lineTo(toX, toY);

//   arrowX = toX + topX;
//   arrowY = toY + topY;
//   //画上边箭头线
//   ctx.moveTo(arrowX, arrowY);
//   ctx.lineTo(toX, toY);

//   arrowX = toX + botX;
//   arrowY = toY + botY;
//   //画下边箭头线
//   ctx.lineTo(arrowX, arrowY);

//   ctx.strokeStyle = color;
//   ctx.stroke();
// }
// class CanvasComponent extends React.Component {
//   componentDidMount() {
//     this.updateCanvas();
//   }
//   componentDidUpdate() {
//     this.updateCanvas();
//   }
//   updateCanvas() {
//     const ctx = this.refs.canvas.getContext('2d');
//     rect({ ctx, fromX: 0, fromY: 0, toX: 200, toY: 200, color: "#000" });
//   }
//   render() {
//     return (
//       <canvas ref="canvas" width={300} height={300} />
//     );
//   }
// }
// ReactDOM.render(<CanvasComponent />, document.getElementById('root')); 