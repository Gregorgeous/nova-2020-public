import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'

import pic01 from '../assets/images/pic01.jpg'

export default ({ children }) => {
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
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <section id="one" className="tiles">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        // <div key={node.id}>
        //   <h3
        //     css={css`
        //       margin-bottom: ${rhythm(1 / 4)};
        //     `}
        //   >
        //     {node.frontmatter.title}{' '}
        //     <span
        //       css={css`
        //         color: #bbb;
        //       `}
        //     >
        //       — {node.frontmatter.date}
        //     </span>
        //   </h3>
        //   <p>{node.excerpt}</p>
        // </div>
        <article key={node.id} style={{ backgroundImage: `url(${pic01})` }}>
          <header className="major">
            <h3>{node.frontmatter.title}</h3>
            <p>
              {node.excerpt.length > 50
                ? node.excerpt.substring(0, 50) + '...'
                : node.excerpt}
            </p>
          </header>
          <Link to={node.fields.slug} className="link primary"></Link>
        </article>
      ))}
    </section>
  )
}
