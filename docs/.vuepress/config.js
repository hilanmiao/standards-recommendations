module.exports = {
    title: '全栈小白开发手册',
    description: '全栈小白开发手册',
    base: '/standards-recommendations/',
    head: [
        ['link', { rel: 'icon', href: '/miaomiao.png' }]
    ],
    dest: 'vuepress',
    themeConfig: {
        logo: '/miaomiao.png',
        repo: 'hilanmiao/standards-recommendations',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
            { text: '指南', link: '/guide/' },
            {
                text: '规范',
                items: [
                    {
                        text: 'CSS',
                        link: '/standard/css.html'
                    },
                    {
                        text: 'HTML',
                        link: '/standard/html.html'
                    },
                    {
                        text: 'JavaScript',
                        link: '/standard/javascript.html'
                    },
                    {
                        text: 'Egg.js',
                        link: '/standard/eggjs.html'
                    }
                ]
            },
            { text: '关于我', link: '/about/' }
        ],
        sidebar: {
            '/standard/': ['css', 'html', 'javascript', 'eggjs']
        },
        smoothScroll: true
    },
    plugins: [
        ['@vuepress/active-header-links'],
        ['@vuepress/back-to-top'],
        ['@vuepress/medium-zoom']
    ]
}
