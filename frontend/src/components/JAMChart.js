import React, { useLayoutEffect, useRef } from 'react';
import JAMCol from './JAMCol';
import JAMLabel from './JAMLabel';
import JAMPanel from './JAMPanel';
import JAMRow from './JAMRow';

const JAMChart = ({ title = 'Title', caption = 'Name data', type = 'line', labels = [], data = [], color = 'purple', hintColor = '#E0E0E0', borderWidth = 1, fontSize = '60%', width = '100%', height = '100%', numberOfLines = 10, ...props }) => {

    const xPadding = 80 / (labels.length - 1);
    const max = (Math.ceil((Math.max(...data) / 10)) * 10);
    const yPadding = 80 / max;
    const yLinePadding = 80 / numberOfLines;

    const line = [];
    const bars = [];
    const grid = [];
    const points = [];
    const labelsText = [];
    const valuesText = [];
    console.log(title, xPadding, yPadding);

    // to sa linie poziome i podpisy do osi x
    for (var i = 0; i < numberOfLines; i++) {
        grid.push(<line y1={80 - (yLinePadding * i) + '%'} x1='10%' y2={80 - (yLinePadding * i) + '%'} x2='90%' stroke={hintColor} />);
        valuesText.push(<tspan x='7%' dx='0' y={(yLinePadding * i) + '%'} dy='9%' style={{ fontSize: fontSize }}>{max - ((max / numberOfLines) * (i + 1))}</tspan>);
    }
    grid.push(<line y1={'0%'} x1='10%' y2={'0%'} x2='90%' stroke={hintColor} />);

    // tu podpisy do osi y
    for (var i = 0; i < labels.length; i++) {
        if (type === 'line') {
            labelsText.push(<text y='85%' dx='10%' dy='0' x={(80 / (labels.length - 1) * i) + '%'} style={{ fontSize: fontSize, writingMode: 'tb' }}>{labels[i]}</text>);
        } else {
            labelsText.push(<text y='85%' dx='12%' dy='0' x={(76 / (labels.length - 1) * i) + '%'} style={{ fontSize: fontSize, writingMode: 'tb' }}>{labels[i]}</text>);
        }
    }

    if (data.length !== 0) {
        if (type === 'line') {
            var previous = { x: '10%', y: (80 - (yPadding * data[0])) + '%' };
            points.push(<circle cx={previous.x} cy={previous.y} r="0.5%" stroke="black" stroke-width="0.5" fill="white"><title>{caption + ": " + data[0]}</title></circle>);
            grid.push(<line x1='10%' y1='0%' x2='10%' y2='80%' stroke={hintColor} />);
        } else {
            var previous = { x: xPadding + '%', y: (80 - (yPadding * data[0])) + '%' };
            bars.push(<line x1='15%' y1={previous.y} x2='15%' y2='80%' stroke={color} stroke-width='5%'><title>{caption + ": " + data[0]}</title></line>);
    
        }
    }
    for (var i = 1; i < data.length; i++) {
        if (type === 'line') {
            var current = { x: 10 + (xPadding * i) + '%', y: (80 - (yPadding * data[i])) + '%' };
            points.push(<circle cx={current.x} cy={current.y} r="0.5%" stroke="black" stroke-width="0.5" fill="white"><title>{caption + ": " + data[i]}</title></circle>);
            line.push(<line x1={previous.x} y1={previous.y} x2={current.x} y2={current.y} stroke={color} />);
            grid.push(<line x1={10 + (xPadding * i) + '%'} y1='0%' x2={10 + (xPadding * i) + '%'} y2='80%' stroke={hintColor} />);
        } else {
            var current = { x: (15 + (xPadding -1.2 ) * i) + '%', y: (80 - (yPadding * data[i])) + '%' };
            bars.push(<line x1={current.x} y1={current.y} x2={current.x} y2='80%' stroke={color} stroke-width='5%'><title>{caption + ": " + data[i]}</title></line>);
        }
        previous = current;
    }


    return (
        <JAMPanel width={width} height={height}  >
            <JAMLabel caption={title} bold />
            <svg width='100%' height={height}>
                <text>
                    {valuesText}
                </text>
                {grid}
                {line}
                {bars}
                {points}
                {labelsText}
            </svg>
        </JAMPanel>
    );
}

export default JAMChart;