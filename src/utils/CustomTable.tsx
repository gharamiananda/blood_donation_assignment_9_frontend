import React, { Dispatch, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Pagination from './Pagination';

function CustomTable({ columns, rowsData, page, setPage, metaData, limit,setlimit}:{

    setlimit:  Dispatch<React.SetStateAction<number>>,
    limit:number,
    columns : ({
        Header: string;
        CustomDesign?: (cellProps: any) => React.JSX.Element;
        fieldName?: undefined;
    } | {
        Header: string;
        fieldName: string;
        CustomDesign?: (cellProps: any) => React.JSX.Element;
    })[],
    rowsData:any[],
    page:number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    metaData:any
}) {

  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = page * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const previousPage = () => {
    if (page !== 1) {
      setPage(page - 1)
    }
  };
  const canNextPage = page < metaData?.pageSize;

  const nextPage = () => {
    if (page < metaData?.pageSize) {
      setPage(page + 1)
    }
  };
  const canPreviousPage = page > 1

  const renderPaginationNumbers = () => {
    // const totalPages = Math.ceil(metaData?.count / pageSize);
    const startPage = Math.max(1, Math.min(page - 2, metaData?.pageSize - 4));
    const endPage = Math.min(startPage + 4, metaData?.pageSize);
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li className={page === i ? 'page-item active' : 'page-item'} key={i}>
          <Button variant="link" className="page-link" onClick={() => setPage(i)}>{i}</Button>
        </li>
      );
    }
    return pages;
  };

  return (
    <>

      <Table responsive>
        <thead>
          <tr>
            {
              columns?.map(it => (
                <th key={it?.Header}>{it?.Header}</th>
              ))
            }

          </tr>
        </thead>
        <tbody>
          <td >#</td>
          {rowsData?.length > 0 ?
            rowsData?.map((it, index) => {
              return (<tr key={it?.id || index}>
                {
                  columns?.map((sIt, ind) => {
                    if (sIt?.CustomDesign) {
                      return (
                        <td key={ind}>{sIt?.CustomDesign(it)}</td>
                      )
                    }
                    return (
                      <td key={ind}>{it?.[sIt?.fieldName as string]}</td>
                    )
                  })
                }
              </tr>
              )
            })
            :
            <tr className='text-center'>
               <div className="noresult" style={{ display: "none" }}>
                                        <div className="text-center">
                                            <h5 className="mt-2">Sorry! No Result Found</h5>
                                            <p className="text-muted mb-0">We&apos;ve searched more than 150+ Orders We did not find any orders for you search.</p>
                                        </div>
                                    </div>
              {/* No order Found */}
              </tr>
          }

        </tbody>

      </Table>

      <Row className="align-items-center mt-2 py-2 px-2 gy-2 text-center text-sm-start">
        <div className="col-sm">
          <p className="text-muted flex-grow-1 mb-0">{metaData?.lowerLimit ? `Showing ${metaData?.lowerLimit}-${metaData?.upperLimit} of ${metaData?.count} results` : ''}</p>
        </div>
        {renderPaginationNumbers().length > 0 &&  <div className="col-sm-auto">
          {/* {metaData?.lowerLimit && */}
          {/* {rowsData?.length >= 10 && */}
          <Pagination
            renderPaginationNumbers={renderPaginationNumbers()}
            previousPage={previousPage}
            nextPage={nextPage}
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
          />
         
        </div>}
      </Row>
    </>
  );
}

export default CustomTable;