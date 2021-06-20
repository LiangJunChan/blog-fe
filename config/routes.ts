export default [
  {
    path: '/home',
    name: '首页'
  },
  {
    path: '/f2e',
    name: '前端·博文',
    routes: [
      {
        path: '/f2e/engineering',
        name: '前端工程化',
        routes: [
          { path: '/f2e/engineering/build',name: '自动化部署', component: './autobuild' }
        ]
      },
      {
        path: '/f2e/learn',
        name: '文章',
        routes: [
          { path: '/f2e/learn/articles', name: '文章', component: './search/articles' }
        ]
      },
      {
        path: '/f2e',
        redirect: '/f2e/engineering/build',
      },
    ]
  },
  {
    path: '/algorithm',
    name: '算法学习',
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    component: './404',
  },
];
