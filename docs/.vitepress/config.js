const sidebar = {
  '/communication/': [
    {
      text: '通信',
      items: [
        { text: '通信概述', link: '/communication/' },
        { text: 'HTTP', link: '/communication/http' },
        { text: 'HTTP POST', link: '/communication/http-post' },
        { text: '正向 WebSocket', link: '/communication/ws' },
        { text: '反向 WebSocket', link: '/communication/ws-reverse' },
        { text: '鉴权', link: '/communication/authorization' },
      ],
    },
  ],
  '/message/': [
    {
      text: '消息',
      items: [
        { text: '消息概述', link: '/message/' },
        { text: '字符串格式', link: '/message/string' },
        { text: '数组格式', link: '/message/array' },
        { text: '消息段类型', link: '/message/segment' },
      ],
    },
  ],
  '/api/': [
    {
      text: 'API',
      items: [
        { text: 'API 概述', link: '/api/index.md' },
        { text: '公开 API', link: '/api/public.md' },
        { text: '隐藏 API', link: '/api/hidden.md' },
      ],
    },
  ],
  '/event/': [
    {
      text: '事件',
      items: [
        { text: '事件概述', link: 'event/index.md' },
        { text: '消息事件', link: 'event/message.md' },
        { text: '通知事件', link: 'event/notice.md' },
        { text: '请求事件', link: 'event/request.md' },
        { text: '元事件', link: 'event/meta.md' },
      ],
    },
  ],
}

/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  title: 'OneBot 11 标准',
  description: '通用聊天机器人应用接口标准',
  base: '/onebot_v11_vitepress',

  themeConfig: {
    siteTitle: 'OneBot 11 标准',
    logo: {
      light: '/onebot-black.svg',
      dark: '/onebot.svg',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/botuniverse/onebot-11' },
    ],

    nav: [
      { text: '介绍', link: '/introduction/' },
      ...Object.keys(sidebar).map((key) => sidebar[key][0]),
    ],

    sidebar: sidebar,
  },
}

export default config
