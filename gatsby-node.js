const path = require(`path`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    fmImagesToRelative(node)
    const fileNode = getNode(node.parent)
    createNodeField({
      node,
      name: `slug`,
      value: `/${fileNode.sourceInstanceName}/${fileNode.name}`,
    })
  }
}

exports.sourceNodes = ({ getNodesByType }) => {
  const fileNodes = getNodesByType(`File`)
  const markdownNodes = getNodesByType(`MarkdownRemark`)
  fileNodes.forEach(imgNode => fmImagesToRelative(imgNode))
  markdownNodes.forEach(mdNode => fmImagesToRelative(mdNode))
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
