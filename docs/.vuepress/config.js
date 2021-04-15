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
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
            { text: '指南', link: '/guide/' },
            {
                text: '规范',
                items: [
                    {
                        text: 'Developer',
                        link: '/standard/developer.html'
                    },
                    {
                        text: 'Git',
                        link: '/standard/git.html'
                    },
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
                        text: 'Vue.js',
                        link: '/standard/vuejs.html'
                    },
                    {
                        text: 'Egg.js',
                        link: '/standard/eggjs.html'
                    },
                    {
                        text: 'MySql',
                        link: '/standard/mysql.html'
                    }
                ]
            },
            { text: '代码库', link: '/library/' },
            { text: '典型案例', link: '/case/' },
            { text: '关于', link: '/about/' },
        ],
        sidebar: {
            '/standard/': ['developer', 'git', 'css', 'html', 'javascript', 'vuejs', 'eggjs', 'mysql']
        },
        smoothScroll: true
    },
    plugins: [
        ['@vuepress/active-header-links'],
        ['@vuepress/back-to-top'],
        ['@vuepress/medium-zoom']
    ]
}
