import React from 'react';

const JAMLine = ({className, color = "#E0E0E0", height = '2px', width = '100%', ...props }) => {
    return (
        <div className={className} style={{ backgroundColor: color, height: height, width: width, ...props.style }} />
    );
};

export default JAMLine;