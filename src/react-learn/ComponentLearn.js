// 1. 导入包
import React from 'react'


// -------------------------------------------------
// 第一种创建组件的方式
// 在构造函数中, 使用 props 形参, 接受外界传递过来的数据
function Hello(props) {
    // 如果 在一个组件中 return 一个null. 则表示此组件是空的, 什么都不会渲染
    // return null
    // 在组件中, 必须返回一个 合法的JSX虚拟DOM元素
    return <div>这是Hello组件:{props.name},{props.age},{props.hobby}</div>

    // 结论: 不论是 Vue 还是 React, 组件中的 props 永远都是只读的; 不能被重新赋值;
}

export default Hello;