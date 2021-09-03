function Footer() {
    return (
        <footer className='page-footer green lighten-4'>
            <div className='footer-copyright'>
                <div className="container">
                @ {new Date().getFullYear()} Copyright Text 
                <a href="https://github.com/webbomj/react-shop" className='grey-text text-lighten-4 right'>
                    Repo
                </a>
                </div>
            </div>
        </footer>
    )
};

export {Footer};