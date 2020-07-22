export default {
  singular: true,
  routes: [{
    path: '/',
    component: '../layout',
    routes: [
      {
        path: 'helloworld',
        component: './HelloWorld'
      },
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
  {
    path: '/hello',
    component: './HelloWorld',
  }],
  antd: {},
};