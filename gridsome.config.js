// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome Template',
  siteUrl: 'example.com',
  plugins: [
    {
      use: 'gridsome-plugin-svg',
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        exclude: [],
        config: {
          '/': {
            changefreq: 'monthly',
            priority: 1.0,
          },
          '/*': {
            changefreq: 'weekly',
            priority: 1.0,
          },
        },
      },
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: true,
        shouldTimeTravel: true,
      },
    },
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900,
      },
    },
  ],
}
