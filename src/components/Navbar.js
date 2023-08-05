import mainLogo from '../assets/game-logo.png'

const Navbar = ({ searchTerm, setSearchTerm, handleSearch }) => {

    return ( 
        <nav className="container-fluid">
        <div className="nav-bar container">
            <div className='logo-group'>
            <a href='/'
            className='logo-link'>
            <img src={mainLogo} className="main-logo" alt='this is the main logo' />
            </a>
            </div>

            <div className="search-group">
            <form>
                <input
                type="search"
                className="search-game"
                placeholder="Search Games"
                value= {searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" onClick= {handleSearch} className="shadow search-button"><i className="fa fa-search"></i></button>
                {/* <input type="submit" onClick= {handleSearch}  value = "Search"/> */}
            </form>
        </div>
        </div>
        </nav>
     );
}
 
export default Navbar;