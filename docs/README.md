# 基于karma的前端单元测试

## 端到端测试（e2e test，end to end test）
对app进行完整的测试，个人认为端到端指的是用户端到后端（底端）。
E2E Testing or end-to-end testing, is the practice of testing if the execution of an application is performing as designed from start to finish. The entire application is tested in real-world scenarios, which includes testing the communication between components such as the database, network, APIs etc. and executing your code in a diversity of browsers. Basically testing everything. It takes a lot of time to set up and costs the most.

## 单元测试（unit test）
把app拆分成多个单元（组件），分别对他们进行测试，重点在于对该组件的测试，组件的依赖可以用假数据，假组件模拟出来.比如说针对一个展示vpc列表的组件写单测，单元测试并不会发起真正的http请求，而是通过替换http模块的方式，发起假的http请求，然后返回预先定义好的假数据（这是不足点），在这个过程中插入适当的检查代码，如发起请求后是否立即进入了loading状态，数据返回后列表的行数是否正确，每一行的内容是否正确，列表是否结束loading状态？请求失败时是否有提示信息，是否结束loading状态

## 为什么需要单元测试(单元测试能达到什么效果)

## 实现单元测试阻碍
1. 单测只能由对应功能的开发者写，代码量巨大，先写功能代码，自测后就不管了，开发时间短，没时间写单测代码
1. 业务变动，单元测试的逻辑也要修改

## 投入和回报
这里讲的是前端单测，单测做好了，前端问题自然就少，可是目前前端的bug占总bug的百分比，我还没统计过，单测是很耗时间的，能否有效地减少bug数量，目前正在统计

## 单元测试的工具
karma: 是一个test runner, 能够在浏览器执行js测试文件,展示测试结果
这些是test framework: jasmine, mocha, supertest都是什么?

## 目前的使用情况
angular用的是karma+jasmine, 看karma的配置文件可知
horizon/frontend

## 实战
1. 单测的代码
1. 改几行代码，而且还是表面看起来没问题的，先准备一个简单的，再准备一个复杂的