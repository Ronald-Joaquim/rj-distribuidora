import { BeerPage } from "../../types/beer";
import './styles.css';

type Props = {
    page: BeerPage;
    onChange: Function
}

function Pagination( { page, onChange } : Props){

    return(
        <div className="beer-pagination-container">
            <div className="beer-pagination-box">
                <button className="beer-pagination-button"
                disabled={page.first} onClick={() => onChange(page.number - 1)} ></button>
                <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                <button className="beer-pagination-button"
                disabled={page.last} onClick={() => onChange(page.number + 1)} ></button> 
            </div>
        </div>
    );
}

export default Pagination;