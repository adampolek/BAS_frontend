import React from 'react';

const JAMLink = ({caption='Text', href='#', onClick, ...props}) => {
return (
    <a href={href} style={props.style} onClick={onClick}>
        {caption}
    </a>
);
};

export default JAMLink;