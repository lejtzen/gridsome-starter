// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome Starter',
  siteUrl: 'example.com',
  permalinks: {
    trailingSlash: false,
  },
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
      use: 'gridsome-plugin-gtag',
      options: {
        config: {
          id: process.env.GRIDSOME_GOOGLE_ANALYTICS,
          enabled:
            process.env.NODE_ENV === 'production' &&
            process.env.GRIDSOME_GOOGLE_ANALYTICS,
        },
      },
    },
  ],
}
