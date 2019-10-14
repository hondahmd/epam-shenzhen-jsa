'use strict';

import React from 'react';

import data from './data';

export default function HotelList() {
    return (
        <>
            {data.hotels.map((hotel, index) => {
                return (
                    <>
                        <div className="hotel-info-container" key={'hotel' + index}>
                            <h3>{hotel.name}</h3>
                            <div className="img-and-intro-container">
                                <img className="image" src={hotel.imageURL}></img>
                                <div className="intro-container">
                                    <p>{hotel.description}</p>
                                    <button>Book now!</button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    );
}
