import React, { useContext } from 'react';
import { CounterContext } from '../App';

//when we wrap the HoverCounter inside the CounterContext.Consumer and follows the render props pattern
// const HoverCounter = ({ count, handleEvent }) => {
//     return (
//         <div>
//             <h1 onMouseOver={handleEvent}>Hovered {count} times</h1>
//         </div>
//     );
// };



//but when we don't want to wrap the HoverCounter inside the CounterContext.Consumer and don't want to use render props pattern ;we can simply use useContext() hook here.
const HoverCounter = () => {
    const [count2, handleEvent2] = useContext(CounterContext);
    return (
        <div>
            <h1 onMouseOver={handleEvent2}>Hovered {count2} times</h1>
        </div>
    )
}
export default HoverCounter;