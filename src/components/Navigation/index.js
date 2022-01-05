import React from 'react';

function Navigation(props) {
  const tabs = ['About me', 'Contact', 'Portfolio', 'Resume'];

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/React-portfolio-ggamb">
          <span role="img"> 🤓 </span> ggamb
        </a>
      </h2>
      <nav className='header-nav'>
        <ul className="nav nav-tabs flex-row space-between">
          {tabs.map((tab) => (
            <li className='nav-item'>
              <a
                href={'#' + tab.toLowerCase()}
                onClick={() => props.handlePageChange(tab)}
                className={
                  props.currentPage === tab ? 'navActive' : 'nav-link'
                }
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;