import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'

import defaultPostImg from './../../static/img/default-post-img.jpg'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              description
              thumbnail {
                publicURL
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <section id="one" className="tiles">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <article
          key={node.id}
          style={
            node.frontmatter.thumbnail
              ? {
                  backgroundImage: `url(${node.frontmatter.thumbnail.publicURL})`,
                }
              : { backgroundImage: `url(${defaultPostImg})` }
          }
        >
          <header className="major">
            <h3>{node.frontmatter.title}</h3>
            <p>{node.frontmatter.description}</p>
            <span>— {node.frontmatter.date}</span>
          </header>
          <Link to={node.fields.slug} className="link primary"></Link>
        </article>
      ))}
    </section>
  )
}
