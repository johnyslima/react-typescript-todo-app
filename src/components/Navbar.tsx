import React from 'react'

export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper purple darken-3 px-1">
      <a href="/" className="brand-logo">Todo App</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/">Список дел</a></li>
        <li><a href="/">Информация</a></li>
      </ul>
    </div>
  </nav>
)