<template>
  <div id="app">
    <app-header @queryEmited="submitQuery"/>
    <filter-component @criteriaChanged="filterRepositorie" @orderChanged="sortRepositories"></filter-component>
    <div class="container">
      <div class="loading text-center" v-if="loading"> 
        <h5>loading ...</h5>
      </div>
      <div v-if="repositories.length==0 && !loading">
        <h4 class="text-center"> No Data found, submit a new Query please</h4>
      </div>
      <div v-if="repositories && repositories.length && !loading">
        <repositories-component  :repositories="repositories"></repositories-component>  
      <pagination-component :pageCount="pageCount"  @pageChanged="changePage"></pagination-component>
      </div>
    </div>
    
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import filterComponent from './components/filterComponent'
import RepositoriesComponent from './components/RepositoriesComponent'
import githubService from './services/github.service'
import paginationComponent from './components/paginationComponent'

export default {
  name: 'app',
  data()  {
    return {
      repositories : [
       // {
       //      "id": 39840932,
       //      "name": "googletest",
       //      "full_name": "google/googletest",
       //      "owner": {
       //          "login": "google",
       //          "id": 1342004,
       //          "avatar_url": "https://avatars1.githubusercontent.com/u/1342004?v=4",
       //          "gravatar_id": "",
       //          "url": "https://api.github.com/users/google",
       //          "html_url": "https://github.com/google",
       //          "followers_url": "https://api.github.com/users/google/followers",
       //          "following_url": "https://api.github.com/users/google/following{/other_user}",
       //          "gists_url": "https://api.github.com/users/google/gists{/gist_id}",
       //          "starred_url": "https://api.github.com/users/google/starred{/owner}{/repo}",
       //          "subscriptions_url": "https://api.github.com/users/google/subscriptions",
       //          "organizations_url": "https://api.github.com/users/google/orgs",
       //          "repos_url": "https://api.github.com/users/google/repos",
       //          "events_url": "https://api.github.com/users/google/events{/privacy}",
       //          "received_events_url": "https://api.github.com/users/google/received_events",
       //          "type": "Organization",
       //          "site_admin": false
       //      },
       //      "private": false,
       //      "html_url": "https://github.com/google/googletest",
       //      "description": "Google Test",
       //      "fork": false,
       //      "url": "https://api.github.com/repos/google/googletest",
       //      "forks_url": "https://api.github.com/repos/google/googletest/forks",
       //      "keys_url": "https://api.github.com/repos/google/googletest/keys{/key_id}",
       //      "collaborators_url": "https://api.github.com/repos/google/googletest/collaborators{/collaborator}",
       //      "teams_url": "https://api.github.com/repos/google/googletest/teams",
       //      "hooks_url": "https://api.github.com/repos/google/googletest/hooks",
       //      "issue_events_url": "https://api.github.com/repos/google/googletest/issues/events{/number}",
       //      "events_url": "https://api.github.com/repos/google/googletest/events",
       //      "assignees_url": "https://api.github.com/repos/google/googletest/assignees{/user}",
       //      "branches_url": "https://api.github.com/repos/google/googletest/branches{/branch}",
       //      "tags_url": "https://api.github.com/repos/google/googletest/tags",
       //      "blobs_url": "https://api.github.com/repos/google/googletest/git/blobs{/sha}",
       //      "git_tags_url": "https://api.github.com/repos/google/googletest/git/tags{/sha}",
       //      "git_refs_url": "https://api.github.com/repos/google/googletest/git/refs{/sha}",
       //      "trees_url": "https://api.github.com/repos/google/googletest/git/trees{/sha}",
       //      "statuses_url": "https://api.github.com/repos/google/googletest/statuses/{sha}",
       //      "languages_url": "https://api.github.com/repos/google/googletest/languages",
       //      "stargazers_url": "https://api.github.com/repos/google/googletest/stargazers",
       //      "contributors_url": "https://api.github.com/repos/google/googletest/contributors",
       //      "subscribers_url": "https://api.github.com/repos/google/googletest/subscribers",
       //      "subscription_url": "https://api.github.com/repos/google/googletest/subscription",
       //      "commits_url": "https://api.github.com/repos/google/googletest/commits{/sha}",
       //      "git_commits_url": "https://api.github.com/repos/google/googletest/git/commits{/sha}",
       //      "comments_url": "https://api.github.com/repos/google/googletest/comments{/number}",
       //      "issue_comment_url": "https://api.github.com/repos/google/googletest/issues/comments{/number}",
       //      "contents_url": "https://api.github.com/repos/google/googletest/contents/{+path}",
       //      "compare_url": "https://api.github.com/repos/google/googletest/compare/{base}...{head}",
       //      "merges_url": "https://api.github.com/repos/google/googletest/merges",
       //      "archive_url": "https://api.github.com/repos/google/googletest/{archive_format}{/ref}",
       //      "downloads_url": "https://api.github.com/repos/google/googletest/downloads",
       //      "issues_url": "https://api.github.com/repos/google/googletest/issues{/number}",
       //      "pulls_url": "https://api.github.com/repos/google/googletest/pulls{/number}",
       //      "milestones_url": "https://api.github.com/repos/google/googletest/milestones{/number}",
       //      "notifications_url": "https://api.github.com/repos/google/googletest/notifications{?since,all,participating}",
       //      "labels_url": "https://api.github.com/repos/google/googletest/labels{/name}",
       //      "releases_url": "https://api.github.com/repos/google/googletest/releases{/id}",
       //      "deployments_url": "https://api.github.com/repos/google/googletest/deployments",
       //      "created_at": "2015-07-28T15:07:53Z",
       //      "updated_at": "2017-11-12T14:49:18Z",
       //      "pushed_at": "2017-11-07T18:32:30Z",
       //      "git_url": "git://github.com/google/googletest.git",
       //      "ssh_url": "git@github.com:google/googletest.git",
       //      "clone_url": "https://github.com/google/googletest.git",
       //      "svn_url": "https://github.com/google/googletest",
       //      "homepage": "",
       //      "size": 3199,
       //      "stargazers_count": 6482,
       //      "watchers_count": 6482,
       //      "language": "C++",
       //      "has_issues": true,
       //      "has_projects": true,
       //      "has_downloads": false,
       //      "has_wiki": false,
       //      "has_pages": false,
       //      "forks_count": 2824,
       //      "mirror_url": null,
       //      "archived": false,
       //      "open_issues_count": 489,
       //      "forks": 2824,
       //      "open_issues": 489,
       //      "watchers": 6482,
       //      "default_branch": "master",
       //      "score": 9.213603
       //  },
       //   {
       //      "id": 39840932,
       //      "name": "googletest",
       //      "full_name": "google/googletest",
       //      "owner": {
       //          "login": "google",
       //          "id": 1342004,
       //          "avatar_url": "https://avatars1.githubusercontent.com/u/1342004?v=4",
       //          "gravatar_id": "",
       //          "url": "https://api.github.com/users/google",
       //          "html_url": "https://github.com/google",
       //          "followers_url": "https://api.github.com/users/google/followers",
       //          "following_url": "https://api.github.com/users/google/following{/other_user}",
       //          "gists_url": "https://api.github.com/users/google/gists{/gist_id}",
       //          "starred_url": "https://api.github.com/users/google/starred{/owner}{/repo}",
       //          "subscriptions_url": "https://api.github.com/users/google/subscriptions",
       //          "organizations_url": "https://api.github.com/users/google/orgs",
       //          "repos_url": "https://api.github.com/users/google/repos",
       //          "events_url": "https://api.github.com/users/google/events{/privacy}",
       //          "received_events_url": "https://api.github.com/users/google/received_events",
       //          "type": "Organization",
       //          "site_admin": false
       //      },
       //      "private": false,
       //      "html_url": "https://github.com/google/googletest",
       //      "description": "Google Test",
       //      "fork": false,
       //      "url": "https://api.github.com/repos/google/googletest",
       //      "forks_url": "https://api.github.com/repos/google/googletest/forks",
       //      "keys_url": "https://api.github.com/repos/google/googletest/keys{/key_id}",
       //      "collaborators_url": "https://api.github.com/repos/google/googletest/collaborators{/collaborator}",
       //      "teams_url": "https://api.github.com/repos/google/googletest/teams",
       //      "hooks_url": "https://api.github.com/repos/google/googletest/hooks",
       //      "issue_events_url": "https://api.github.com/repos/google/googletest/issues/events{/number}",
       //      "events_url": "https://api.github.com/repos/google/googletest/events",
       //      "assignees_url": "https://api.github.com/repos/google/googletest/assignees{/user}",
       //      "branches_url": "https://api.github.com/repos/google/googletest/branches{/branch}",
       //      "tags_url": "https://api.github.com/repos/google/googletest/tags",
       //      "blobs_url": "https://api.github.com/repos/google/googletest/git/blobs{/sha}",
       //      "git_tags_url": "https://api.github.com/repos/google/googletest/git/tags{/sha}",
       //      "git_refs_url": "https://api.github.com/repos/google/googletest/git/refs{/sha}",
       //      "trees_url": "https://api.github.com/repos/google/googletest/git/trees{/sha}",
       //      "statuses_url": "https://api.github.com/repos/google/googletest/statuses/{sha}",
       //      "languages_url": "https://api.github.com/repos/google/googletest/languages",
       //      "stargazers_url": "https://api.github.com/repos/google/googletest/stargazers",
       //      "contributors_url": "https://api.github.com/repos/google/googletest/contributors",
       //      "subscribers_url": "https://api.github.com/repos/google/googletest/subscribers",
       //      "subscription_url": "https://api.github.com/repos/google/googletest/subscription",
       //      "commits_url": "https://api.github.com/repos/google/googletest/commits{/sha}",
       //      "git_commits_url": "https://api.github.com/repos/google/googletest/git/commits{/sha}",
       //      "comments_url": "https://api.github.com/repos/google/googletest/comments{/number}",
       //      "issue_comment_url": "https://api.github.com/repos/google/googletest/issues/comments{/number}",
       //      "contents_url": "https://api.github.com/repos/google/googletest/contents/{+path}",
       //      "compare_url": "https://api.github.com/repos/google/googletest/compare/{base}...{head}",
       //      "merges_url": "https://api.github.com/repos/google/googletest/merges",
       //      "archive_url": "https://api.github.com/repos/google/googletest/{archive_format}{/ref}",
       //      "downloads_url": "https://api.github.com/repos/google/googletest/downloads",
       //      "issues_url": "https://api.github.com/repos/google/googletest/issues{/number}",
       //      "pulls_url": "https://api.github.com/repos/google/googletest/pulls{/number}",
       //      "milestones_url": "https://api.github.com/repos/google/googletest/milestones{/number}",
       //      "notifications_url": "https://api.github.com/repos/google/googletest/notifications{?since,all,participating}",
       //      "labels_url": "https://api.github.com/repos/google/googletest/labels{/name}",
       //      "releases_url": "https://api.github.com/repos/google/googletest/releases{/id}",
       //      "deployments_url": "https://api.github.com/repos/google/googletest/deployments",
       //      "created_at": "2015-07-28T15:07:53Z",
       //      "updated_at": "2017-11-12T14:49:18Z",
       //      "pushed_at": "2017-11-07T18:32:30Z",
       //      "git_url": "git://github.com/google/googletest.git",
       //      "ssh_url": "git@github.com:google/googletest.git",
       //      "clone_url": "https://github.com/google/googletest.git",
       //      "svn_url": "https://github.com/google/googletest",
       //      "homepage": "",
       //      "size": 3199,
       //      "stargazers_count": 6482,
       //      "watchers_count": 6482,
       //      "language": "C++",
       //      "has_issues": true,
       //      "has_projects": true,
       //      "has_downloads": false,
       //      "has_wiki": false,
       //      "has_pages": false,
       //      "forks_count": 2824,
       //      "mirror_url": null,
       //      "archived": false,
       //      "open_issues_count": 489,
       //      "forks": 2824,
       //      "open_issues": 489,
       //      "watchers": 6482,
       //      "default_branch": "master",
       //      "score": 9.213603
       //  }
       ],
      currentQuery : '',
      currentCriteria : 'stars',
      currentOrder : 'desc',
      pageCount : 0,
      loading : false
    }
  },
  components: {
    AppHeader,
    RepositoriesComponent,
    filterComponent,
    paginationComponent,
    AppFooter
  },
  methods : {
    filterRepositorie(criteria) {
      this.currentCriteria = criteria
      
      if(this.currentQuery != '') {
          this.loading = true
          githubService.search(this.currentQuery,this.currentCriteria, this.currentOrder)
                       .then(data => {
                          this.repositories  = data.items 
                          this.loading = false
                    })
        }
    },
    sortRepositories(order) {
      console.log(order)
    },
    changePage(page) {
      console.log(page)
      this.pageCount = page
      this.loading = true
      githubService.search(this.currentQuery,this.currentCriteria, this.currentOrder,page )
                   .then(data => {
                          this.repositories  = data.items 
                          this.loading = false
                    })
    },
    submitQuery(query) {
      this.loading = true
      this.currentQuery = query
      githubService.search(query).then(data => {
        this.loading = false
        this.repositories  = data.items 
        this.resetPageCount()
      })
    },
    resetPageCount(){
      this.pageCount = 0
    }
  }
}

</script>

<style>

  </style>

  <style type="text/css" src="./assets/css/main.css"></style>
