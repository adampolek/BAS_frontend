import React, { useLayoutEffect, useRef } from 'react';
import JAMCol from './JAMCol';
import JAMLabel from './JAMLabel';
import JAMPanel from './JAMPanel';
import JAMRow from './JAMRow';

const JAMChart = ({ title = 'Title', caption = 'Name data', type = 'line', labels = [], data = [], color = 'purple', hintColor = '#E0E0E0', borderWidth = 1, fontSize = '60%', width = '100%', height = '100%', numberOfLines = 10, ...props }) => {
    const canvasRef = useRef(null);
    const xPadding = 80 / (labels.length - 1);
    const max = (Math.ceil((Math.max(...data) / 10)) * 10);
    const yPadding = 80 / max;
    const yLinePadding = 80 / numberOfLines;

    const line = [];
    const grid = [];
    const points = [];
    const labelsText = [];
    const valuesText = [];

    // to sa linie poziome i podpisy do osi x
    for (var i = 0; i < numberOfLines; i++) {
        grid.push(<line y1={80 - (yLinePadding * i) + '%'} x1='10%' y2={80 - (yLinePadding * i) + '%'} x2='90%' stroke={hintColor} />);
        valuesText.push(<tspan x='0' dx='0' y={(yLinePadding * i) + '%'} dy='10%' style={{ fontSize: fontSize }}>{max - ((max / numberOfLines) * (i + 1))}</tspan>);
    }
    grid.push(<line y1={'0%'} x1='10%' y2={'0%'} x2='90%' stroke={hintColor} />);

    // tu podpisy do osi y
    for (var i = 0; i < labels.length; i++) {
        labelsText.push(<tspan y='95%' dx='5%' dy='0' x={(83 / (labels.length - 1) * i) + '%'} style={{ fontSize: fontSize }}>{labels[i]}</tspan>);
    }

    var previous = { x: '10%', y: (80 - (yPadding * data[0])) + '%' };

    points.push(<circle cx={previous.x} cy={previous.y} r="1%" stroke="black" stroke-width="0.5" fill="white" />);
    grid.push(<line x1='10%' y1='0%' x2='10%' y2='80%' stroke={hintColor} />);
    for (var i = 1; i < data.length; i++) {
        var current = { x: 10+(xPadding * i) + '%', y: (80 - (yPadding * data[i])) + '%' };
        points.push(<circle cx={current.x} cy={current.y} r="1%" stroke="black" stroke-width="0.5" fill="white" />);
        line.push(<line x1={previous.x} y1={previous.y} x2={current.x} y2={current.y} stroke={color} />);
        grid.push(<line x1={10+(xPadding * i) + '%'} y1='0%' x2={10+(xPadding * i) + '%'} y2='80%' stroke={hintColor} />);
        previous = current;
    }


    return (
        <JAMPanel>
            <JAMCol width='100%'>
                <JAMRow>
                    <JAMLabel caption={title} bold />
                </JAMRow>
                <JAMRow style={{ margin: '20px' }}>
                    <JAMCol>
                        <svg>
                            <text>
                                {valuesText}
                            </text>
                            {grid}
                            {line}
                            {points}
                            <text>
                            {labelsText}
                        </text>
                        </svg>
                    </JAMCol>
                    <JAMCol width='50%'>

                    </JAMCol>
                </JAMRow>
            </JAMCol>
        </JAMPanel>
    );
}

export default JAMChart;