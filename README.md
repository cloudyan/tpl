# tpl

> tpl-* preset for vue-cli

- default         vue 精简项目初始化
- tpl-uni         uni-app 项目初始化
- tpl-vue-h5      vue H5 项目
- tpl-vue-admin   vue admin 项目

## 使用

需要模板内执行 npm i ？

```bash
# 使用 github 项目模板，可使用分支(#dev)
vue create -p cloudyan/tpl <custom name>
vue create -p cloudyan/tpl#dev <custom name>

# 也可以本地模板
vue create -p ./tpl test2
```

## 远程 Preset

[插件开发指南](https://cli.vuejs.org/zh/dev-guide/plugin-dev.html)

你可以通过发布 git repo 将一个 preset 分享给其他开发者。这个 repo 应该包含以下文件：

- preset.json: 包含 preset 数据的主要文件（必需）。
- generator.js: 一个可以注入或是修改项目中文件的 Generator。
- prompts.js 一个可以通过命令行对话为 generator 收集选项的 prompts 文件。
