//路由匹配到会继续往里匹配，所以后面与layout同级的路径访问无效
export default {
  singular: true,
  routes: [
    {
      path: 'layout',
      component: '../layout',
      routes: [
        {
          path: 'helloworld',
          component: './HelloWorld'
        },
        {
          path: 'dashboard',
          routes: [
            { path: 'analysis', component: 'Dashboard/Analysis' },
            { path: 'monitor', component: 'Dashboard/Monitor' },
            { path: 'workplace', component: 'Dashboard/Workplace' }
          ]
        },
        { path: 'puzzlecards', component: './puzzlecards' },
        { path: 'list', component: '../page/list' },
      ]
    },
    { path: 'test', component: './DemoTestPage', },
    { path: 'card', component: './CardDemo', },
    { path: 'newworld', component: './NewWorld' },
    { path: 'css-modules-with-less', component: './css-modules-with-less' },
    { path: 'css-modules-with-antd', component: './css-modules-with-antd' },
    { path: 'upload-test', component: './upload-test', },
  ],
  proxy: {
    '/dev': {
      target: 'http://jsonplaceholder.typicode.com',
      changeOrigin: true,
      pathRewrite: { "^/dev": "" }
    },
  },
  antd: {},
  dva: {},
  // 加入 theme 定义
  // theme: {
  //   "@primary-color": "#30b767", // 绿色
  // },
};

/**
 * 有时候我们想要「批量修改」 antd 的样式，这就需要利用 less 提供的一个能力：
 * modifyVars。
 * 简单地讲，antd 在使用 less 定义样式时，使用了大量的变量声明。
 * 这些变量的定义在编译期是可以被工具识别并修改的。
 * 如果使用的是 umi ，这个过程相当简单，只需要简单地修改配置文件即可。
 * 即上方theme定义。
 */