# ghost-now
Ghost-now is a way for Serverless to deploy Ghost blogs.
## Instructions
1. Register an account on [zeit](https://zeit.co/dashboard) and download and install the client [Now-CLI](https://zeit.co/download) 
2. Download and install [NodeJS 8 LTS](https://nodejs.org/zh-cn/download/) and [Yarn](https://yarnpkg.com/lang/zh-hans/docs/install/)
3. Log in to Zeit-Now on this machine and download the project source code.
```bash
git clone https://github.com/S8Cloud/ghost-now.git && cd ghost-now
```
4. **Modify `now.json` for `url` and `alias` for your domain**
5. **Install dependencies `yarn setup`*
6. **Add your own files to `content` folder such as images or themes**
7. **Tes development environment `npm run start`**
8. **When you ready top deploy `yarn deploy`**
