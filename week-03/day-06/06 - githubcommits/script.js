'use strict';

async function getRepositories(url) {
    let response = await fetch(url, {headers});
    repositories = await response.json();
} 

function* getNextRepository() {
    yield repositories.shift();
}

async function getCommits(url) {
    let response = await fetch(url, {headers});
    let commits = await response.json();
    addCommits(commits);
}

function addCommits(commits) {
    commits.forEach(commit => {
        let oneCommit = document.createElement('p');
        oneCommit.textContent = `${commit['commit']['author']['date']}   ${commit['commit']['message']}    ${commit['commit']['author']['name']}`;
        commitsDiv.appendChild(oneCommit);
    });
}

const wholeURL = 'https://api.github.com/orgs/green-fox-academy/repos';
const commitURL = 'https://api.github.com/repos/green-fox-academy/';
const myGithubToken = '75dbac467b6cab5331e8c0111ecfd7b9eb43740c';
const button = document.querySelector('button');
const title = document.querySelector('.repository');
const commitsDiv = document.querySelector('.commits');
let repositories = [];
let headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa('hondahmd' + ":" + myGithubToken));

button.addEventListener('click', () => {
    commitsDiv.innerHTML = '';
    let repository = getNextRepository().next().value;
    title.textContent = repository['name'];
    getCommits(`${commitURL}${repository['name']}/commits`);
});
getRepositories(wholeURL);