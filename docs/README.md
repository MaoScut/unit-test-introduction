# 基于karma的前端单元测试

## 端到端测试（e2e test，end to end test）
模拟真实的生产环境，对app进行完整的测试，包括了前端界面，网络，数据库，api等，个人认为端到端指的是用户端到后端（底端）。端到端测试了所有的东西，因此花费的时间非常大，像现在测试部的自动化测试，光是跑控制台计算模块的测试，大概要花多久（直接找测试问一下）

E2E Testing or end-to-end testing, is the practice of testing if the execution of an application is performing as designed from start to finish. The entire application is tested in real-world scenarios, which includes testing the communication between components such as the database, network, APIs etc. and executing your code in a diversity of browsers. Basically testing everything. It takes a lot of time to set up and costs the most.

## 单元测试（unit test）
把app拆分成多个单元（组件），分别对他们进行测试，重点在于对该组件的测试，组件的依赖可以用假数据，假组件模拟出来.比如说针对一个展示vpc列表的组件写单测，单元测试并不会发起真正的http请求，而是通过替换http模块的方式，发起假的http请求，然后返回预先定义好的假数据（这是不足点），在这个过程中插入适当的检查代码，如发起请求后是否立即进入了loading状态，数据返回后列表的行数是否正确，每一行的内容是否正确，列表是否结束loading状态？请求失败时是否有提示信息，是否结束loading状态。
每个组件都正常运行了，它们组合在一起是否正常运行？比如A组件正常运行需要一些特殊的依赖，然后写单测时会使用一些手段模拟这些依赖，测试A是否正常运行，那么其他组件，B组件在引用A时是否提供了对应的依赖？这就需要B组件的单元测试要充分，测试用例中要检查自己是否正确提供了这些依赖。从这个例子可以看到，B组件这个“单元”，包含了一些小”单元“（A组件），它的测试代码会更多，要花费更多的时间写代码。从这点出发，对比一下两种测试，端到端的写测试代码的时间相对较短，但是执行时间长，而单元测试，执行时间短，但是代价是，组件层级越浅，单测的逻辑就更加复杂，写代码时间越长。

## 对于控制台来说单元测试能带来什么效果
1. 提取公共纯函数（如数组去重，日期格式化，ip地址运算等），进行充分的单元测试，增加代码的复用性，稳定性（目前能做到）
1. 对公共视图组件（如表格组件，overview组件）进行充分的单元测试，可保证组件增加新特性时不会影响旧的功能（目前frontend单测是接近200个，覆盖率应该才一半左右吧）
1. 对业务逻辑进行单元测试，可以保证业务优化时，不用对原来的业务测试，同时，不熟悉该业务的同事，能够通过阅读单测代码来了解业务（目前做不到，时间成本大，业务容易改动）

## 实现单元测试阻碍
1. 单测只能由对应功能的开发者写，代码量巨大，先写功能代码，自测后就不管了，开发时间短，没时间写单测代码
1. 业务变动，单元测试的逻辑也要修改
1. 写单测代码时，因为功能已经完成了，不够用心，测试用例不够典型，

## 单元测试的工具
karma: 是一个test runner, 能够在浏览器执行js测试文件,展示测试结果

简单地来说，karma的作用是：
1. 启动一个web server，提供被测试的文件以及spec文件
1. 生成一个页面来执行测试
1. 自动打开浏览器访问测试页面
1. 报告测试结果（展示在浏览器上，或者是返回给启动单元测试的命令行）
  jasmine, mocha, supertest： 这些是单元测试框架，（简单地说，就是要用这些东西的语法来写单测）
  例如describe，it ,beforeEach, expect
  ```
  function helloWorld() {
    return 'Hello world!';
  }

  describe('Hello world', () => { (1)
    it('says hello', () => { (2)
      expect(helloWorld()) (3)
          .toEqual('Hello world!'); (4)
    });
  });
  ```

## 目前的使用情况
1. angular用的是karma+jasmine, 看karma的配置文件可知
1. 每次horizon代码提交的时候都会跑一次单元测试，代码审查的虚拟机上没有浏览器，所以是package.json里面的phantomjs来替代浏览器，他是一个没有图形界面的浏览器
1. frontend单元测试演示

## 实战
1. 单测的代码
1. 改几行代码，而且还是表面看起来没问题的，先准备一个简单的，再准备一个复杂的