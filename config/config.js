//路由匹配到会继续往里匹配，所以后面与layout同级的路径访问无效
export default {
  singular: true,
  routes: [
    {
      path: '/layout',
      component: '../layout',
      routes: [
        {
          path: 'helloworld',
          component: './HelloWorld'
        },
        {
          path: '/dashboard',
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
    {
      path: '/test',
      component: './DemoTestPage',
    },
    {
      path: '/card',
      component: './CardDemo',
    },
    { path: 'newworld', component: './NewWorld' },
    { path: 'css-modules-with-less', component: './css-modules-with-less' },
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
};