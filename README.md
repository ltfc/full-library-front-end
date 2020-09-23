# 中华书画全库前端项目

## 环境配置
项目运行需要用到包管理工具，建议安装 tyarn
```
$ npm install yarn tyarn -g
```

## 本地调试和部署

* 安装依赖文件

```bash
$ tyarn
```
> 或执行`npm install`
* 启动本地测试

```bash
$ tyarn start
```
> 或执行`npm start`
## 生成静态文件

```
$ tyarn build
```
> 或执行`npm run build`
构建产物默认生成到./dist 下，文件目录如下：
```
./dist
├── index.html
├── umi.css
└── umi.js
```

## 本地验证
发布之前，可以通过 serve 做本地验证，

```
$ tyarn global add serve
$ serve ./dist
   ┌────────────────────────────────────────────────────┐
   │                                                    │
   │   Serving!                                         │
   │                                                    │
   │   - Local:            http://localhost:5000        │
   │   - On Your Network:  http://192.168.XXX.XXX:5000    │
   │                                                    │
   │   Copied local address to clipboard!               │
   │                                                    │
   └────────────────────────────────────────────────────┘
```
> 或执行`npm install serve --global`
访问 http://localhost:5000，正常情况下应该是和执行 `tyarn start` 或 `npm start` 时是一致的。

## 部署
本地验证完，就可以部署了。你需要把 dist 目录部署到服务器上。