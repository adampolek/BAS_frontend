import React from 'react';

const FontSize = {
    HEADER: '36px',
    SMALL: '12px',
    NORMAL: '18px',
    BIG: '24px'
}
const JAMLabel = ({fontFamily= "Trebuchet MS", color = 'black', header = false, small = false, big = false, bold = false, underline = false, caption = 'Label', left=false, center=true, right=false, style, ...props }) => {
    return (
        <label style={{textAlign: left ? 'left' : center ? 'center' : 'right' ,color: color, fontSize: (header ? FontSize.HEADER : small ? FontSize.SMALL : big ? FontSize.BIG : FontSize.NORMAL), fontWeight: ((bold || header) ? 'bold' : ''), textDecoration: (underline ? 'underline' : ''), fontFamily: fontFamily, ...style }}>{caption}</label>
    );
};

export default JAMLabel;