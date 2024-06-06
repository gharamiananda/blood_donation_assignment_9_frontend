import React, { Suspense } from 'react'
import DonorListCOmponent from './components/DonorListComponnet'

const DonorListPage = () => {
  return (
    <>
    <Suspense fallback={<p>Loading....</p>}>

    <DonorListCOmponent />
    </Suspense>
    
    </>
  )
}

export default DonorListPage