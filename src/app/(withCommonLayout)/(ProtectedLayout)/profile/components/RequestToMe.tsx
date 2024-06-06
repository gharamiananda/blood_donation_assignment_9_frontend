import { useGetMyRequestsQuery, useGetRequestsToMeQuery, useUpdateRequestMutation } from '@/redux/api/donorApi';
import CustomTable from '@/utils/CustomTable'
import React, { useState } from 'react'

const RequestToMeList = () => {


    const [page, setPage] = useState(1);
const [limit, setlimit] = useState(5);

const {data}=useGetRequestsToMeQuery(undefined);

const[updateRequestFn]=useUpdateRequestMutation()
console.log('data', data)
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
    Header: "Requester's name",
    fieldName:'requesterName',
  },
  {
    Header: "Blood type needed",
    fieldName:'bloogGroup',
  },
  

  {
    Header: "Status of the request",
    fieldName:'requestStatus',

    CustomDesign:(it)=><>
    
    <select value={it?.requestStatus} onChange={e=>{
      updateRequestFn({...it,body:{status:e.target.value}})
    }}>
      <option value="PENDING">Pending</option>
      <option value="APPROVED">Approved</option>
      <option value="REJECTED">Rejected</option>

    </select>
    </>
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

export default RequestToMeList