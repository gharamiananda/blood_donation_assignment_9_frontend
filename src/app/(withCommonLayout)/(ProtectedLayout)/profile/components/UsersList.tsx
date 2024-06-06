import { useUpdateUserRequestMutation, useUsersListQuery } from '@/redux/api/userApi';
import CustomTable from '@/utils/CustomTable'
import React, { useState } from 'react'

const UsersList = () => {


    const [page, setPage] = useState(1);
const [limit, setlimit] = useState(5);

const {data}=useUsersListQuery(undefined);

const[updateUserRequestFn]=useUpdateUserRequestMutation()
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
    Header: "User Email",
    fieldName:'email',
  },
  {
    Header: "Username",
    fieldName:'username',
  },
  



  {
    Header: "Status of user",
    fieldName:'status',

    CustomDesign:(it)=><>
    
    <select value={it?.status} onChange={e=>{
      updateUserRequestFn({id: it?._id,body:{status:e.target.value}})
    }}>
      <option value="in-progress"> in-progress </option>
      <option value="blocked">blocked</option>

    </select>
    </>
  },

 
]

  return (
    <>
     <CustomTable
                  limit={limit} 
                  setlimit={setlimit} 
                  columns={columns} 
                  rowsData={data?.data|| []} 
                  page={page} 
                  setPage={setPage}
                  metaData={{}}  />
    
    </>
  )
}

export default UsersList