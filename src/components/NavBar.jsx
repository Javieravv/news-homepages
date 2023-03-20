import { useRef, useState } from 'react'
import '../news-styles.css'

export const NavBar = () => {

  const menuPage = useRef()
  const [viewMenu, setViewMenu] = useState(false)
  console.log ( viewMenu )

  const clickMenu = () => {
    console.log ( menuPage )
    if ( menuPage.current.classList.value.includes('navbar-options-ul-show') ) {
      console.log ('Entramos por acá....')
      menuPage.current.classList.add('navbar-options-ul')
      menuPage.current.classList.remove('navbar-options-ul-show')
      setViewMenu(!viewMenu)
    } else {
      console.log ('Entramos por el otro lado...')
      menuPage.current.classList.add('navbar-options-ul-show')
      menuPage.current.classList.remove('navbar-options-ul')
      setViewMenu(!viewMenu)
    }
  }

  return (
    <nav className = "navbar">
      <section className='navbar-logo'>
          <img 
            src='./assets/images/logo.svg'
            alt=""
          />
      </section>
      <section className="navbar-options">
            <ul
              ref={ menuPage }
              className="navbar-options-ul"
            >
                <li><a href="#">Home</a></li>
                <li><a href="#">New</a></li>
                <li><a href="#">Popular</a></li>
                <li><a href="#">Trending</a></li>
                <li><a href="#">Categories</a></li>
            </ul>
            <img 
              className='icon-menu'
              src={ (!viewMenu) ? './assets/images/icon-menu.svg' : './assets/images/icon-menu-close.svg'}
              onClick={ clickMenu }
              alt=""
            />
      </section>
    </nav>
  )
}
