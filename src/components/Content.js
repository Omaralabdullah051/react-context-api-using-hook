//intermediator component;only uses for ClickCounter component by render props pattern
import React from "react";

const Content = (props) => {
    const [count, setCount] = React.useState(0);

    const handleEvent = () => setCount((prevState) => (prevState + 1));
    const { children } = props;
    return children(count, handleEvent);
};

export default Content;