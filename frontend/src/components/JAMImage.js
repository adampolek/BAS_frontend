import React from 'react';

const JAMImage = ({ onClick, icon, note = 'Note icon', scale = "true", width = '100%', height = '100%', className, ...props }) => {
    return (
        <img onClick={onClick} className={'img ' + className} src={icon} alt={note} scale={scale} width={width} height={height} style={props.style} />
    );
};

export default JAMImage;