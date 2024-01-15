import { useState } from "react";

function ReactState() {
    const [secondTitle, setSecondTitle] = useState("React State Info");
    const [isVisible, setIsVisible] = useState(false);

    let title = "React State";
    const changeTitle = () => {
        title = "React New State";
        console.log(title);
        setSecondTitle("new state");
        setIsVisible(true);
    }

    return (
        <div>
            {
                // conditional rendering
                isVisible ? <h2>{title}</h2> : ""
            }
            <h1>{secondTitle}</h1>
            <button onClick={changeTitle}>Change Title</button>
        </div>
    )
}

export default ReactState;



