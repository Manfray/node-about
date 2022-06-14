## 逻辑脑图
new Vue(option)
  - 初始化vue
    - prop
    - method
    - data
      - 数据代理 proxy
      - 数据劫持 defineReactive
    - computed
    - watch
    - 原型挂载$mount方法
  - $mount
    - 初始化render函数
      - 将el转化
      - => template （ parse成抽象语法树/再generate成表达式字符串（_c('div',{id:"app"},_c('div',undefined,_v("hello"+_s(name)),_c('span',undefined,_v("world"))))） ）
      - => render函数表达式（），有则不转
    - vm.update(vm.render())
      - render构建的是vnode构成的vdom节点（其中包含_c/_v/_s等生成vnode方法）
      - 向$el上放真实dom，
