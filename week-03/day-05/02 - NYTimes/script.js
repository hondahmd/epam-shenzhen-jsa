'use strict';

function addNews(data) {
    for (let news of data) {
        let oneNews = document.createElement('li');
        let link = document.createElement('a');
        let headline = document.createElement('h3');
        let snippet = document.createElement('h');
        let publicDate = document.createElement('h');
        headline.textContent = news['headline']['main'];
        snippet.innerHTML = `${news['snippet']} <br>`;
        publicDate.textContent = news['pub_date'];
        link.setAttribute('href', news['web_url']);
        link.appendChild(headline);
        oneNews.appendChild(link);
        oneNews.appendChild(snippet);
        oneNews.appendChild(publicDate);
        newsList.append(oneNews);
    }
}

const searchContent = 'moon+landing+Apollo+11'
const apiID = '5tipg1rp4GQuaQdGwAOXv1pQeXTGQokT';
const requestURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchContent}&api-key=${apiID}`;
const newsList = document.querySelector('.news-list');

fetch(requestURL)
    .then(response => response.json())
    .then(response => {
        addNews(response['response']['docs']);
    })
    .catch(err => console.log(err));
