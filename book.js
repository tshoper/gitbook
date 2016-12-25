var pkg = require('./package.json');

module.exports = {
    // Documentation for GitBook is stored under "docs"
    root: './docs',
    title: 'GitBook帮助文档',
    language: "zh-hans",
    // Use the "official" theme
    plugins: ['sitemap'],

    variables: {
        version: pkg.version
    },

    pluginsConfig: {
        sitemap: {
            hostname: 'https://toolchain.gitbook.com'
        }
    }
};
