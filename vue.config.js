const { defineConfig } = require('@vue/cli-service')
// const SitemapPlugin = require('sitemap-webpack-plugin').default;

const routes = [
  {
    path: '/',
    lastmod: new Date().toISOString().slice(0,10),
    priority: '0.8',
    changefreq: 'hourly'
  },
];

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    sitemap: {
      baseURL: "https://kpbat.com",
      routes,
    }
  }
  // configureWebpack: {
  //   plugins: [
  //     new SitemapPlugin('https://kpbat.com', paths, {
  //       filename: 'sitemap.xml',
  //       lastmod: true,
  //       changefreq: 'hourly',
  //       priority: '0.8'
  //     })
  //   ]
  // }
})