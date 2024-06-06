import { useGetMyRequestsQuery, useGetRequestsToMeQuery } from '@/redux/api/donorApi';
import CustomTable from '@/utils/CustomTable'
import React, { useState } from 'react'

const MyRequestList = () => {


    const [page, setPage] = useState(1);
const [limit, setlimit] = useState(5);

const {data}=useGetMyRequestsQuery(undefined);

console.log('data useGetRequestsToMeQuery', data)
    const [selectedRowsTable, setSelectedRowsTable] = useState<string[]>([]);


const columns : ({
    Header: string;
    fieldName: string;
    CustomDesign?: (cellProps: any) => React.JSX.Element;
})[] =
[
  
  {
    Header: "",
    fieldName:'',
  },
  {
    Header: "Donor's name",
    fieldName:'donorName',
  },
  {
    Header: "Blood type",
    fieldName:'bloogGroup',
  },
  

  {
    Header: "Status",
    fieldName:'requestStatus',
  },

  {
    Header: "contact Info",
    fieldName:'phoneNumber',
    CustomDesign:(it)=> it?.requestStatus==='APPROVED' ? it?.phoneNumber :'-'
  },
  
   
  {
    Header: "Reason",
    fieldName:'reason',
  },

 
]

  return (
    <>
     <CustomTable
                  limit={limit} 
                  setlimit={setlimit} 
                  columns={columns} 
                  rowsData={data|| []} 
                  page={page} 
                  setPage={setPage}
                  metaData={{}}  />
    
    </>
  )
}

export default MyRequestList