import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'

import pic01 from '../assets/images/pic01.jpg'

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
        <article key={node.id} style={{ backgroundImage: `url(${pic01})` }}>
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
