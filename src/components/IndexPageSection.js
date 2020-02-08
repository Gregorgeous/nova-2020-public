// NOTE: Currently this component is not in use but can serve as a starter in making the section for district announcements if the decision is made that they should appear on the page.
import React from 'react'

const IndexPageSection = () => {
  return (
    <section id="two">
      <div className="inner">
        <header className="major">
          <h2>Massa libero</h2>
        </header>
        <p>
          Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
          libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
          Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas
          laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et
          orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris
          aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.
        </p>
        <ul className="actions">
          <li>
            {/* NOTE: this below crashes for some reason..  */}
            {/* <Link to="/landing" className="button next">
              Get Started
            </Link> */}
          </li>
        </ul>
      </div>
    </section>
  )
}

export default IndexPageSection
