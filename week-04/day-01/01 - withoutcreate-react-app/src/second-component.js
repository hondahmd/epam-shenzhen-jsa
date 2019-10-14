'use strict';

import React from 'react';

export default function SecondComponent(props) {
    return (
        <>
            <p>Hello from the second component!</p>
            <ul>
                {props.items.map(item => <li>{item}</li>)}
            </ul>
        </>
    );
}