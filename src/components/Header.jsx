function Header() {
    return (
        <nav className='green darken-1'>
            <div className='nav-wrapper'>
                <a href="#!" className='brand-logo'>
                    React Shop
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a href="https://webbomj.github.io/projects">All project</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export {Header};