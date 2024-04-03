# Vue3-TS-Template

> 前言：此模板搭建，来源于[SmallTeddy vue3前端新手项目指北系列文章](https://juejin.cn/column/7342861726001315891)

## 项目说明


- 项目由 vue3 + vite + vue-router + element-plus + sass + ts 搭建
- 采用 unplugin-auto-import 和 unplugin-vue-components 做自动导入
- vue 等相关生命周期可直接使用

### 安装

- 采用pnpm进行node包管理
- `pnpm install` 安装依赖
- `pnpm run dev` 运行开发环境
- `pnpm run build` 打包发布

### 资源引入顺序

- 第一级: vue 相关引入(放在最前面)、第三方插件的js、css
- 第二级: 组件引入
- 第三级: 接口 api、store、hooks、utils、私有方法

### [命名规范](./docs/name-convention.md ':include')

### [css 规范](./docs/css-name.md ':include')

### [ts 规范](./docs/ts-noem.md ':include')

### [git 规范](./docs/git-noem.md ':include')

### [插件和库](./docs/plugin-library.md ':include')

