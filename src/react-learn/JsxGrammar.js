import React, { Component } from 'react';
import ReactDOM from 'react-dom';


// 创建虚拟DOM
// 虚拟DOM: 用JS对象的形式, 来表示DOM和DOM之间的嵌套关系
// const mydiv = React.createElement('div', { id: 'mydiv', titile: 'div aaa' }, "这是一个div元素")

// 注意: JS文件中, 默认不能写 类似于HTML的标记, 否则打包会失败;
// 可以使用babel来转换, 这些JS中的标签
// 注意: 这种在JS中, 混合写入类似于HTML的语法, 叫做JSX语法; 符合XML规范的JS;
// 注意: JSX语法的本质, 还是在运行的时候, 被转换成了React.createElement形式来执行的;
// const mydiv = <div id = "mydiv" title = "div aaa">这是一个div元素</div>

// ReactDOM.render(
//   <React.StrictMode>
//     <TodoList />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// 调用render函数渲染
// ReactDOM.render(
//   mydiv,
//   document.getElementById('root')
// );
class JsxGrammar extends Component {


    // 调用render函数渲染 JSX XML比HTML 严格!
    // 什么情况下使用{}?
    // 当需要在JSX控制的区域内, 写JS表达式, 则需要把JS代码写到{}中
    render() {
        let a = 10
        let str = "Hello React"
        let boo = false
        let title = '000'
        const h1 = <h1>hhhhhhhh</h1>
        // 数组中放了两个<hX>标签, 把它想象成对象
        // const arr = [
        //   <h2>This is h2</h2>,
        //   <h3>This is h3</h3>
        // ]
        const arrStr = ['Jack', 'Lucy', 'Bob', 'Mike']

        // 定义一个空数组, 将来用来存放 名称 标签 [方案一]
        const nameArr = []
        // 注意: React中, 需要把key添加给 被 forEach 或 map 或 for 循环直接控制的元素, 加到最外层dom
        arrStr.forEach(item => {
            const temp = <h5 key={item}>{item}</h5>
            nameArr.push(temp)
        })

        // 数组的map方法 map中一定要写
        const result = arrStr.map(item => {
            return item + '~~'
        })

        console.log(result)
        return (
            <div>
                {/* 渲染数字 */}
                {a + 2}

                <hr />
                {/* 渲染字符串 */}
                {str}

                <hr />
                {/* 渲染布尔值 */}
                {boo ? 'true' : 'false'}

                <hr />
                {/* 为属性绑定值 */}
                <p title={title}>p标签</p>

                <hr />
                {/* 渲染JSX元素 */}
                {h1}

                <hr />
                {/* 渲染JSX元素数组 */}
                {/* {arr}
        {arr[1]} */}


                <hr />
                {/* 将普通串字符数组转为jsx数组并渲染到页面上[两种方案] */}
                {nameArr}

                {/* {arrStr.map(item => {
        return <h3>{item}</h3>
        })} */}
                {/* 简写形式 */}
                {
                    arrStr.map(item => <h3 key={item}>{item}</h3>)
                }
                {result}


            </div>
        )
    }
}
export default JsxGrammar;
