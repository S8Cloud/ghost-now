# ghost-now
Ghost-now 是一种 Serverless 部署 Ghost 博客的方式。
## 使用方法
1. 在 [zeit](https://zeit.co/dashboard) 上注册账户，并下载安装客户端 [Now-CLI](https://zeit.co/download) 
2. 下载安装 [NodeJS 8 LTS](https://nodejs.org/zh-cn/download/) 和 [Yarn](https://yarnpkg.com/lang/zh-hans/docs/install/)
3. 在本机登陆 Zeit-Now，下载本项目源码
```bash
git clone https://github.com/S8Cloud/ghost-now.git && cd ghost-now
```
4. **修改 `now.json` 中的 `url` 和 `alias` 为您的域名**
5. **先后执行 `yarn setup` 和 `yarn deploy`**
6. 如果你的域名不在 Zeit 托管，首次执行 `yarn deploy` 时会出现报错并要求添加一条 `TXT` 和 `CNAME` 记录。添加完毕后重新执行 `yarn deploy` 即可正确部署。
7. 注意：部署后升级 Ghost 版本先执行 `yarn clean`，再重复第 4 步。**升级会清除所有数据！**，请注意备份数据。
