import React from 'react';
import Child from './Child';

function ReactProps(props) {
    return (
        <div>
            <h3>React Props</h3>

            <Child title="React Child 1">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam sed, quos minus rem id mollitia voluptatem sapiente dignissimos totam incidunt explicabo vero maxime velit accusantium quidem deserunt beatae nostrum cupiditate!</p>
            </Child>

            <Child title="React Child 2" isHidden={true} />

            <Child title="React Child 3" />

            <Child title="React Child 4">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
            </Child>

        </div>
    );
}

export default ReactProps;