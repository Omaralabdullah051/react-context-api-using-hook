import React from 'react';

const ClickCounter = ({ count, handleEvent }) => {
    return (
        <div>
            <button onClick={handleEvent}>Click {count} times</button>
        </div>
    );
};

export default ClickCounter;