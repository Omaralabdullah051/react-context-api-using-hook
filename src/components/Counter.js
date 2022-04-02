import React from 'react';
// import { CounterContext } from '../App';
import HoverCounter from './HoverCounter';


const Counter = () => {
    return (
        <div>
            {/* if we want to follow the render props pattern by wraping the child component using Context.Consumer for context API pattern:
            <CounterContext.Consumer>
                {([count2, handleEvent2]) => <HoverCounter count={count2} handleEvent={handleEvent2}></HoverCounter>}
            </CounterContext.Consumer> */}


            {/* or
            if we don't want to follow the render props pattern and also wrap the child component using Context.Consumer for the Context API patten; we can simply use useContext() hook directly inside the HoverCounter.*/}
            <HoverCounter></HoverCounter>
        </div>
    );
};

export default Counter;