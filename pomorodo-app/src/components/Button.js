import React from 'react';

function Button({title, activeClass, _callback}) {
    return (
        <button className={activeClass} onClick={_callback}>{title}</button>
    )
}

export default Button