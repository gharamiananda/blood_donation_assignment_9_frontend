'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const SearchForm = () => {
  const[searchTerm,setsearchTerm]=useState<string>('');
  const router=useRouter();

  return (
    <form 
    onSubmit={e=>{
      e.preventDefault();
      router.push(`donor-list?searchTerm=${searchTerm}`
        
      )
    }}
     className='border-info'>
      <input 
      onChange={e=>setsearchTerm(e.target.value)}
       type="text" placeholder="Search Donors" />
      <button type="submit" className="bl-submit-btn"><i className="fas fa-magnifying-glass" /></button>
    </form>  )
}

export default SearchForm