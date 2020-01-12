import React from 'react'
import { graphql } from 'gatsby'
import SubPageLayout from '../layouts/SubPageLayout'
import MainLayout from '../layouts/MainLayout'
export default ({ data }) => {
  const post = data.markdownRemark
  const postContent = (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
  return (
    <>
      {post.frontmatter.layout === 'SubPageLayout' ? (
        <SubPageLayout> {postContent} </SubPageLayout>
      ) : (
        <MainLayout>{postContent}</MainLayout>
      )}
    </>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        layout
      }
    }
  }
`
