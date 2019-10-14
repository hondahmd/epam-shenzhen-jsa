'use strict';

import React from 'react';

import data from './data';

function SideBarLists(props) {
    return (
        <>
            {data.filters[props.filterName].map((filter, index) => {
                return (
                    <>
                        <input type="checkbox" key={index} checked={filter.checked ? true: false}></input>
                        <label key={index + data.filters[props.filterName].length}>{filter.name}</label>
                        <br></br>
                    </>
                )
            })}
        </>
    );
}

export default SideBarLists;
