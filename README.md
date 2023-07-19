# 数据可视化实时监控系统Koa

#### 介绍
{**以下是 Gitee 平台说明，您可以替换此简介**
Gitee 是 OSCHINA 推出的基于 Git 的代码托管平台（同时支持 SVN）。专为开发者提供稳定、高效、安全的云端软件开发协作平台
无论是个人、团队、或是企业，都能够用 Gitee 实现代码托管、项目管理、协作开发。企业项目请看 [https://gitee.com/enterprises](https://gitee.com/enterprises)}

#### 软件架构
软件架构说明


#### 安装教程

1.  xxxx
2.  xxxx
3.  xxxx

#### 使用说明

1.  xxxx
2.  xxxx
3.  xxxx

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


#### 特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)


<!-- koa2写法 
app.use(async(ctx,next)=>{
    await next()
})后台项目的目标
1.计算服务器处理请求的总耗时
2.在响应头增加相应内容的mime类型、设置响应头
3.根据URL读取指定目录下的文件内容 读取接口数据
由三个中间件完成的 -->

<!-- 接口总览
1.商家销量 /api/seller
2.预算开销 /api/budget
3.库存信息 /api/stock
4.销量趋势 /api/trend
5.销量排行 /api/rank
6.商家分布 /api/map
7.热销商品 /api/hotproduct

后台项目准备
1.安装  npm init -y  npm install koa
2.创建文件目录结构
  app.js
  data
  middleware/
      koa_response_duration.js
      koa_response_data.js
      koa_response_header.js
  utils/
      file_utils.js //快速读取目录下面的文件 -->