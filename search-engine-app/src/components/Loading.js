import React from 'react';
import {Plane} from 'react-loader-spinner';

function Loading() {
    return (
        <div className="flex justify-center items-center">
            <Plane ariaLabel="loading-indicator" />
        </div>
    )
}

export default Loading