import React from 'react'
import PropTypes from 'prop-types'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Menu = props => {
  let data = useStaticQuery(graphql`
    query {
      menuYaml(id: { eq: "3ba9ad51-65a2-5bb0-9cd7-501794a21e0f" }) {
        topLevelMainMenuItems {
          menuItemName
          type
          urlValue
        }
      }
    }
  `)
  data = data.menuYaml.topLevelMainMenuItems
  console.log('data')
  console.log(data)

  const renderedMenu = data.map(obj => (
    <li
      className={obj.menuItemName.includes('Strona') ? 'button fit' : ''}
      key={obj.urlValue}
    >
      {console.log()}
      {obj.urlValue.includes('https://nova-warszawazoliborz.netlify.com') ? (
        <Link
          activeStyle={{ color: '#808080' }}
          to={obj.urlValue.replace(
            'https://nova-warszawazoliborz.netlify.com',
            ''
          )}
        >
          {obj.menuItemName}
        </Link>
      ) : (
        <a href={obj.urlValue}>{obj.menuItemName}</a>
      )}
    </li>
  ))

  return (
    <nav id="menu">
      <div className="inner">
        <ul className="links">{renderedMenu}</ul>
        {/* TODO: A SECOND TYPE OF MENU - DECIDE IF WANT TO USE IT */}
        {/* <ul className="actions vertical">
          <li>
            <a href="#" className="button special fit">
              Get Started
            </a>
          </li>
          <li>
            <a href="#" className="button fit">
              Log In
            </a>
          </li>
        </ul> */}
      </div>
      <a className="close" onClick={props.onToggleMenu} href="#">
        Close
      </a>
    </nav>
  )
}

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
