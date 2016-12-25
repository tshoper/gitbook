var pkg = require('./package.json');

module.exports = {
    // Documentation for GitBook is stored under "docs"
    root: './docs',
    title: 'GitBook帮助文档',
    language: "zh-hans",
    // Use the "official" theme
    plugins: ['sitemap','adsense'],

    variables: {
        version: pkg.version
    },

    pluginsConfig: {
        sitemap: {
            hostname: 'https://toolchain.gitbook.com'
        },
	adsense:{
	    client:'pub-6708784301423513',
	    slot:'1905927835',
	    format:'auto',
	    element:'.page-inner section'
	}
    }
};
