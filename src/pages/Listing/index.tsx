import axios from "axios";
import { useEffect, useState } from "react";
import { BeerPage } from "../../types/beer";
import { BASE_URL } from "../../utils/requests";
import FormCard from "../../components/FormCard";
import Pagination from "../../components/Pagination";

function Listing(){
    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<BeerPage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true,
    });

    useEffect(() =>{
        axios.get(`${BASE_URL}/beer?size=12&page=${pageNumber}&sort=id`)
        .then(response => {
            const data = response.data as BeerPage;
            setPage(data);
        });
    }, [pageNumber]);

    const handlePageChange = (newPageNumber : number) => {
        setPageNumber(newPageNumber);
    }

    return(
        <>
        <Pagination page={page} onChange={handlePageChange} />

        <div className="container">
            <div className="row">
                {page.content.map(beer => (
                    <div key={beer.id} className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                        <FormCard beerId="{beer}" />
                    </div>
                )
                )}
                    </div>
           
        </div>
        </>
    );
}

export default Listing;