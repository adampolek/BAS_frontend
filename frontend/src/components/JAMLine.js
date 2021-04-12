import React from 'react';

const JAMLine = ({backgroundColor= "#E0E0E0", height='2px', width='100%', ...props}) => {
    return (
        <div style={{backgroundColor: backgroundColor, height: height, width: width}} />
    );
};

export default JAMLine;