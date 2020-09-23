import { defineConfig } from 'umi';

export default defineConfig({
  hash: true,
  nodeModulesTransform: {
    type: 'none',
  },
  // 配置 external
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
  },
  // 开启服务器端渲染
  // ssr: {},
  // 生成服务器端预生成页面
  // exportStatic: {},

  // 引入被 external 库的 scripts
  // 区分 development 和 production，使用不同的产物
  scripts:
    process.env.NODE_ENV === 'development'
      ? [
          'https://gw.alipayobjects.com/os/lib/react/16.13.1/umd/react.development.js',
          'https://gw.alipayobjects.com/os/lib/react-dom/16.13.1/umd/react-dom.development.js',
        ]
      : [
          'https://gw.alipayobjects.com/os/lib/react/16.13.1/umd/react.production.min.js',
          'https://gw.alipayobjects.com/os/lib/react-dom/16.13.1/umd/react-dom.production.min.js',
        ],
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { exact: true, path: '/', redirect: '/landing' },
        { exact: true, path: '/landing', component: '@/pages/index' },
      ],
    },
  ],
});
