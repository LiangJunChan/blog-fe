export default [
  {
    path: '/home',
    name: '首页',
    component: '@/pages/home'
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
        redirect: '/f2e/engineering/build',
      },
    ]
  },
  {
    path: '/algorithm',
    name: '算法学习',
    routes: [
      {
        path: '/algorithm/leetcode',
        name: 'LeetCode',
        routes: [
          {
            path: '/algorithm/leetcode/stack',
            name: '堆栈',
            component: './leetcode/Stack'
          }
        ]
      },
      {
        redirect: './leetcode/Stack'
      }
    ]
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    component: './404',
  },
];
