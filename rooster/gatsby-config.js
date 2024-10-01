module.exports = {
  plugins: [
    {
      resolve: `gonation-theme-custom`,
      options: {
        businessIDs: [
          'bzn-jq28r4gkRgCKHRgpAp6laA',
          'bzn-OCbyCpJiRNqjZQKEOL39Mw',
          //   'bzn-N-9mvF1WRCGg83IHC-oXKA',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Vollkorn\:400,500,600,700,800`,
          `Open Sans\:300,400,400,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
  ],
};
