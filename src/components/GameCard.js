import likeUncheck from '../assets/like-uncheck.png'
import likeCheck from '../assets/like-checked.png'

const GamesCard = (props) => {
    return ( 
        <div className="game-card">
            <div className="game-image-group">
                <img src= {`games-images/${props.imageUrl1}`} alt={props.title} className="game-image" />
            </div>
            <div className="game-content">
                <h2 className="game-title"> {props.title} </h2>
                <p className="game-price"> £{props.price} </p>
                <p className="game-rating"> Ratings: ({props.ratings})</p>
                <img src={likeUncheck} className='likes' alt="unchecked icon" />
            </div>
        </div>
     );
}
 
export default GamesCard;