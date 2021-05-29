import React from 'react';
import JAMLabel from './JAMLabel';
import JAMPanel from './JAMPanel';

const JAMChart = ({ header = 'Title', caption = 'Name data', type = 'line', labels = [], data = [], color = 'purple', hintColor = '#E0E0E0', borderWidth = 1, fontSize = '60%', width = '100%', height = '100%', numberOfLines = 10, ...props }) => {
    if (labels.length === 0 || data.length === 0) {
        return (
            <JAMPanel width={width} height={height}  >
                <JAMLabel caption={header} bold />
                <svg width='100%' height={height}>
                    <text>
                        No data
                </text>
                </svg>
            </JAMPanel>
        );
    }
    const xPadding = 80 / (labels.length - (type === 'line' ? 1 : 0));
    const max = (Math.ceil((Math.max(...data) / 10)) * 10);
    var min = 0;
    if (type === 'line') {
        min = (Math.floor((Math.min(...data) / 10)) * 10);
    }

    const yPadding = 80 / (max - min);
    const yLinePadding = 80 / numberOfLines;

    const line = [];
    const bars = [];
    const grid = [];
    const points = [];
    const labelsText = [];
    const valuesText = [];

    // to sa linie poziome i podpisy do osi x
    var i;
    for (i = 0; i < numberOfLines; i++) {
        grid.push(<line key={'line_' + yLinePadding * i + '_' + i} y1={80 - (yLinePadding * i) + '%'} x1='10%' y2={80 - (yLinePadding * i) + '%'} x2='90%' stroke={hintColor} />);
        valuesText.push(<tspan key={'span_' + yLinePadding * i + '_' + i} x='7%' dx='0' y={(yLinePadding * i) + '%'} dy='9%' style={{ fontSize: fontSize }}>{max - (((max - min) / numberOfLines) * (i + 1))}</tspan>);
    }
    grid.push(<line key={'grid_0_' + (i + 1)} y1={'0%'} x1='10%' y2={'0%'} x2='90%' stroke={hintColor} />);

    // tu podpisy do osi y
    for (i = 0; i < labels.length; i++) {
        if (type === 'line') {
            labelsText.push(<text key={'labels_' + labels[i] + '_' + i} y='85%' dx='10%' dy='0' x={(xPadding * i) + '%'} style={{ fontSize: fontSize, writingMode: 'tb' }}>{labels[i]}</text>);
        } else {
            labelsText.push(<text key={'labels_' + labels[i] + '_' + i} y='85%' dx='14%' dy='0' x={(xPadding * i) + '%'} style={{ fontSize: fontSize, writingMode: 'tb' }}>{labels[i]}</text>);
        }
    }
    var previous;
    if (data.length !== 0) {
        if (type === 'line') {
            previous = { x: '10%', y: (80 - (yPadding * (data[0] - min))) + '%' };
            points.push(<circle key={'circle_' + previous.x + "_" + previous.y + '_0'} cx={previous.x} cy={previous.y} r="0.5%" stroke="black" strokeWidth="0.5" fill="white"><title>{caption + ": " + data[0] + ", " + labels[0]}</title></circle>);
            grid.push(<line key={'line_' + previous.x + "_" + previous.y + '_0'} x1='10%' y1='0%' x2='10%' y2='80%' stroke={hintColor} ><title>{caption + ": " + data[0]}</title></line>);
        } else {
            previous = { x: '14%', y: (80 - (yPadding * (data[0] - min))) + '%' };
            bars.push(<line key={'bar' + previous.x + "_" + previous.y + '_0'} x1={previous.x} y1={previous.y} x2={previous.x} y2='80%' stroke={color} strokeWidth='3%'><title>{caption + ": " + data[0]}</title></line>);

        }
    }
    var current;
    for (i = 1; i < data.length; i++) {
        if (type === 'line') {
            current = { x: 10 + (xPadding * i) + '%', y: (80 - (yPadding * (data[i] - min))) + '%' };
            points.push(<circle key={'circle_' + previous.x + "_" + previous.y + '_' + i} cx={current.x} cy={current.y} r="0.5%" stroke="black" strokeWidth="0.5" fill="white"><title>{caption + ": " + data[i] + ", " + labels[i]}</title></circle>);
            line.push(<line key={'line_' + previous.x + "_" + previous.y + '_' + i} x1={previous.x} y1={previous.y} x2={current.x} y2={current.y} stroke={color} />);
            grid.push(<line key={'grid_' + previous.x + "_" + previous.y + '_' + i} x1={10 + (xPadding * i) + '%'} y1='0%' x2={10 + (xPadding * i) + '%'} y2='80%' stroke={hintColor} ><title>{caption + ": " + data[i]}</title></line>);
        } else {
            current = { x: 14 + (xPadding * i) + '%', y: (80 - (yPadding * (data[i] - min))) + '%' };
            bars.push(<line key={'bars_' + previous.x + "_" + previous.y + '_' + i} x1={current.x} y1={current.y} x2={current.x} y2='80%' stroke={color} strokeWidth='3%'><title>{caption + ": " + data[i]}</title></line>);
        }
        previous = current;
    }


    return (
        <JAMPanel width={width} height={height}  >
            <JAMLabel caption={header} bold />
            <svg key={header} width='100%' height={height}>
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