import  { useState, useEffect } from "react";
import data from '../data/index.js'
import GameCard from "./GameCard.js";
import HeaderImage from "./HeaderImage.js";
import Navbar from "./Navbar.js";
import action from '../assets/icon-action.png'
import sport from '../assets/icon-sport.png'
import adventure from '../assets/icon-adventure.png'
import racing from '../assets/icon-racing.png'


const Home = () => {

    // search section
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
 
  
    const handleSearch = (event) => {
      event.preventDefault();
      const filteredGames = data.filter(
        (game) => game.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filteredGames);
      setSelectedCategory(null); // Reset category when performing a search
    };

    // sort section

    const [gamesData, setGamesData] = useState([]);

    useEffect(() => {
      if (data.length > 0) {
        setGamesData(data);
      }
    }, []);

    // sort by lowest price
    const handleLowest = () => {
      const sortedByLowestPrice = [...gamesData].sort((a, b) => a.price - b.price);
      setGamesData(sortedByLowestPrice);
      setSelectedCategory(null); // Reset category when changing sorting

    };
  // sort by highest price
    const handleHighest = () => {
      const sortedByHighestPrice = [...gamesData].sort((a, b) => b.price - a.price);
      setGamesData(sortedByHighestPrice);
      setSelectedCategory(null); // Reset category when changing sorting
    };
  
    // sort by rating
    const handleRatings = () => {
      const sortedByRatings = [...gamesData].sort((a, b) => b.ratings - a.ratings);
      setGamesData(sortedByRatings);
      setSelectedCategory(null); // Reset category when changing sorting
    };

    // handle filtering by category
    const handleFilterByCategory = (category) => {
      const filteredGames = gamesData.filter((game) => game.category === category);
      setFilteredData(filteredGames);
      setSelectedCategory(category); // Set the selected category
      };

    const handleResetCategory = () => {
      setFilteredData([]); // Clear the filtered data
      setSelectedCategory(null); // Reset the selected category to null
    };


    const GamesCards = (filteredData.length > 0 ? filteredData : gamesData).map((game) => (
        <GameCard 
        key={game.id}
        title={game.title}
        price={game.price}
        imageUrl1={game.imageUrl1}
        category = {game.category}
        ratings={game.ratings}
        />

    ));


    return ( 
        <section className="container-fluid">
           <Navbar 
           searchTerm={searchTerm}
           setSearchTerm = {setSearchTerm}
           handleSearch = {handleSearch} 
           />


           <div className="container wrapper">
            <div className="header-section">
              <HeaderImage />
            </div>


          <div className="aside-section">
            <h2 className="aside-category-title">Categories</h2>
            <div className="category-group">

              <button
                className={`category-item ${selectedCategory === "action" ? "active" : ""}`}
                onClick={()=>handleFilterByCategory("action")}>
                <img src={action} className="category-item-icon" alt="action display" />
                Action
              </button>

              <button
                className={`category-item ${selectedCategory === "sport" ? "active" : ""}`}
                onClick={()=>handleFilterByCategory("sport")}>
                <img src={sport} className="category-item-icon" alt="sport display" />
                Sport
              </button>

              <button
                className={`category-item ${selectedCategory === "adventure" ? "active" : ""}`}
                onClick={()=>handleFilterByCategory("adventure")}>
                <img src={adventure} className="category-item-icon" alt="adventure display" />
                Adventure
              </button>

              <button
                className={`category-item ${selectedCategory === "racing" ? "active" : ""}`}
                onClick={()=>handleFilterByCategory("racing")}>
                <img src={racing} className="category-item-icon" alt="racing display" />
                Racing
              </button>

            </div>
            <button className="reset-button" onClick={handleResetCategory}>Reset</button>

            <h2 className="aside-sort-title">Sort By</h2>
            <div className="sort-group">
              <button className="sort-item" onClick={handleHighest}>Highest Price</button>
              <button className="sort-item" onClick={handleLowest}>Lowest Price</button>
              <button className="sort-item" onClick={handleRatings}>Ratings </button>
            </div>
          </div>

          <div className="main-section">
            <h2 className="main-title">Explore Amazing Games</h2>
            <div className="container game-group" >
                {GamesCards}
            </div>
          </div>

          </div>
        </section>
     );
}
 
export default Home;