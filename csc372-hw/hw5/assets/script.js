"use strict";

const gitUrl = `https://api.github.com/users/lor-victor/repos`;
const container = document.getElementById('content-container');

fetch(gitUrl)
    .then(response => response.json())
    .then(data => {
        data.forEach(repo => {
            const repoUrl = repo.url;
            const commits = `${repoUrl}/commits`;
            fetch(commits)
                .then(response => response.json())
                .then(commitData => {
                    const githubCard = document.createElement('div');
                    githubCard.classList.add('github-card');
                    githubCard.innerHTML = `
                        <i class="fa-brands fa-github"></i><a class="repo-name" href="${repo.html_url}">${repo.name}</a>
                        <p class="repo-description">${repo.description || `No description`} </p>
                        <p class="creation-date">Created: ${new Date(repo.created_at).toLocaleDateString()}</p>
                        <p class="update-date">Updated: ${new Date(repo.updated_at).toLocaleDateString()}</p>
                        <p class="commits">Commits: ${commitData.length}</p>
                        <p class="languages">Language: ${repo.language || `Unknown`}</p>
                        <p class="watchers">Watchers: ${repo.watchers_count}</p>`;

                        container.appendChild(githubCard);
                })
                .catch (error => console.error('Error:', error));
        })
    })
        .catch (error => console.error('Error:', error));


