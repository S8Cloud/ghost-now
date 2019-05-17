# ghost-now

Ghost-now is a way for Serverless to deploy Ghost blogs.

## Instructions

1. Register an account on [zeit](https://zeit.co/dashboard) and download and install the client [Now-CLI](https://zeit.co/download) 
2. Download and install [NodeJS 8 LTS](https://nodejs.org/download/) and [Yarn](https://yarnpkg.com/docs/install/)
3. Log in to Zeit-Now on this machine and download the project source code.

```bash
git clone https://github.com/plywrk/ghost-now.git && cd ghost-now
```

1. **Modify `now.json` for `url` and `alias` for your domain**
2. **Install dependencies `yarn setup`**
3. **Tes development environment `NODE_ENV=production node index.js`**
4. **Make some updates or switch to another theme**
5. **When you ready to deploy `yarn deploy`**

## Updating Contents

You need to make changes in your tes development environment before you can deploy some updates.

1. Tes development environment `NODE_ENV=production node index.js`
2. Go to <http://localhost:2368/ghost> and make some changes
3. **When you ready to deploy `yarn deploy`**
