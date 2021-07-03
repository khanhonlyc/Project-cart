import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
        <header>
            <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-dark scrolling-navbar double-nav">

                <div className="float-left">
                    <a data-activates="slide-out" className="button-collapse">
                        <i className="fa fa-bars"></i>
                    </a>
                </div>

                <div className="breadcrumb-dn mr-auto">
                    <ol className="breadcrumb header-breadcrumb">
                        <li className="breadcrumb-item">
                            <a>ホームページ</a>
                        </li>
                    </ol>
                </div>

            </nav>

        </header>
    );
  }
}

export default Header;
