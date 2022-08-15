/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || 'https://fjelagage.fr',
    generateRobotsTxt: true, // (optional)
    exclude: ['/mentions-legales', '/404']
}

module.exports = config;