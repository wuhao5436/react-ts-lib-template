## 功能大全

组件 | 引入方法 | 功能
---|---|---


## hooks
hooks | 引入 | 功能
---|---|---



## 工具函数大全

fn | 引入 | 功能
---|---|---
safeParseJson | import { safeParseJson } from 'your-lib' | 确保jsonParse不会报错，如果json不正确，会智能坚持返回空数组或空对象。



## 开发使用
1. 下载组件库  `git@xxx.xxxx.xxx:webfront/your-lib.git`
1. `cd your-lib`
1. npm link 使用本链接到本地 `sudo npm link`
1. 在业务项目中使用 `npm link your-lib` 执行完成后会看到关联关系如下
```
/Users/xxxx/project/xxxx/node_modules/your-lib -> /usr/local/lib/node_modules/xxxx -> /Users/xxxx/project/test/your-lib
```

## 发布
1. npm run login
```
name: xxxxx
username: xxxxx
email: xxxx@xxxxx.com.cn
```

1. 编写完新功能后记得升级版本号，目前升级最后一位即可
1. npm publish 发布

## 项目中使用
1. 指定项目源使用我们内部的nexus3服务器：
   `npm config set registry http://xxxxxx/repository/npm-group/"` 或使用 .npmrc 文件
1. 建议全局设置
1. `import { xxxx } from 'your-lib'`