import React, { useLayoutEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const JAMChart = ({ caption = 'Title', type = 'line', labels = [], data = [], backgroundColor = 'white', borderColor = 'black', borderWidth = 1, ...props }) => {
    const canvasRef = useRef(null);
    useLayoutEffect(() => {

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        
        var chart = new Chart(context, {
            type: type,
            data: {
                labels: labels,
                datasets: [{
                    label: caption,
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    data: data,
                }]
            },
            options: {}
        });
    });

    return (
        <canvas ref={canvasRef} />
    );
}

export default JAMChart;