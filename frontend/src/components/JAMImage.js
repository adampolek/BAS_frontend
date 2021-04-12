import React from 'react';
import './css/image.css';

const JAMImage = ({ icon, note = 'Note icon', scale = true, width = '100%', height = '100%', ...props }) => {
    return (
        <img className='img' src={icon} alt={note} scale={true} style={{width: width, height: height}} />
    );
};

export default JAMImage;