# 基于karma的前端单元测试

## 单元测试（unit test）
把app拆分成多个单元（组件），分别对他们进行测试，重点在于对该组件的测试，组件的依赖可以用假数据，假组件模拟出来

## 端到端测试（e2e test，end to end test）
对app进行完整的测试，个人认为端到端指的是用户端到后端（底端）。
E2E Testing or end-to-end testing, is the practice of testing if the execution of an application is performing as designed from start to finish. The entire application is tested in real-world scenarios, which includes testing the communication between components such as the database, network, APIs etc. and executing your code in a diversity of browsers. Basically testing everything. It takes a lot of time to set up and costs the most.

## 为什么需要单元测试

## 用了单元测试能达到的效果

## 单元测试的不足

## 单元测试的工具
karma: 是一个test runner, 能够在浏览器执行js测试文件,展示测试结果
这些是test framework: jasmine, mocha, supertest都是什么?

## 目前的使用情况
angular用的是karma+jasmine, 看karma的配置文件可知

## 实战