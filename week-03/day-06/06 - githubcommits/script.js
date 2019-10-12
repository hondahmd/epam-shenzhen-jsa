'use strict';

async function getRepositories(url) {
    let response = await fetch(url, {headers});
    repositories = await response.json();
} 

function* getNextRepository() {
    console.log(repositories);
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
const myGithubToken = '7b55818d4e6a7dbceb6f79e137acaf748da1c2fa';
const button = document.querySelector('button');
const title = document.querySelector('.repository');
const commitsDiv = document.querySelector('.commits');
let repositories = [];
let headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa('hondahmd' + ":" + myGithubToken));

button.addEventListener('click', () => {
    let repository = getNextRepository().next().value;
    title.textContent = repository['name'];
    getCommits(`${commitURL}${repository['name']}/commits`);
});
getRepositories(wholeURL);