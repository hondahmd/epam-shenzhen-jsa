import React from 'react';
import ReactDOM from 'react-dom';

import SideBarLists from './side-bar';
import HotelList from './hotel-list';

let starRating = <SideBarLists filterName="Star rating" />;
let propertyType = <SideBarLists filterName="Property type" />;
let hotelList = <HotelList />;
let test = <div className="hotel-info-container"></div>

ReactDOM.render(starRating, document.getElementsByClassName("star-rating")[0]);
ReactDOM.render(propertyType, document.getElementsByClassName("property-type")[0]);
ReactDOM.render(hotelList, document.getElementsByClassName("hotel-list")[0]);
