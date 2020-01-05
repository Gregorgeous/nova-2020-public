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
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Massa libero</h2>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
                Pellentesque condimentum sem. In efficitur ligula tate urna.
                Maecenas laoreet massa vel lacinia pellentesque lorem ipsum
                dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et
                sagittis libero. Mauris aliquet magna magna sed nunc rhoncus
                amet pharetra et feugiat tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/landing" className="button next">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
