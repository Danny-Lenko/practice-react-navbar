import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [linksOpened, setLinksOpened] = useState(false)
  const listRef = useRef()
  const containerRef = useRef()

  useEffect(() => {
    const minHeight = listRef.current.getBoundingClientRect().height

    if (linksOpened) {
      containerRef.current.style.height=`${minHeight}px`
    } else {
      containerRef.current.style.height="0"
    }
  }, [linksOpened])

  function toggleLinks() {
    setLinksOpened(!linksOpened)
  }

  const allLinks = links.map(link => (
    <li key={link.id}>
      <a href={link.url}>{link.text}</a>
    </li>
  ))

  const allSocial = social.map(icon => (
    <li key={icon.id}>
      <a href={icon.url}>{icon.icon}</a>
    </li>
  ))

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="coding addict"/>
          <FaBars className="nav-toggle" onClick={toggleLinks} />
        </div>

        <div 
          className="links-container"
          ref={containerRef}
        >
          <ul className="links"  ref={listRef}>
            {allLinks}
          </ul>
        </div>
        <ul className="social-icons">
          {allSocial}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
