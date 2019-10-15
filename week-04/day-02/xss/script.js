'use strict';

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

let container = document.querySelector('.container');
let username = document.querySelector('.username');
document.cookie = '111';
console.log(document.cookie);

username.setAttribute('value', getQueryVariable('content'));
//container.innerHTML = getQueryVariable('content');

//container.innerHTML = window.open("file:///home/hongmingda/work/EPAM/epam-academy/hondahmd/week-04/day-02/xss/b.html?param=" + document.cookie);
