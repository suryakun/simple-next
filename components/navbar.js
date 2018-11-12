import React from 'react'
import Link from 'next/link'

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand">SimpleWebview</span>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/login">
                                <a className="nav-link">Login</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/discover">
                                <a className="nav-link" href="#">Discover</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}