import React from 'react';
import JAMRow from './JAMRow';

const JAMLink = ({caption, href, ...props}) => {
return (
    <a href={href} style={props.style}>
        {caption}
    </a>
);
};

export default JAMRow;