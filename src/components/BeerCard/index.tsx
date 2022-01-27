import { Link } from "react-router-dom";
import { Beer } from "../../types/beer";

type Props = {
    beer: Beer;
}

function BeerCard({ beer } : Props){

    return(
        <div>
            <img className="beer-card-image" src={beer.image} alt={beer.title} />
            <div className="beer-card-bottom-container">
                <h3>{beer.title}</h3>
                

                <Link to={`/form/${beer.id}`}>
                    <div className="btn btn-primary beer-btn">Carrinho</div>
                </Link>
            </div>
        </div>
    )
}

export default BeerCard