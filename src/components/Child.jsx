import React from 'react';

function Child(props) {

    //props {title:"React Child"}

    return (
        <div className='card'>
            <h3>{props.title}</h3>
            {
                props.isHidden ?
                    "" : <h2>Child Component</h2>
            }

            {
                props.children
            }
        </div>
    );
}

export default Child;