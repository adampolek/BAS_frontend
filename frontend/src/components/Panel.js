import React from 'react';
import './css/panel.css';

const Panel = ({type='column', ...props}) => {
    return (
        <div className='panel'>
            {props.children}
        </div>
    )
}

export default Panel;