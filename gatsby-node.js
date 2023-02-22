const path = require("path")

//Create WP Pages
exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const pages = await graphql(`
  query DynamicPageQuery {
    allWpPage {
      edges {
        node {
          slug
        }
      }
    }
    allWpPressRelease {
      edges {
        node {
          slug
        }
      }
    }
  }
  
  `)

  //WP Pages
  pages.data?.allWpPage.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}`,
      component: path.resolve("./src/templates/WpPageTemplate.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })

  //Press Release Pages
  pages.data?.allWpPressRelease.edges.forEach(edge => {
    createPage({
      path: `/press-releases/${edge.node.slug}`,
      component: path.resolve("./src/templates/PressReleaseTemplate.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

