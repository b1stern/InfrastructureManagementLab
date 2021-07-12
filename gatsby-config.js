module.exports = {
  siteMetadata: {
    title: "Infrastructure Management Lab",
    description: "Hybrid Application Management - tutorials for IBM Infrastructure Management Labs",
    keywords: "gatsby,theme,carbon",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Carbon Design Gatsby Theme",
        icon: "src/images/favicon.svg",
        short_name: "Gatsby Theme Carbon",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0062ff",
        display: "browser",
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        iconPath: './src/images/custom-icon-512.png',
        isSearchEnabled: true,
        repository: {
          baseUrl:
            'https://github.com/b1stern/InfrastructureManagementLab',
          subDirectory: '/',
          branch: 'master'
        },
      },      
    }
  ],
  pathPrefix: "/InfrastructureManagementLab"
};
