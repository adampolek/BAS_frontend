import React from 'react';

const JAMLink = ({caption, href, onClick, ...props}) => {
return (
    <a href={href} style={props.style} onClick={onClick}>
        {caption}
    </a>
);
};

export default JAMLink;