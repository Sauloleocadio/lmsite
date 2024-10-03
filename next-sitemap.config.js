/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL ||
    "https://www.lmesteticaautomotiva.com.br/" ||
    "https://lmesteticaautomotiva.com.br/",
  generateRobotsTxt: true, // (optional)
  // ...other options
};
