import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../layouts/MainLayout'
import Banner from '../components/Banner'
import PostSection from './../components/landingPostsSection'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Gatsby Starter - Forty"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <PostSection></PostSection>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
