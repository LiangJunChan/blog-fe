export default [
  {
    path: '/engineering',
    name: '前端工程化',
    routes: [
      {
        path: '/engineering/build',
        name: '自动化构建',
        component: './autobuild'
      }
    ]
  },


  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  {
    path: '/welcome',
    // name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    // name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    // name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    // name: '文章',
    icon: 'table',
    path: '/article',
    component: './article'
  },
  {
    name: '技术文章',
    icon: 'table',
    path: '/learn/search',
    component: './search',
    routes: [
      {
        path: '/learn/search',
        redirect: '/search/articles',
      },
      {
        name: '文章',
        icon: 'smile',
        path: '/learn/search/articles',
        component: './search/articles',
      },
      {
        name: '项目',
        icon: 'smile',
        path: '/learn/search/projects',
        component: './search/projects',
      },
      {
        name: '应用',
        icon: 'smile',
        path: '/learn/search/applications',
        component: './search/applications',
      },
    ],
  },
  {
    path: '/',
    redirect: '/learn/search/articles',
  },
  {
    component: './404',
  },
];
