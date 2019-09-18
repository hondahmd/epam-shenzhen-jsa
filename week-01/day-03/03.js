'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

var url = "https//www.reddit.com/r/nevertellmethebots";

url = url.replace("bots", "odds");
let index = url.indexOf('//');
url = url.slice(0, index) + ':' + url.slice(index);

console.log(url);