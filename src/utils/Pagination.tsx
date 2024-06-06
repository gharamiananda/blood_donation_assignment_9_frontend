import React, { FC } from 'react';
import { Button } from 'react-bootstrap';

const Pagination:FC<{
    renderPaginationNumbers:any,
    previousPage:any,
    nextPage:any, canPreviousPage:boolean, canNextPage :boolean,
    shoulNotShow?:boolean

}> = ({ renderPaginationNumbers,
    previousPage,
    nextPage, canPreviousPage, canNextPage ,
shoulNotShow
}) => {

    if(shoulNotShow){
        return null
    }


    return (
        <div className="col-sm-auto">
            <ul className="pagination pagination-separated mb-0 justify-content-center justify-content-sm-start gap-1">
                <li className={!canPreviousPage ? 'page-item disabled' : 'page-item'} onClick={previousPage}>
                    <Button variant="link" className="page-link">Previous</Button>
                </li>
                {renderPaginationNumbers}
                <li className={!canNextPage ? 'page-item disabled' : 'page-item'} onClick={nextPage}>
                    <Button variant="link" className="page-link">Next</Button>
                </li>
                {/* <li className={!canNextPage ? 'page-item disabled' : 'page-item'} onClick={nextPage}>
            ....
                </li> */}
            </ul>

        </div>
    )
}

export default Pagination