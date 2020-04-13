import React, { Component } from 'react';

function rect(props) {

    const { ctx, fromX, fromY, toX, toY, color } = props;
    var headlen = 10; //自定义箭头线的长度
    var theta = 30; //自定义箭头线与直线的夹角，个人觉得45°刚刚好
    var arrowX, arrowY; //箭头线终点坐标
    // 计算各角度和对应的箭头终点坐标
    var angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI;
    var angle1 = (angle + theta) * Math.PI / 180;
    var angle2 = (angle - theta) * Math.PI / 180;
    var topX = headlen * Math.cos(angle1);
    var topY = headlen * Math.sin(angle1);
    var botX = headlen * Math.cos(angle2);
    var botY = headlen * Math.sin(angle2);
    ctx.beginPath();
    //画直线
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);

    arrowX = toX + topX;
    arrowY = toY + topY;
    //画上边箭头线
    ctx.moveTo(arrowX, arrowY);
    ctx.lineTo(toX, toY);

    arrowX = toX + botX;
    arrowY = toY + botY;
    //画下边箭头线
    ctx.lineTo(arrowX, arrowY);

    ctx.strokeStyle = color;
    ctx.stroke();
}
class linerow extends React.Component {
    componentDidMount() {
        this.updateCanvas();
    }
    componentDidUpdate() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        // draw children “components”
        rect({ ctx, fromX: 100, fromY: 150, toX: 200, toY: 200, color: "#000" });
    }
    render() {
        return (
            <canvas ref="canvas" width={300} height={300} />
        )
    }
}

export default linerow;